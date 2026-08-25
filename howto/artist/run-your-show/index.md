---
tags:
  - artist
  - events
  - streaming
---

# How To Run Your Event

The **Stream Dashboard** is where you run a live event: <https://slipmat.io/artist/stream/dashboard/>.
As soon as an event of yours is in warmup or live it appears in your artist menu, and your Artist
Dashboard shows the event at the top with a button straight there. Everything you do while on the air
is on this one screen.

## The night, step by step

1. **Half an hour before the start time** Slipmat opens the doors on its own. The event moves into
   warmup and its chat opens; listeners start arriving.
2. **Connect your streaming software.** The ring in the middle goes from *Waiting for encoder* to
   *Ready*. If you need your RTMP server and stream key, they're behind **Encoder credentials**.
3. **Press Start event** when you want the music to go out. The ring turns *On air* and starts
   counting.
4. **Press End event** when you're finished.

::: warning Nothing else ends your event
Closing your streaming software does not end a scheduled event — only you do. The one safety net is
that Slipmat ends a live event whose stream has been gone for 30 minutes.
:::

## Reading the ring

The ring is the state of your broadcast, with your video bitrate underneath:

- **Waiting for encoder** — nothing is arriving.
- **Ready** — connected and healthy, waiting for you to start.
- **On air** — live, with how long you've been playing.
- **Stream warning** or **Critical stream issue** — Slipmat found a problem; it's spelled out below
  the ring.
- **No signal** — the event is live but your stream is gone.
- **Technical hold** — you've paused the show yourself.

The numbers under it are **Listening** (actively listening out of everyone signed in), **Lurkers**
(listeners without an account), **Requests** (open out of all of them, when requests are on) and
**Hypes** (reactions your audience has sent).

At the top of the screen you have the event's title and its public address with buttons to copy it or
open it, so you can share where your audience should go.

## The tools beside the ring

- **Audience list** — who's in the room, who's listening and who has stepped away. Open anyone's
  profile from here.
- **Requests** — the switch opens and closes song requests; **Manage** opens the queue. See
  [How To Set Up Song Requests](/howto/artist/set-up-requests/).
- **Start poll** — ask the room a question with up to ten answers, and let them pick one or several.
  The poll appears on the video and the results update as votes come in; the button shows the vote
  count while it runs. You can hide it, close the voting, or start another.
- **Force refresh** — reloads the page for everyone watching. For when the room says something looks
  stuck.
- **Set redirect** — another Slipmat event to send your audience to when yours ends. Once saved, the
  button shows where they're going.
- **Ping on mention** — plays a sound when someone mentions you, in any chat.
- **Encoder credentials** — your RTMP server address and stream key.

The chat column on the right carries the event chat and your private crew channel side by side, and
collapses out of the way when you need the room.

## When something goes wrong

**Set technical hold** covers your video with a *Technical hold* notice and the message you write —
"Back in a minute, fixing the stream". Your listeners stay where they are and chat keeps running.
**End technical hold** takes it down and refreshes everyone's page.

If your stream simply drops, the event stays live. Reconnect and it carries on.

If the event ended before you were done, you have 30 minutes to **resume** it from the event's own
page under Events. It goes back to warmup and you press Start again. Song requests stay closed until
you reopen them.

## Related

- [How To Schedule Your First Event](/howto/artist/schedule-event/) — getting the event on the calendar
- [How To Test Your Stream](/howto/artist/test-streaming/) — a private soundcheck first
- [How Events Start And End](/guides/events/lifecycle/) — everything Slipmat does automatically
- [Frankie reference](/reference/frankie/) — encoder settings
