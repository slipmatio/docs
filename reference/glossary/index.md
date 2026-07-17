---
outline: 3
---

# Slipmat.io Glossary

This glossary explains common terms used on Slipmat, making it easier to understand our platform and its features.

### Ad Hoc Event

A spur-of-the-moment show that goes live as soon as you start streaming and ends automatically when you stop. It uses your artist chat channel rather than a dedicated one, and only fans who've opted in to ad hoc notifications are told about it. See [Events](/guides/events/).

### Backstage

[Slipmat Backstage](https://backstage.slipmat.io) is our community forum powered by [Discourse](https://www.discourse.org) (third-party software). You can log in using your Slipmat account.

While your Slipmat credentials are used to create your Backstage account when you sign up to Slipmat, the two systems operate independently. Changes in one system do not affect the other.

### Bad Gateway

This is an error message you should never see but might sometimes encounter. It means that the actual server that runs Slipmat.io is either down or having difficulties (and the proxy server that helps balance the load is unable to fetch data from it, hence the term gateway). This is most likely to happen during major upgrades or planned maintenance and should resolve itself soon -- just refresh the page.

### Cooldown

When an artist stops the stream, the show enters a cooldown period — it has ended, but the chat stays open for a while so people can hang around. The exception is when a redirect to a next event is set: in that case the audience is forwarded on immediately instead of going into cooldown. See [Events](/guides/events/).

### Crew

The people who help run an artist: its owners, members, and [roadies](#roadie). Crew coordinate in a private crew channel that's separate from the artist's public chat and from event chats. See [Artist Profile](/guides/artists/profile/).

### Discord

Meet other DJs and music makers in our community chat on Discord - a popular messaging app where you can share feedback and connect with fellow creators. [Join us on Discord](https://discord.gg/PCSwhkZ)! (Discord is run by another company, separate from Slipmat.)

### Fan

Someone who follows an artist. Fans can be given access to members-only shows and can receive the artist's notifications. See [Artist Profile](/guides/artists/profile/).

### Flash

Flash is Slipmat.io's email bot that sends automated messages from `noreply@slipmat.io`. The bot is named after [Grandmaster Flash](https://en.wikipedia.org/wiki/Grandmaster_Flash).

### Frankie

Frankie, named after [Frankie Knuckles](https://en.wikipedia.org/wiki/Frankie_Knuckles), is Slipmat.io's custom streaming server, optimized specifically for high-quality music transmission. Its core focus is delivering pristine audio. Frankie utilizes the [HLS protocol](#hls) with optimized settings, resulting in an average stream latency of ~13 seconds. See Frankie reference for [recommended settings](/reference/frankie/).

### HLS

HLS (HTTP Live Streaming) is a [video streaming protocol](https://en.wikipedia.org/wiki/HTTP_Live_Streaming) developed by Apple. It's a battle-tested solution that prioritizes stream stability over speed, making it the default choice for many streaming platforms, including Slipmat.

HLS creates natural latency in the stream. The protocol breaks video into 2-4 second segments and maintains a buffer of 3-6 segments. This segmentation strategy results in typical latency between 6-24 seconds from source to viewer.

### Hype

The real-time reactions — hearts, raised hands and more — that listeners send during a live show. They appear on the hype bar on the [Live Page](/guides/live-page/) for everyone to see.

### Live Page

The Live Page is what you see when watching a Slipmat stream. It's a custom-built streaming page designed to give you the best possible listening experience. You can access it through any web browser, and it works great on mobile devices and TVs too.

### Roadie

A crew role on an artist profile. A roadie helps run a show by moderating the chat, without the ability to change the artist's settings or events. See [Artist Profile](/guides/artists/profile/).

### Scheduled Event

A show planned in advance for a set time (always on the hour). Its doors open 30 minutes before showtime during [warmup](#warmup), and the artist starts and ends it manually. See [Events](/guides/events/).

### Soundcheck

A private, unlisted test run of your stream, used to check your audio and video before going live. A soundcheck never appears in Slipmat's listings and doesn't mark you as live. See [How To Test Your Stream](/howto/artist/test-streaming/).

### Warmup

The period before a [scheduled event](#scheduled-event) — starting 30 minutes ahead — when the doors are open and chat is live but the video hasn't started yet. See [Events](/guides/events/).

### WebRTC

WebRTC is an [open-source technology](https://webrtc.org/) that enables real-time audio and video communication directly in web browsers. Unlike HLS, WebRTC prioritizes speed over stability, making it ideal for live interactions where minimal delay is crucial. While [Frankie](#frankie) (the current Live Page) uses HLS, Slipmat Circus is built on WebRTC.

WebRTC can achieve ultra-low latency (under 1 second) between participants, but this comes with higher bandwidth requirements and potential stability issues on slower connections. While HLS streams are typically only bandwidth-restricted, WebRTC streams need a more stable connection with low jitter (usually means a wired connection).
