#!/usr/bin/env python3
"""git-when: View git commits by time period."""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from dataclasses import dataclass
from datetime import datetime, timedelta
from typing import Any


@dataclass(frozen=True)
class DateRange:
    start: datetime
    end: datetime
    description: str

    @property
    def start_str(self) -> str:
        return self.start.strftime("%Y-%m-%d")

    @property
    def end_str(self) -> str:
        return self.end.strftime("%Y-%m-%d")


@dataclass
class Commit:
    hash: str
    author: str
    date: str
    subject: str
    body: str = ""

    @property
    def full_message(self) -> str:
        return self.subject + ("\n" + self.body if self.body else "")


BOT_AUTHORS = {
    "renovate[bot]",
    "renovate-bot",
    "dependabot[bot]",
    "dependabot-preview[bot]",
    "snyk-bot",
    "github-actions[bot]",
}

SIMPLE_MERGE_PATTERNS = [
    r"^Merge pull request #\d+ from .+$",
    r"^Merge branch '.+' into .+$",
    r"^Merge remote-tracking branch '.+'$",
    r"^Merge tag '.+'$",
]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        prog="git-when",
        description="View git commits by time period",
        epilog="""examples:
  git-when --week 2025/1              # week 1 of 2025
  git-when --month 2025/1             # January 2025
  git-when --year 2025                # year 2025
  git-when --range 2025-01-01:2025-01-31  # custom range
  git-when -w 2025/1 -f short         # different format
  git-when -w 2025/1 --dates-only     # show only dates
  git-when -w 2025/1 --json           # JSON output
  git-when -w 2025/1 -- --author=me  # pass git options""",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )

    period = parser.add_mutually_exclusive_group(required=True)
    period.add_argument("-w", "--week", metavar="YYYY/W", help="week (e.g., 2025/1)")
    period.add_argument("-m", "--month", metavar="YYYY/M", help="month (e.g., 2025/1)")
    period.add_argument("-y", "--year", metavar="YYYY", help="year (e.g., 2025)")
    period.add_argument("-r", "--range", metavar="START:END", help="date range (YYYY-MM-DD:YYYY-MM-DD)")

    parser.add_argument(
        "-f",
        "--format",
        default="oneline",
        help="git log format (oneline, short, medium, full, fuller, raw, or custom)",
    )
    parser.add_argument("--filter-noise", action="store_true", help="filter out bot commits and simple merges")
    parser.add_argument("--dates-only", action="store_true", help="show only distinct commit dates")
    parser.add_argument("--json", action="store_true", help="output in JSON format")
    parser.add_argument("git_args", nargs=argparse.REMAINDER, help="additional git log arguments (after --)")

    return parser.parse_args()


def get_date_range(args: argparse.Namespace) -> DateRange:
    """Convert command line arguments to a date range."""
    if args.week:
        year, week = map(int, args.week.split("/"))
        return week_range(year, week)

    if args.month:
        year, month = map(int, args.month.split("/"))
        return month_range(year, month)

    if args.year:
        year = int(args.year)
        return year_range(year)

    if args.range:
        start_str, end_str = args.range.split(":")
        start = datetime.strptime(start_str, "%Y-%m-%d")
        end = datetime.strptime(end_str, "%Y-%m-%d")
        return DateRange(start, end, "custom range")

    raise ValueError("No period specified")


def week_range(year: int, week: int) -> DateRange:
    """Get Monday-Sunday range for an ISO week."""
    jan4 = datetime(year, 1, 4)
    week1_monday = jan4 - timedelta(days=jan4.weekday())
    monday = week1_monday + timedelta(weeks=week - 1)
    sunday = monday + timedelta(days=6)
    return DateRange(monday, sunday, f"week {week} of {year}")


def month_range(year: int, month: int) -> DateRange:
    """Get first-last day range for a month."""
    start = datetime(year, month, 1)
    if month == 12:
        end = datetime(year + 1, 1, 1) - timedelta(days=1)
    else:
        end = datetime(year, month + 1, 1) - timedelta(days=1)
    return DateRange(start, end, start.strftime("%B %Y"))


def year_range(year: int) -> DateRange:
    """Get Jan 1 - Dec 31 range for a year."""
    return DateRange(datetime(year, 1, 1), datetime(year, 12, 31), f"year {year}")


def is_bot_commit(author: str) -> bool:
    """Check if commit is from a known bot."""
    return author in BOT_AUTHORS


def is_simple_merge(message: str) -> bool:
    """Check if commit is a simple merge without custom message."""
    message_line = message.split("\n")[0].strip()
    return any(re.match(pattern, message_line) for pattern in SIMPLE_MERGE_PATTERNS)


def get_commits(date_range: DateRange, git_args: list[str], filter_noise: bool = False) -> list[Commit]:
    """Fetch commits from git log."""
    # Add one day to end date since git's --until is exclusive, but we need to filter
    # commits that fall outside our actual date range
    end_date_inclusive = date_range.end + timedelta(days=1)
    end_date_str = end_date_inclusive.strftime("%Y-%m-%d")

    cmd = ["git", "log", f"--since={date_range.start_str}T00:00:00Z", f"--until={end_date_str}T00:00:00Z"]
    cmd.append("--format=COMMIT_SEPARATOR%n%H%n%an%n%ad%n%s%n%b")
    cmd.append("--date=short")

    # Skip the '--' separator if present
    if git_args and git_args[0] == "--":
        git_args = git_args[1:]
    cmd.extend(git_args)

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)

        if not result.stdout.strip():
            return []

        # Parse commits
        commits = []
        commit_blocks = result.stdout.strip().split("COMMIT_SEPARATOR\n")[1:]  # Skip empty first element

        for block in commit_blocks:
            lines = block.strip().split("\n")
            if len(lines) >= 4:
                commit = Commit(
                    hash=lines[0],
                    author=lines[1],
                    date=lines[2],
                    subject=lines[3],
                    body="\n".join(lines[4:]) if len(lines) > 4 else "",
                )

                # Filter out commits outside our date range
                commit_date = datetime.strptime(commit.date, "%Y-%m-%d").date()
                if commit_date < date_range.start.date() or commit_date > date_range.end.date():
                    continue

                # Apply filters if requested
                if filter_noise and (is_bot_commit(commit.author) or is_simple_merge(commit.full_message)):
                    continue

                commits.append(commit)

        return commits

    except subprocess.CalledProcessError as e:
        sys.exit(f"Git command failed: {e.stderr}")


def get_distinct_dates(commits: list[Commit]) -> list[str]:
    """Extract distinct dates from commits."""
    dates = {commit.date for commit in commits}
    return sorted(dates)


def format_commits_text(commits: list[Commit], format: str) -> str:
    """Format commits for text output."""
    output = []

    if format == "oneline":
        for commit in commits:
            output.append(f"{commit.date} {commit.hash[:7]} {commit.subject}")
    elif format in {"short", "medium", "full", "fuller"}:
        for i, commit in enumerate(commits):
            if i > 0:
                output.append("")  # Empty line between commits
            output.append(f"commit {commit.hash}")
            output.append(f"Author: {commit.author}")
            output.append(f"Date:   {commit.date}")
            output.append("")
            output.append(f"    {commit.subject}")
            if commit.body and format in {"medium", "full", "fuller"}:
                for line in commit.body.split("\n"):
                    if line:
                        output.append(f"    {line}")
    elif format == "raw":
        for commit in commits:
            output.append(f"commit {commit.hash}")
            output.append(f"author {commit.author}")
            output.append(f"date {commit.date}")
            output.append("")
            output.append(commit.full_message)
            output.append("")
    else:
        # Custom format - run git log with the filtered commits
        if commits:
            cmd = ["git", "log", "--no-walk", f"--format={format}"]
            cmd.extend([c.hash for c in commits])
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)
            return result.stdout.strip()

    return "\n".join(output)


def output_json(data: Any) -> None:
    """Output data as JSON."""
    print(json.dumps(data, ensure_ascii=False))


def main() -> None:
    args = parse_args()

    try:
        date_range = get_date_range(args)
        commits = get_commits(date_range, args.git_args, args.filter_noise)

        if args.dates_only:
            dates = get_distinct_dates(commits)
            if args.json:
                output_json(dates)
            else:
                if dates:
                    print(
                        f"Distinct commit dates for {date_range.description} "
                        f"({date_range.start_str} to {date_range.end_str}):"
                    )
                    for date in dates:
                        print(date)
                else:
                    print(
                        f"No commits found for {date_range.description} "
                        f"({date_range.start_str} to {date_range.end_str})"
                    )

        elif args.json:
            if commits:
                output_data = [
                    {
                        "hash": commit.hash,
                        "author": commit.author,
                        "date": commit.date,
                        "subject": commit.subject,
                        "body": commit.body,
                    }
                    for commit in commits
                ]
                output_json(output_data)
            else:
                output_json([])

        else:
            # Regular text output
            if commits:
                print(
                    f"{len(commits)} commits for {date_range.description} "
                    f"({date_range.start_str} to {date_range.end_str}):\n"
                )
                print(format_commits_text(commits, args.format))
            else:
                print(f"No commits found for {date_range.description} ({date_range.start_str} to {date_range.end_str})")

    except ValueError as e:
        sys.exit(f"Error: {e}")


if __name__ == "__main__":
    main()
