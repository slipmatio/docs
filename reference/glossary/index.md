---
outline: 3
---

# Slipmat.io Glossary

This glossary explains common terms used on Slipmat, making it easier to understand our platform and its features.

### Backstage

[Slipmat Backstage](https://backstage.slipmat.io) is our community forum powered by [Discourse](https://www.discourse.org) (third-party software). You can log in using your Slipmat account.

While your Slipmat credentials are used to to create your Backstage account when you sign up to Slipmat, the two systems operate independently. Changes in one system do not affect the other.

### Bad Gateway

This is an error message you should not ever see but might sometimes still encounter. It means that the actual server that runs Slipmat.io is either down or having difficulties (and the proxy server that helps balancing the load is unable to fetch data from it, hence the term gateway). This is most likely to happen during major upgrades or planned maintenance and should resolve itself soon -- just refresh the page.

### Discord

Meet other DJs and music makers in our community chat on Discord - a popular messaging app where you can share feedback and connect with fellow creators. [Join us on Discord](https://discord.gg/PCSwhkZ)! (Discord is run by another company, separate from Slipmat.)

### Flash

Flash is Slipmat.io's email bot that sends automated messages from `noreply@slipmat.io`. The bot is named after [Grandmaster Flash](https://en.wikipedia.org/wiki/Grandmaster_Flash).

### Frankie

Frankie is Slipmat.io's custom streaming server, optimized specifically for high-quality music transmission. Its core focus is delivering pristine audio. Frankie utilizes the [HLS protocol](#hls) with optimized settings, resulting in an average stream latency of ~13 seconds.

**Recommended streaming settings:**

    Audio:
        format: AAC
        bitrate: 256 or 320 Kbps
        sample rate 44100
    Video:
        resolution: 1280x720 px
        bitrate 2500 Kbps,
        framerate: 30
        keyframe interval: 2 s

Frankie is named after [Frankie Knuckles](https://en.wikipedia.org/wiki/Frankie_Knuckles).

### HLS

HLS (HTTP Live Streaming) is a [video streaming protocol](https://en.wikipedia.org/wiki/HTTP_Live_Streaming) developed by Apple. It's a battle-tested solution that prioritizes stream stability over speed, making it the default choice for many streaming platforms, including Slipmat.

HLS creates natural latency in the stream. The protocol breaks video into 2-4 second segments and maintains a buffer of 3-6 segments. This segmentation strategy results in typical latency between 6-24 seconds from source to viewer.

### Live Page

The Live Page is what you see when watching a Slipmat stream. It's a custom-built streaming page designed to give you the best possible listening experience. You can access it through any web browser, and it works great on mobile devices and TVs too.

### WebRTC

WebRTC is an [open-source technology](https://webrtc.org/) that enables real-time audio and video communication directly in web browsers. Unlike HLS, WebRTC prioritizes speed over stability, making it ideal for live interactions where minimal delay is crucial. While [Frankie](#frankie) (the current Live Page) uses HLS, Slipmat Circus is built on WebRTC.

WebRTC can achieve ultra-low latency (under 1 second) between participants, but this comes with higher bandwidth requirements and potential stability issues on slower connections. While HLS streams are typically only bandwith-restricted, WebRTC streams need more stable connection with low jitter (usually means a wired connection).
