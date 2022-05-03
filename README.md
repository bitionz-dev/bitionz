<img src="https://cjpoeqgxfkzoleidhjwu.supabase.co/storage/v1/object/public/bitionz/public/logo" width="25" height="25" border="10" /> Bitionz
======

Bitionz is a web to search metaverse related tokens, powered by
the  **[CoinmarketCap API](https://coinmarketcap.com/api/documentation/v1/)**

----

### Table of Contents

- **[Tech Stack](#tech-stack)**<br>
- **[Cloud Platform](#cloud-platform)**<br>
- **[Environments](#environments)**<br>
- **[Integrations](#integrations)**<br>

---

## Tech Stack

- [React](https://es.reactjs.org/)

- [Next JS](https://nextjs.org/) (React framework with a set of tools)

- [Supabase](https://supabase.com/docs) (BaaS)

- [Yarn](https://yarnpkg.com/) (package manager)

## Cloud Platform

- [Vercel](https://vercel.com/)

- [Bitionz on Vercel ](https://vercel.com/bitionz-dev/bitionz)

## Environments

- **Develop**:  https://bitionz-bitionz-dev.vercel.app/
- **Production**: https://www.bitionz.net/

## Integrations

- [Google Analytics Project](https://analytics.google.com/analytics/web/#/p313514131/reports/intelligenthome) (
  Analytics)
- [Bugsnag](https://app.bugsnag.com/bitionz/bitionz/overview?release_stage=production) (Monitoring)

## Data Sources

The data that powers the site comes mainly from the **[CoinmarketCap API](https://coinmarketcap.com/api/documentation/v1/)**
except the suggested tokens those comes from the **[Supabase DB and Storage instance](https://coinmarketcap.com/api/documentation/v1/)** both of the sources are exposed through REST API scheme

eg:

The "most populars" list  and "search results" is data obtained from the **[CoinmarketCap API](https://coinmarketcap.com/api/documentation/v1/)**, more specifically from the
`/v1/cryptocurrency/category?id=metaverseTokensID` endpoint provided by the API

<img src="https://cjpoeqgxfkzoleidhjwu.supabase.co/storage/v1/object/public/bitionz/documentation/CMKTCP example.png" />
<hr/>

<img src="https://cjpoeqgxfkzoleidhjwu.supabase.co/storage/v1/object/public/bitionz/documentation/CMCexpamle2.png" />

meanwhile the "suggesteds" tokens are obtained from the **[Supabase DB and Storage instance](https://coinmarketcap.com/api/documentation/v1/)** created for Bitionz

<img src="https://cjpoeqgxfkzoleidhjwu.supabase.co/storage/v1/object/public/bitionz/documentation/suggesteds1.png" />

<img src="https://cjpoeqgxfkzoleidhjwu.supabase.co/storage/v1/object/public/bitionz/documentation/suggesteds2.png" />







