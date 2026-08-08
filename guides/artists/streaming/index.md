---
tags:
  - artist
  - streaming
---

# Streaming & Going Live

Streaming on Slipmat works with any RTMP-capable software or device — OBS and similar tools, or a
hardware encoder. Slipmat streams work a little differently than on most platforms, and that's on
purpose: it makes for a better listening experience, better discovery, and better search visibility.

## What you need

1. Your **streaming server URL** and **streaming key**, both found in your Artist Dashboard. Each
   member of an artist gets their own key.
2. Your encoder set up to Slipmat's stream requirements. These are listed on the
   [Frankie reference page](/reference/frankie/) — match them exactly, or your stream may be rejected
   or sound wrong.

::: warning Keep your streaming key private
Your streaming key is what lets you (and only you) go live as your artist. Treat it like a password.
:::

## Test first with a soundcheck

Before you go live for real, test your stream with a **soundcheck** — a private, unlisted test run
that lets you check your audio and video without any audience. See
[How To Test Your Stream](/howto/artist/test-streaming/) for the full walkthrough.

## Going live: scheduled events

For a [scheduled event](/guides/events/#scheduled-events), the doors open automatically 30 minutes
before the start time (the warmup). To go live:

1. Connect your streamer during the warmup.
2. Start the event from your Artist Dashboard when you're ready to perform.
3. **End the event yourself** from the dashboard when you're finished.

::: warning Scheduled events don't stop by themselves
A scheduled event stays live until you end it — it won't stop just because you disconnect your
streamer. Always end the event when you're done. (As a safety net, Slipmat ends a scheduled event
whose stream has been down for 30 minutes, but you shouldn't rely on that.)
:::

## Going live: ad hoc events

For an [ad hoc event](/guides/events/#ad-hoc-events) there's nothing to start or stop by hand:

1. Connect your streamer (with no scheduled event due to start soon).
2. Your event goes live shortly after the stream connects.
3. It ends automatically once you stop streaming. Brief drops are forgiven — a quick reconnect won't
   end the event.

## Keeping an eye on your stream

While you're connected, your dashboard's stream monitor shows whether Slipmat is receiving your
stream and flags any quality problems it detects — things like low audio bitrate, a missing audio
channel, or an unsuitable resolution. If it warns you about something, fix it in your encoder; your
listeners hear and see the same stream the monitor is checking.

## When something goes wrong

- **Your stream drops while you're live.** The event stays live. Reconnect your streamer and the
  stream continues. If it stays disconnected for 30 minutes, Slipmat ends the event.
- **The event ended and you weren't done.** For 30 minutes after it ends, a scheduled event can be
  **resumed** from your stream monitor or from the event's page in your Artist Dashboard. It returns
  to warmup; reconnect and press Start again. See
  [How Events Start And End](/guides/events/lifecycle/).
- **You want to know what happened.** Your [activity log](/guides/activity-log/) lists every
  connection, disconnection, start, end and automatic step from the last 30 days.

## Related

- [Events](/guides/events/) — the different kinds of events and how they work
- [How Events Start And End](/guides/events/lifecycle/) — starting, ending, and everything automatic
- [Activity Log](/guides/activity-log/) — the record of your events and your stream
- [How To Test Your Stream](/howto/artist/test-streaming/) — testing privately with a soundcheck
- [Frankie reference](/reference/frankie/) — exact encoder settings
