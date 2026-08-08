---
tags:
  - account
  - artist
  - user
---

# Activity Log

The activity log is a plain-language record of what happened on your account and on your artist: who
did what, when, and what Slipmat did on its own.

There are two logs:

- **Your account activity** — <https://slipmat.io/account/activity/>, under Account. What you did
  yourself.
- **Your artist activity** — <https://slipmat.io/artist/activity/>, under your artist. Everything that
  happened to that artist, including the automatic parts.

## What you see

Each line has the time, who did it, and what happened. In your account log there is also a column for
the artist it concerned. Automatic steps are listed as done by **System** — Slipmat's own scheduled
jobs and the messages coming from the streaming server.

The newest 25 lines are shown; **Load more** fetches the next page.

## What is recorded

The artist log covers:

- **Events** — created, published, edited, cancelled, deleted, hidden, and every start, end, resume
  and archive. Requests that were turned down are recorded too, with the reason — trying to start a
  second event while one is already live, for example.
- **Your stream** — connections and disconnections, rejected connections, ad hoc events starting and
  stopping, and events Slipmat ended after a long disconnection.
- **The artist** — profile and photo changes, uploaded media, crew and collaborator changes, and new
  streaming keys.
- **Proposed events** — created, updated, confirmed, expired, cancelled.

Your account log covers your sign-ins and sign-outs, your payments, and the artist changes you made
yourself.

Deliberately left out: votes on proposed events, setlist edits, and edits that are still in progress.

## Who can see it

Your account log is yours alone. The artist log is open to crew with the **manage events** or
**manage the artist** permission. Roadies don't have access to it.

The log belongs to the artist, not to the person who did the work, so it stays complete after someone
leaves your crew.

## How long it is kept

**30 days.** Older lines are deleted automatically.

::: info This is not a security log
The activity log is written for people to read. It never contains passwords, streaming keys, access
tokens, card details, or IP addresses. Slipmat keeps separate technical logs for debugging, which are
not shown here.
:::

## Elsewhere

Both logs are also available through the [API](/reference/api/) and to a connected
[AI assistant](/guides/ai-tools/).

## Related

- [How Events Start And End](/guides/events/lifecycle/) — what the automatic steps do
- [Artist Profile](/guides/artists/profile/) — crew roles and permissions
- [Account](/guides/account/) — your data, exports, and deletion
