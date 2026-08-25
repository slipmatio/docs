---
tags:
  - artist
  - events
  - streaming
---

# How Events Start And End

Every event moves through the same stages, and some of the steps happen automatically. This page is
the full picture: what starts an event, what ends it, what Slipmat does on its own, and how to get an
event back if it ended before you were finished.

## Your stream and your event are two different things

Slipmat tracks two separate things:

- **Your stream** — whether your streaming software is connected to Slipmat right now.
- **Your event** — which stage the event is in.

For a scheduled event these are not the same switch: connecting your streaming software does not
start the event, and disconnecting it does not end it. You do both yourself. Ad hoc events are the
exception — those are started and ended by the stream.

## The stages of an event

- **Scheduled** — announced and on the calendar, not started.
- **Warmup** — doors open. Chat is live, the video hasn't started. Begins 30 minutes before the start
  time.
- **Live** — you're on the air.
- **Ended** — the event is over, its chat stays open for a 30-minute cooldown.
- **Archived** — final statistics are ready and the event chat closes.
- **Cancelled** — the event never happened.

Both **warmup** and **live** count as live everywhere else on Slipmat: your artist page, the
listings, and your live address all treat an event in warmup as live.

::: tip One event at a time
You can only have one event in warmup or live at any moment. If another event tries to start while
one is already live, it is turned down and stays where it is. Soundchecks don't count.
:::

## A scheduled event, step by step

1. **30 minutes before the start time.** Slipmat moves the event to warmup and opens its chat, so
   listeners can gather.
2. **You connect your streaming software.** Nothing goes on the air yet.
3. **You press Start event** in the [Stream Dashboard](/howto/artist/run-your-show/). The event goes
   live, its start time is recorded, and Slipmat begins collecting the event's statistics.
4. **You press End event.** The event moves to ended, any open song requests are closed, and the
   event's statistics are calculated.
5. **30 minutes after that.** The event is archived and its chat closes. If you have set a redirect to
   a next event, your audience is sent there when you press End instead of waiting through the
   cooldown.

## Nothing ends a scheduled event but you

::: warning Always end your event yourself
A scheduled event stays live until you end it. Stopping your streaming software or losing your
connection does **not** end it.
:::

There is one safety net: if your stream stays disconnected for **30 minutes** while a scheduled event
is live, Slipmat ends the event for you. It exists so a forgotten event doesn't stay live
indefinitely.

## What Slipmat does automatically

- **Moves a scheduled event to warmup** 30 minutes before its start time.
- **Cancels a scheduled event that never started**, one hour after its start time has passed. A
  resumed event is left alone.
- **Starts an ad hoc event** about a minute after your stream connects, when you have no scheduled
  event starting within the next 60 minutes.
- **Ends an ad hoc event** about two minutes after your stream disconnects. Reconnect within that
  window and the event continues.
- **Ends a live scheduled event** whose stream has been disconnected for 30 minutes.
- **Archives an ended event** 30 minutes after it ended, which is when its chat closes.
- **Ends a soundcheck** that has had no stream connected for 15 minutes.

Each of these is written to your [activity log](/guides/activity-log/), listed as done by *System*.

## If your stream drops during a live event

The event stays live. Reconnect your streaming software and the stream continues — you don't need to
touch the event itself. If the stream stays disconnected for 30 minutes, Slipmat ends the event.

## Resuming an event that ended too early

For **30 minutes** after it ends, a scheduled event can be **resumed**. The action is on the event's
own page under Events, and it disappears once the event is archived.

Resuming returns the event to warmup. Reconnect your streaming software if needed, then press Start
as usual.

- The event keeps its page, its address and its chat.
- Song requests stay closed. Open them again yourself if you want them.
- The original start time is kept, so the interruption counts as part of the event's length.
- The event's statistics are calculated again when you end it the second time.

Ad hoc events and soundchecks cannot be resumed. Once the 30 minutes have passed the event is
archived, and archiving is final.

::: tip Who can resume
Resuming needs the **manage events** permission, so owners and members can do it. Roadies can't.
:::

## Related

- [Events](/guides/events/) — the kinds of events and what they're for
- [Streaming & Going Live](/guides/artists/streaming/) — getting on the air
- [Activity Log](/guides/activity-log/) — the record of every step above
