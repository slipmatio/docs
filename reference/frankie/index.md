# Frankie

Frankie v2 (2025-) expects the stream in following format:

- **Video resolution**: 720x480 or 1920x1080
- **Video framerate**: 30
- **Video codec**: H.264
- **Video bitrate**: minimum 3000 Kbps, maximum 6000 Kbps
- **Keyframe interval**: 2 seconds
- **Audio format**: AAC (LC)
- **Audio sample rate**: 44100 (avoid resampling to 48k)
- **Audio bitrate**: 320 / CBR

::: danger Note
Legacy Frankie v1 settings are **not compatible** with Frankie v2. You must update your settings to match above
requirements when updating the encoder.
:::

**RTMP server**: `rtmp://frankie.slipmat.io/frankie_encoder`

## Passthrough endpoint

::: tip For tinkerers
This is an extra endpoint for experimenting. Regular streams should always use the settings above as that is best
optimized for your _listeners_.
:::

There is a second endpoint that sends your stream on to listeners exactly as you send it, with no processing at all.
It was built for live coding and similar screen sharing, where scaling the picture down would make text unreadable.

**RTMP server**: `rtmp://frankie.slipmat.io/code_encoder`

What is different from the normal endpoint:

- Your video is passed through untouched, so you can send resolutions above 1080p.
- Audio is untouched here as well.
- Only the one quality you send is offered, so listeners on slower connections cannot drop to a lower one.
- A **2 second keyframe interval** is required. Without it the stream will not be cut into segments correctly.

Your stream key works the same as on the normal endpoint.
