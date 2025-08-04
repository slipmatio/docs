---
tags:
  - artist
---

# For Artists

## Basic Info

### Artist Profiles

Artist profiles on Slipmat are built around memberships. When you create your profile, it starts with one member (you). If you're part of a group or work with others, you can add more members to the Artist Profile. Each member can have a specific role - VJ, marketer, or fellow performer. Members get their own permissions and streaming keys, so everyone can contribute to the profile while you maintain control over who can do what. And here's the cool part: one person can be a member of multiple artist profiles. So if you collaborate on various projects, you can be part of all those profiles without juggling multiple accounts.

### Live Performances

Live Performances on Slipmat (formerly called "events" in v2) come in two flavors: ad hoc and scheduled. Ad hoc performances are perfect for spontaneous streams - just fire up your streaming software and click "start" from your artist dashboard. Once your stream connects, your dashboard transforms into a comprehensive streaming status display.

Scheduled performances work like real-world gigs. You set a start time, and the "doors" open 30 minutes before showtime. During this warmup period, people can join the chat and get ready for the show. When it's time to perform, you switch the performance to live mode.

Ending your performance is straightforward. Ad hoc performances stop automatically when you disconnect your streaming software or click the end performance button. For scheduled performances, you'll need to click the end button manually.

Throughout your stream, the artist dashboard keeps an eye on your technical setup. It monitors your streaming quality and provides specific feedback if something needs attention - whether it's audio bitrate issues, missing audio channels, or suboptimal stream resolution.

### Chat

The chat on Slipmat is always on. Every artist gets their own public channel where you can connect with your fans 24/7. No more waiting for events to talk with your community. Each scheduled performance also gets its own dedicated chat channel that opens 30 minutes before showtime.

The chat works like Discord but with IRC-style commands. You'll find channels (both public and private), direct messaging, and familiar slash commands like /join and /whois. You can see who's online, mention people, and everything tab-completes just like you'd expect.

Common channels keep the community connected. #lobby is the main hangout, #music collects all the tunes people are sharing, and #sandbox lets you test things out. Speaking of music - when someone posts a Spotify, Apple Music, or YouTube link, the chat automatically creates a beautiful preview with album art and links to the same track on all available platforms.

Want to listen without watching? The chat has you covered. Join any performance channel and toggle on audio-only mode - perfect for mobile or when you're doing other things.

Artists get automatic promotion too. When you go live, the chat posts your performance link. Fans can subscribe to their favorite artists and genres to get notifications whenever shows start or go into warmup mode.

### Frankie Streaming Server

The quality of the (audio) stream is one of the most important priorities in Slipmat technical design. We've built our
own streaming server called Frankie (after Frankie Knuckles). It's designed to deliver a stable live stream with
pristine audio quality, video quality being a low priority.

Due to the unique design of Frankie, artists need to take extra care to deliver the absolutely right format stream from
OBS or any other RTMP streaming software.
