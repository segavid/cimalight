# CimaLight Vercel proxy

This Next.js project displays a configured upstream website through your own Vercel domain. It proxies same-host navigation, assets, redirects, and query strings. Requests to external hosts remain external.

## Configure

1. Import this project folder (`cimalight`) into Vercel and deploy it.
2. In Vercel project settings, set `UPSTREAM_ORIGIN` to the origin you own, for example `https://e.cimalight.co`.
3. Redeploy after setting the environment variable.
4. In Vercel project **Settings → Domains**, add the subdomain you want to serve, such as `cimalight.example.com`, and follow Vercel's DNS instructions at your DNS provider.
5. Confirm the upstream permits this proxy and configure any upstream security rules as needed.

No credentials are hard-coded. The server forwards browser cookies and basic request headers to the upstream, so only use this with a site and login flow you administer. Streaming responses are buffered by the Vercel function; large media files may exceed platform limits. This proxy is intended for pages and ordinary assets, not rehosting video streams.

## Local development

Set `UPSTREAM_ORIGIN` in a local `.env.local`, then run `npm install` and `npm run dev`.
