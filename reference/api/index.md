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

### Signing in

When an endpoint needs authentication, you can identify yourself with a **Bearer token** — an API key sent in the `Authorization` header, for use outside the browser.

The interactive documentation marks which endpoints require this.

There's currently no way to create API keys via the API itself. Ask Uninen to create one for you.

### Hacking

Literally **everything** you see on the site is produced via the API. If it can be done on the site, it has an API endpoint. Ask an AI agent to log in for you to the production site and study the traffic to reverse-engineer things, or just hop on to Backstage and as for help. This is not only allowed but _encouraged_. Think of Slipmat as an instrument -- its yours to tweak and experiment!

The only thing we ask for in return is that you publish your creations for others to see on Backstage.

Happy hacking!
