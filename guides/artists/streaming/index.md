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

## Going live: scheduled shows

For a [scheduled event](/guides/events/#scheduled-events), the doors open automatically 30 minutes
before showtime (the warmup). To go live:

1. Connect your streamer during the warmup.
2. Start the show from your Artist Dashboard when you're ready to perform.
3. **End the show yourself** from the dashboard when you're finished.

::: warning Scheduled shows don't stop by themselves
A scheduled show stays live until you end it — it won't stop just because you disconnect your
streamer. Always end the show when you're done. (As a safety net, Slipmat will close a scheduled show
if its stream stays down for a long time, but you shouldn't rely on that.)
:::

## Going live: ad hoc shows

For an [ad hoc event](/guides/events/#ad-hoc-events) there's nothing to start or stop by hand:

1. Connect your streamer (with no scheduled show due to start soon).
2. Your show goes live shortly after the stream connects.
3. It ends automatically once you stop streaming. Brief drops are forgiven — a quick reconnect won't
   end the show.

## Keeping an eye on your stream

While you're connected, your dashboard's stream monitor shows whether Slipmat is receiving your
stream and flags any quality problems it detects — things like low audio bitrate, a missing audio
channel, or an unsuitable resolution. If it warns you about something, fix it in your encoder; your
listeners hear and see the same stream the monitor is checking.

## Related

- [Events](/guides/events/) — the different kinds of shows and how they work
- [How To Test Your Stream](/howto/artist/test-streaming/) — testing privately with a soundcheck
- [Frankie reference](/reference/frankie/) — exact encoder settings
