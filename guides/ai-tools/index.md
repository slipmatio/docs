---
tags:
  - artist
  - assistant
---

# Connecting an AI Assistant

Slipmat lets you connect an AI assistant — like ChatGPT or Claude — to your artist account, so you can manage
your profile, schedule events, check your stats, and search release notes and documentation just by asking in plain language. Instead of
clicking through your dashboard, you can say "Schedule a set for next Friday at 10pm" or "How did my
last event do?" and let the assistant do the work.

This tool is meant for those who are interested in hacking with LLMs. Everything the assistant can do, you can also do yourself in your Artist Dashboard. Think of it as a hands-free way to get to the same place.

::: tip What is MCP?
The connection uses a shared standard called **MCP** (the Model Context Protocol) — a common way for
AI assistants to talk to services like Slipmat. You don't need to understand the technology to use
it. When a guide mentions a "connector" or an "MCP server," it's talking about this same connection.
:::

::: info The assistant is not part of Slipmat
The AI assistant itself — ChatGPT, Claude, or whichever app you use — is a **third-party tool** made by
another company, not something Slipmat runs or controls. Slipmat only provides the secure connection
that lets your assistant work with your artist data once you approve it. How the assistant behaves,
what it costs, and how it handles your conversation are up to that company.
:::

## What you need

- An account on Slipmat. The connection only works for authenticated Slipmat accounts — the assistant needs to be able to sign in.
- An AI assistant that supports MCP connectors, such as ChatGPT or Claude (desktop app, on the Web, or in a terminal.

## What the assistant can do

Once connected, the assistant can help you with:

- **Your artist profile** — view it and update your artist profile details.
- **Your events** — list your events, schedule new ones, edit upcoming ones, and work with drafts.
- **Proposed events** — propose an event with a few candidate times and let your listeners vote on
  when it should happen.
- **Your stats** — review how a past event did (audience, chat, hype, song requests, tips, and
  follower changes) and look at trends across your events and your follower growth over time.
- **Your chat history** — read back the chat from one of your own events, either the whole thing or
  just the links, shared music, or system messages.
- **Your audience** — list the fans of your artist and look up a public user profile by username.
- **Your activity log** — read back your own or your artist's [activity log](/guides/activity-log/)
  from the last 30 days.
- **Staying in the loop** — search Slipmat's [Backstage](/reference/glossary/#backstage) community forum and
  catch up on the latest artist news and release notes.
- **Reporting bugs** — walk you through filing a bug report, checking for duplicates first, and
  attaching a screenshot if you have one.

::: warning Use proper assistant permissions
When you authenticate the assistant you give it **full access** to read _and_ write your data. Assistant cannot directly delete your data but it can, for example, permanently edit your profile data. Set your assistant permission settings in the tool you are using so that you are comfortable that it won't accidentally change things you didn't mean to. Remember that **there is no undo**! Reading your data never changes anything.
:::

## What it can't do

The connection is deliberately limited to keep your account safe. The assistant **cannot**:

- Start, stop, or cancel a live event, or control your stream
- Run ad hoc events or soundchecks
- Delete an event or your profile — the only thing it can delete is a proposed event
- Upload profile or event photos — new events use your default event photo. (Bug report screenshots
  are the one exception.)
- Do anything you couldn't already do yourself — it works within your existing permissions

For any of these, use your Artist Dashboard as usual.

## Connecting

The address to connect to is:

```
https://api.slipmat.io/mcp
```

The first time you connect, you'll be sent to Slipmat to log in and approve access. This is the same
login you always use — your assistant never sees your password. On the approval screen you'll grant
the **Read and edit artist data** permission, and then you're connected. You can revoke this access
from Slipmat at any time.

### ChatGPT

As Slipmat MCP Server is not yet an official ChatGPT App, you need to enable Developer mode to use this from the Web client.

1. Open **Settings → Security and login → Turn Developer mode on**
2. Then go to **Plugins** and click the `+`-button to add a new Plugin
3. Put `https://api.slipmat.io/mcp` as the Connection url (keep OAuth authentication) and any extra details you like
4. Authenticate the plugin once and complete the Slipmat login and approval screens.

Doing this from the ChatGPT/Codex desktop app is easier, and we are submitting this as an official ChatGPT app which will make the process **much** smoother.

### Claude (desktop app or on the Web)

1. Open **Settings → Connectors**.
2. Add a custom connector with the URL `https://api.slipmat.io/mcp`.
3. Click **Connect** and complete the Slipmat login and approval screens.

### Claude Code

If you use Claude Code from a terminal:

```bash
claude mcp add --transport http slipmat https://api.slipmat.io/mcp
```

Then run `/mcp`, choose **slipmat**, and select **Authenticate**. A browser window opens for the
Slipmat login and approval. Once you approve, `/mcp` shows the server as connected.

### Codex CLI

From a terminal:

```bash
codex mcp add Slipmat --url https://api.slipmat.io/mcp
```

## First Steps

After you get the MCP server connected, try asking something simple like "what new features have been added to Slipmat in the past month" or "show me my Slipmat artist details". You don't need to specify the connector in any special way, just mentioning Slipmat will most likely just work.

This MCP server is in very early stages of development, do post your questions, comments and suggestions on Backstage!

## If something goes wrong

- **You logged in, but the assistant sees no artists.** The artist tools only work for artists you
  own. If you're a member of an artist but not its owner, the assistant won't see it — check that
  you're using the right account.
- **The assistant can't edit your profile.** Editing profile details also needs the manage-artist
  permission, on top of ownership.
- **The assistant can't edit an event.** Only upcoming (planned or scheduled) events can be edited —
  live, finished, or cancelled events can't. Setlists are the exception; those can be updated at any
  point.

## Related

- [Artist Profile](/guides/artists/profile/) — everything the assistant can help you edit
- [Events](/guides/events/) — the kinds of events and how each one works
- [Streaming & Going Live](/guides/artists/streaming/) — going live (which you always do yourself)
