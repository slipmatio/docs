---
tags:
  - artist
---

# Streaming

Streaming on Slipmat works with any RTMP-capable software or device. (See [Frankie reference](/reference/frankie/).) Slipmat streams, however, are a bit different than in most platforms. We do this for better listener experience, better discoverability, and SEO.

## Event Types

### Scheduled events

Scheduled events are the "classic" and most typical way to stream on Slipmat. You schedule a time for you show, and on the day you start and end the show manually. Listeners can subscribe to scheduled event notifications, put your shows in a calendar, and join the event 30 minutes before the show starts. Event warmup is a vistual verion of the fun part of any live gig evening when you come together before the show starts to hang around.

### Ad Hoc events

Ad hoc events are a new thing for Slipmat v3. This is the typical way most platforms implement streaming; you just fire up your stream and then you're live. This is great for spur of the moment streams when you just want to spin some records or hang around with your fans but it's not so great for marketing. Ad Hoc events start as soon as you start streaming and they only notify those fans that have explicitly opted in for ad hoc show notifications.

## How To Stream

### First Time Only

1. Set up [optimal settings for Frankie](/reference/frankie/) for your streamer
2. Grab your streaming key and the streaming server URL from [Artist Dashboard](https://next.slipmat.io/artist/)
3. That's it, you're ready to stream!

### Starting and Stopping

#### Scheduled Event

1. Start the stream in your streamer ("Start Streaming" button in OBS) and you'll see a status indicator light up in your [Streaming Dashboard](https://next.slipmat.io/artist/stream/)
2. If you have a scheduled event ligned up, you'll see a "Start Event" button. Clicking that will make your event live. (Note: Warmup state is fully automatic and starts always 30 minutes before the scheduled time.) You can start your event any time you like, but you **must** do it manually. When you start the event, it will go into live mode.
3. When you're done streaming, hit "End Event"-button and the event will be shut down (meaning the chat will redirect people to the next event or to your artist channel, and the stats calculation starts).

#### Ad Hoc

1. Start the stream, verify that the status indicator lights up.
2. The stream will **automatically start** in 60 seconds. You don't need to do anything else, the live status is published in your artist chat channel.
3. When you disconnect the stream, the event will automatically be shut down in 2 minutes.

See also [step by step How to test streaming](/howto/artist/test-streaming/).

### Stream disconnections and other exceptions

We care about listener experience and we also want to minimize the stress for the streaming artist in case of technical difficulties. We've built a two-layer help system to manage unforeseen situations.

#### Random network issues

If your stream disconnects mid-stream mist streaming software and hardware are configured to automatically reconnect. Sometimes this can be almost inaudible to the listener but often the stream has a short buffering issue. Slipmat live page handles both the stream disconnections and buffering issues gracefully; listeners see that the artist stream has disconnected and are then not surprised about possible buffering issues.

In case of buffering or full video dropouts, the live page will automatically try to reconnect in a smart way that even if the page is fully unattended, it will eventually reconnect and start playing again.

#### Known technical issues

Have you ever planned a huge live gig only to find out that minutes before the scheduled time your network is down, your computer is installing some security update that is taking 40 more minutes to apply or some other technical issue that prevents you to get any sound out? Yeah, we've been there too! That's why we built a **technical hold status** in scheduled events that allow you to notify your users of the situation and make the live page fully functional while they wait. You can even configure backup content for your audience to listen if you want to!

In case of a technical emergency that you know that will take longer than a minute or two, go to the event detail page in your artist dashboard and set technical hold status for the event. This will trigger live page to show a special "we're working on some tehnical issues" status with your detail message. If you set up backup content, it will start playing automatically (the experiencing technical issues banner still visible).

We all hope to never experience these kinds of issues but even when you work hard to avoid them, it can be really hectic and frustrating when it happens. We've tried to help you so that you can focus on resolving the issue without needing to worry about your audience so much. This hopefully makes everyones streaming experience much better.
