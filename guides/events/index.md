---
tags:
  - artist
  - user
  - events
---

# Events

An **event** is a live performance on Slipmat, with its own page, its own chat, and an audience.
Whether you're playing it or listening to it, everything on Slipmat happens around events.

## The three ways to run an event

Slipmat gives artists three ways to put on an event. They all end up as the same kind of live page
for listeners — they just differ in how the event gets started.

### Scheduled events

This is the classic way to play on Slipmat, and it works like a real-world gig. You pick a date and
time, promote it in advance, and on the day you start and end the event yourself.

- Events always start **on the hour**.
- The **doors open 30 minutes before** the start time. During this warmup, listeners can join the
  chat and hang around before the music starts.
- Listeners can RSVP, add the event to their calendar, and get a notification when it's about to
  start.

### Ad hoc events

Ad hoc events are for spur-of-the-moment streams — you just fire up your streaming software and go
live, no schedule needed. Great for spinning some records on a whim or hanging out with your fans,
but not built for promotion.

- An ad hoc event goes live shortly after your stream connects, and ends automatically when you stop
  streaming.
- It lives at your artist live address, `/<your-artist>/live/`.
- Only fans who have **opted in to ad hoc notifications** are told about it.
- Ad hoc streaming is only available when you don't have a scheduled event starting within the next
  **60 minutes** — that window is reserved for the scheduled event.

::: warning Ad hoc chat is your artist chat channel
Ad hoc events use your permanent artist chat channel instead of a dedicated event channel. Whatever
gets posted there stays there for everyone to see afterwards.
:::

### Proposed events

Not sure which date works best? Propose an event and let your fans decide. You suggest **one to four
candidate dates**, set a minimum number of "yes" votes, and open it up for voting. Fans vote **yes**,
**maybe**, or **no** on each date. When a date reaches your minimum, Slipmat automatically turns the
proposed event into a real scheduled event.

- Voting closes at least **24 hours before** the earliest proposed date.
- You stay in control: you can **confirm a date by hand** at any time to schedule the event right away,
  or **cancel the whole thing** — you don't have to wait for the voting to decide.
- If nothing reaches the threshold in time voting expires, but you can still confirm a date by hand
  afterwards.

## What happens during an event

Every live event moves through the same stages:

- **Warmup** — the doors are open and chat is live, but the video hasn't started yet. (Ad hoc events
  skip this and go straight to live.)
- **Live** — you're streaming; the event is on.
- **Ended** — the event has finished but chat stays open for a short **cooldown** so people can say
  their goodbyes. (If you've set a redirect to a next event, your audience is forwarded there right
  away instead of going into cooldown.)
- **Archived** — the event moves into your archive, its final stats are ready, and its chat closes.

::: tip One event at a time
An artist can only have **one** live event running at a time. You can schedule as many future events
as you like — overlapping is fine, as long as no two of them start at the same time — but only one
can actually be on the air.
:::

When an event ends, any open song requests are closed automatically and the event's statistics are
calculated. A scheduled event that ended too early can be **resumed** for 30 minutes afterwards,
which returns it to warmup.

For the details of every step — what you do, what Slipmat does by itself, and when — see
[How Events Start And End](/guides/events/lifecycle/).

## Who can see and join an event

Every event has a **visibility** setting that controls two things: whether it shows up in Slipmat's
public listings, and who is allowed to join in.

- **Public** — listed for everyone to discover; anyone can watch and take part.
- **Unlisted** — not listed anywhere, but anyone with the link can watch and take part.
- **Members only** — listed, but only your fans can join.
- **Invite only** — not listed; only your crew and the people you've invited can join.

Anyone can open a public or unlisted event's page and watch, even without an account. Joining the chat
requires signing in.

## Playing together — collaborators

You can invite other artists to a scheduled event as **collaborators**, either with full access (they
can help run and edit the event) or read-only access. Collaborators' crews get access to the event
and its private crew chat. Collaboration isn't available for ad hoc events or soundchecks.

## Related

- [How Events Start And End](/guides/events/lifecycle/) — the full lifecycle in detail, including
  everything Slipmat does automatically
- [Streaming & Going Live](/guides/artists/streaming/) — how to actually get on the air, and how to
  test your stream first
- [The Live Page](/guides/live-page/) — what listeners see during an event
- [Chat](/guides/chat/) — how event chat works
