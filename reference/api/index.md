# API

Slipmat.io has a public API that powers the site and is available for others to build on.

::: warning The API is mostly private for now
Today the API is **mostly private** — meaning **undocumented, not off-limits**. Only a small part of it
is published (meaning documented) so far. The rest works, but its addresses and data can change without notice. You are free to build on the undocumented endpoints but with your own risk - things may break without any notice.

We're updating and documenting the API **actively**, and the published surface will keep growing over time. This page will grow
with it.
:::

## Where it lives

- **Base address**: <https://api.slipmat.io>
- **Interactive documentation**: <https://api.slipmat.io/docs/>
- **OpenAPI schema**: <https://api.slipmat.io/openapi.json>

The interactive documentation is built from the **OpenAPI schema** — a machine-readable description of the API in the
[OpenAPI](https://www.openapis.org/) format. Both are generated straight from the running code, so they're the
**source of truth**: they always reflect exactly what's available right now — which parts exist, what they return, and
which ones need you to be signed in. Whenever this page and the schema disagree, trust the schema.

## How to use it

- Everything is served over **HTTPS**, and every response is **JSON**.
- The currently documented endpoints are mostly **read-only** (you fetch information; you don't change anything through them).
- Most endpoints require authentication using an API key.

## Authentication

Most endpoints need to know who you are. You identify yourself with an **API key** — a long secret
string that stands in for your login when you're working outside the browser.

The interactive documentation marks which endpoints require a key and which don't.

### Getting your API key

Your key lives on the [API Key](https://slipmat.io/account/api-key/) tab in your account settings.
One button creates it.

::: tip Turn on Experimental features first
The **API Key** tab only appears if you have **Experimental features** turned on in your user
settings. If you don't see the tab, turn that setting on and come back.
:::

::: warning You only see the key once
The key is shown **once**, right after it's created. Copy it and store it somewhere safe — a password
manager is ideal. Once you leave the page, there's no way to look it up again.
:::

You have one key at a time.

### Losing or rotating your key

Lost your key, or want a fresh one? Click **Reset key** on the same tab. This happens
**immediately**: the old key stops working and the new one is shown to you once, exactly like the
first time. Anything still using the old key will stop working until you update it.

### Using your key

Send the key in the `Authorization` header of every request, with the word `Bearer` in front of it:

```
Authorization: Bearer YOUR_API_KEY
```

For example, with `curl`:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.slipmat.io/
```

::: warning Treat your key like a password
Your key acts on your behalf. Don't share it, and keep it out of anything public — read it from an
environment variable or a config file you don't share.
:::

Rather have an AI assistant work with your account than write code yourself? See
[Connecting an AI Assistant](/guides/ai-tools/) — it uses your normal login, so it needs no API key.

### Hacking

Literally **everything** you see on the site is produced via the API. If it can be done on the site, it has an API endpoint. Ask an AI agent to log in for you to the production site and study the traffic to reverse-engineer things, or just hop on to Backstage and as for help. This is not only allowed but _encouraged_. Think of Slipmat as an instrument -- its yours to tweak and experiment!

The only thing we ask for in return is that you publish your creations for others to see on Backstage.

Happy hacking!
