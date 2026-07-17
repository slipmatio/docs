---
tags:
  - artist
  - user
  - events
---

# Events

An **event** is a show on Slipmat: a live performance with its own page, its own chat, and an
audience. Whether you're playing the show or listening to it, everything on Slipmat happens around
events.

## The three ways to run a show

Slipmat gives artists three ways to put on a show. They all end up as the same kind of live page for
listeners — they just differ in how the show gets started.

### Scheduled events

This is the classic way to play on Slipmat, and it works like a real-world gig. You pick a date and
time, promote it in advance, and on the day you start and end the show yourself.

- Shows always start **on the hour**.
- The **doors open 30 minutes before** showtime. During this warmup, listeners can join the chat and
  hang around before the music starts.
- Listeners can RSVP, add the show to their calendar, and get a notification when it's about to
  start.

### Ad hoc events

Ad hoc events are for spur-of-the-moment streams — you just fire up your streaming software and go
live, no schedule needed. Great for spinning some records on a whim or hanging out with your fans,
but not built for promotion.

- An ad hoc show goes live shortly after your stream connects, and ends automatically when you stop
  streaming.
- It lives at your artist live address, `next.slipmat.io/<your-artist>/live/`.
- Only fans who have **opted in to ad hoc notifications** are told about it.
- Ad hoc streaming is only available when you don't have a scheduled event starting within the next
  **60 minutes** — that window is reserved for the scheduled show.

::: warning Ad hoc chat is your artist chat channel
Ad hoc events use your permanent artist chat channel instead of a dedicated event channel. Whatever
gets posted there stays there for everyone to see afterwards.
:::

### Proposed events

Not sure which date works best? Propose a show and let your fans decide. You suggest **one to four
candidate dates**, set a minimum number of "yes" votes, and open it up for voting. Fans vote **yes**,
**maybe**, or **no** on each date. When a date reaches your minimum, Slipmat automatically turns the
proposed event into a real scheduled event.

- Voting closes at least **24 hours before** the earliest proposed date.
- You stay in control: you can **confirm a date by hand** at any time to schedule the show right away,
  or **cancel the whole thing** — you don't have to wait for the voting to decide.
- If nothing reaches the threshold in time voting expires, but you can still confirm a date by hand
  afterwards.

Artists who run regular shows can also set up **recurring shows**, which schedule their episodes
automatically. Each episode is just a normal scheduled event.

## What happens during a show

Every live show moves through the same stages:

- **Warmup** — the doors are open and chat is live, but the video hasn't started yet. (Ad hoc events
  skip this and go straight to live.)
- **Live** — you're streaming; the show is on.
- **Ended** — the show has finished but chat stays open for a short **cooldown** so people can say
  their goodbyes. (If you've set a redirect to a next event, your audience is forwarded there right
  away instead of going into cooldown.)
- **Archived** — the show moves into your archive, its final stats are ready, and its chat closes.

::: tip One show at a time
An artist can only have **one** live show running at a time. You can schedule as many future events
as you like — overlapping is fine — but only one can actually be on the air.
:::

When a show ends, any open song requests are closed automatically and the show's statistics are
calculated.

## Who can see and join a show

Every event has a **visibility** setting that controls two things: whether it shows up in Slipmat's
public listings, and who is allowed to join in.

- **Public** — listed for everyone to discover; anyone can watch and take part.
- **Unlisted** — not listed anywhere, but anyone with the link can watch and take part.
- **Members only** — listed, but only your fans can join.
- **Invite only** — not listed; only your team and the people you've invited can join.

Anyone can open a public or unlisted show's page and watch, even without an account. Joining the chat
requires signing in.

## Playing together — collaborators

You can invite other artists to a scheduled show as **collaborators**, either with full access (they
can help run and edit the event) or read-only access. Collaborators' teams get access to the show and
its private crew chat. Collaboration isn't available for ad hoc events or soundchecks.

## Related

- [Streaming & Going Live](/guides/artists/streaming/) — how to actually get on the air, and how to
  test your stream first
- [The Live Page](/guides/live-page/) — what listeners see during a show
- [Chat](/guides/chat/) — how event chat works
