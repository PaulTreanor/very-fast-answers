# Google Search API Service 
This service **takes a list of keywords** and **returns a list of URLs** that are the top results of a Google search for each keyword.

This service uses the [Google Search API](https://til.simonwillison.net/google/json-api-programmable-search-engine). This article is a great summary. 

It returns 10 items

```json
[
  {
    title: "What Is A Money Market Account? | Bankrate",
    link: "https://www.bankrate.com/banking/mma/what-is-a-money-market-account/",
    snippet: "Jul 6, 2023 ... Here's an explanation for how we make money ... Deposit money at a financial institution online or in person, Buy shares at a brokerage, bank or ..."
  },
  {
    title: "4 Best Gold ETFs for October 2023 - NerdWallet",
    link: "https://www.nerdwallet.com/article/investing/best-gold-etfs",
    snippet: "Oct 2, 2023 ... Investors buy shares in the fund, whose value rises and falls with the underlying gold price or company stock value. Gold is considered a ..."
  },
  {
    title: "Investing in Credit Card Companies",
    link: "https://www.investopedia.com/articles/stocks/09/credit-card-company-invest.asp",
    snippet: "Sep 30, 2021 ... Investors can buy shares in one or more of the credit card networks or ... A financial institution (FI) is a company that focuses on dealing ..."
  },
  {
    title: "SoFi Active Investing Review 2023: Pros, Cons and How It ...",
    link: "https://www.nerdwallet.com/reviews/investing/brokers/sofi-active-investing",
    snippet: "Oct 4, 2023 ... It also offers ADRs, or American depository receipts, which allow customers to easily buy shares in foreign companies. ... financial institution, ..."
  },
  {
    title: "Choosing A Financial Planner",
    link: "https://portal.ct.gov/DOB/Consumer/Consumer-Education/Choosing-A-Financial-Planner",
    snippet: "\"I do perceive here a divided duty.\" William Shakespeare. Financial planners are in business to make money. When you first visit or contact the planner, ask ..."
  },
  {
    title: "Shares - Ways to Invest | Financial Markets Authority",
    link: "https://www.fma.govt.nz/consumer/investing/types-of-investments/shares/",
    snippet: "Jun 6, 2023 ... Financial Institution licensing · Fair Conduct Programme · Financial ... When you buy shares, you're buying a small part of a company. You ..."
  },
  {
    title: "7 Ways to Make Money Daily With Investments - SmartAsset",
    link: "https://smartasset.com/investing/how-to-invest-and-make-money-daily",
    snippet: "Jan 26, 2023 ... Interest is income you receive in exchange for giving your money to a financial institution, corporation or government entity to use for a time."
  },
  {
    title: "Stock warrants: What are they and how do they work? | Empower",
    link: "https://www.empower.com/the-currency/money/stock-warrants",
    snippet: "The bonds had wedded warrants attached to them, meaning investors could exercise the warrant to buy shares of stock, but would have to surrender the bond to do ..."
  },
  {
    title: "Glossary - Moneysmart.gov.au",
    link: "https://moneysmart.gov.au/glossary",
    snippet: "BSB. A six-digit number that identifies a specific branch of a bank or other financial institution within Australia. ... buy shares in one or more of those sub ..."
  },
  {
    title: "Guide to Buying ANZ Shares – Forbes Advisor Australia",
    link: "https://www.forbes.com/advisor/au/investing/how-to-buy-anz-shares/",
    snippet: "Sep 14, 2023 ... Choose a Trading Platform or Broker: You must use a stockbroking service or an online trading platform to buy shares. ... financial institution ..."
  }
```





# Ignore everything below this

## How to use 
SEARCH_ENGINE_ID = b18f4db7e156d4460

GOOGLE_SEARCH_API_KEY=AIzaSyDO7bnm1UXmS60iFDR9ZGMOARTMIubBjis 

curl "https://www.googleapis.com/customsearch/v1?key=AIzaSyDO7bnm1UXmS60iFDR9ZGMOARTMIubBjis&cx=b18f4db7e156d4460&q=%22powered%20by%20datasette%22%20-site%3Agithub.com%20-site%3Asimonwillison.net%20-site%3Adatasette.io%20-site%3Apypi.org"

https://www.googleapis.com/customsearch/v1?key=AIzaSyDO7bnm1UXmS60iFDR9ZGMOARTMIubBjis&cx=b18f4db7e156d4460&q=%22powered%20by%20datasette%22%20-site%3Agithub.com%20-site%3Asimonwillison.net%20-site%3Adatasette.io%20-site%3Apypi.org
https://www.googleapis.com/customsearch/v1?key=AIzaSyD-7bnm1UXmS60iFDR9ZGMOARTMIubBjis&cx=b18f4db7e156d4460&q=%22buy%20shares%22%20%22financial%20institution%22%20%22make%20money%22

```bash
curl "https://www.googleapis.com/customsearch/v1?key=AIzaSyDO7bnm1UXmS60iFDR9ZGMOARTMIubBjis&cx=b18f4db7e156d4460&q=%22powered%20by%20datasette%22%20-site%3Agithub.com%20-site%3Asimonwillison.net%20-site%3Adatasette.io%20-site%3Apypi.org"
```
   
```json

{
  "kind": "customsearch#search",
  "url": {
    "type": "application/json",
    "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  },
  "queries": {
    "request": [
      {
        "title": "Google Custom Search - \"powered by datasette\" -site:github.com -site:simonwillison.net -site:datasette.io -site:pypi.org",
        "totalResults": "93200",
        "searchTerms": "\"powered by datasette\" -site:github.com -site:simonwillison.net -site:datasette.io -site:pypi.org",
        "count": 10,
        "startIndex": 1,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "b18f4db7e156d4460"
      }
    ],
    "nextPage": [
      {
        "title": "Google Custom Search - \"powered by datasette\" -site:github.com -site:simonwillison.net -site:datasette.io -site:pypi.org",
        "totalResults": "93200",
        "searchTerms": "\"powered by datasette\" -site:github.com -site:simonwillison.net -site:datasette.io -site:pypi.org",
        "count": 10,
        "startIndex": 11,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "b18f4db7e156d4460"
      }
    ]
  },
  "context": {
    "title": "hackthehub"
  },
  "searchInformation": {
    "searchTime": 0.31123,
    "formattedSearchTime": "0.31",
    "totalResults": "93200",
    "formattedTotalResults": "93,200"
  },
  "items": [
    {
      "kind": "customsearch#result",
      "title": "Adding Search to My Pelican Blog with Datasette",
      "htmlTitle": "Adding Search to My Pelican Blog with Datasette",
      "link": "https://www.ryancheley.com/2022/01/16/adding-search-to-my-pelican-blog-with-datasette/",
      "displayLink": "www.ryancheley.com",
      "snippet": "Jan 16, 2022 ... With just a few tweaks I'm able to include a search tool, powered by datasette for my pelican blog. Needless to say, I'm pretty pumped. Next ...",
      "htmlSnippet": "Jan 16, 2022 \u003cb\u003e...\u003c/b\u003e With just a few tweaks I&#39;m able to include a search tool, \u003cb\u003epowered by datasette\u003c/b\u003e for my pelican blog. Needless to say, I&#39;m pretty pumped. Next&nbsp;...",
      "cacheId": "VU_l-YkWICMJ",
      "formattedUrl": "https://www.ryancheley.com/.../adding-search-to-my-pelican-blog-with- datasette/",
      "htmlFormattedUrl": "https://www.ryancheley.com/.../adding-search-to-my-pelican-blog-with- datasette/",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkgV0GeWFZyuLCsIlwWB3dT49rL1ETUtNz_RvTjO4E3IBGLAGfBD0ghY",
            "width": "400",
            "height": "126"
          }
        ],
        "metatags": [
          {
            "og:image": "https://www.ryancheley.com/theme/images/post-bg.jpg",
            "og:type": "article",
            "article:published_time": "2022-01-16 19:30:00-08:00",
            "og:site_name": "RyanCheley.com",
            "viewport": "width=device-width, initial-scale=1",
            "author": "ryan",
            "og:title": "Adding Search to My Pelican Blog with Datasette",
            "og:url": "https://www.ryancheley.com/2022/01/16/adding-search-to-my-pelican-blog-with-datasette/",
            "og:description": "Last summer I migrated my blog from Wordpress to Pelican. I did this for a couple of reasons (see my post here), but one thing that I...",
            "article:author": "https://www.ryancheley.com/author/ryan.html",
            "tags": "Datasette"
          }
        ],
        "cse_image": [
          {
            "src": "https://www.ryancheley.com/theme/images/post-bg.jpg"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "hhs",
      "htmlTitle": "hhs",
      "link": "https://hhscovid.publicaccountability.org/hhs",
      "displayLink": "hhscovid.publicaccountability.org",
      "snippet": "Powered by Datasette · Queries took 5.536ms · Data source: U.S. Department of Health & Human Services · Home · Name Search · Dataset Search · Browse Datasets.",
      "htmlSnippet": "\u003cb\u003ePowered by Datasette\u003c/b\u003e · Queries took 5.536ms · Data source: U.S. Department of Health &amp; Human Services &middot; Home &middot; Name Search &middot; Dataset Search &middot; Browse Datasets.",
      "cacheId": "QbpCTHbMliYJ",
      "formattedUrl": "https://hhscovid.publicaccountability.org/hhs",
      "htmlFormattedUrl": "https://hhscovid.publicaccountability.org/hhs",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Datasette: gardenbot",
      "htmlTitle": "Datasette: gardenbot",
      "link": "https://gardenbot.hunterowens.net/",
      "displayLink": "gardenbot.hunterowens.net",
      "snippet": "Datasette. gardenbot. 207 rows in 2 tables. seeds, seedlings. Powered by Datasette.",
      "htmlSnippet": "Datasette. gardenbot. 207 rows in 2 tables. seeds, seedlings. \u003cb\u003ePowered by Datasette\u003c/b\u003e.",
      "cacheId": "3wTKF0ULlW0J",
      "formattedUrl": "https://gardenbot.hunterowens.net/",
      "htmlFormattedUrl": "https://gardenbot.hunterowens.net/",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Datasette: squirrels",
      "htmlTitle": "Datasette: squirrels",
      "link": "https://squirrels-mapped.fly.dev/",
      "displayLink": "squirrels-mapped.fly.dev",
      "snippet": "Datasette. squirrels. 3,023 rows in 1 table. squirrels. Powered by Datasette.",
      "htmlSnippet": "Datasette. squirrels. 3,023 rows in 1 table. squirrels. \u003cb\u003ePowered by Datasette\u003c/b\u003e.",
      "cacheId": "J51q0gSkFt0J",
      "formattedUrl": "https://squirrels-mapped.fly.dev/",
      "htmlFormattedUrl": "https://squirrels-mapped.fly.dev/",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Nursing Home Capacity and Infection Control: Nursing_Homes",
      "htmlTitle": "Nursing Home Capacity and Infection Control: Nursing_Homes",
      "link": "https://nh.publicaccountability.org/",
      "displayLink": "nh.publicaccountability.org",
      "snippet": "Powered by Datasette · Data source: Medicare / Nursing Home Compare: Provider Info · Home · Name Search · Dataset Search · Browse Datasets · About · Terms of ...",
      "htmlSnippet": "\u003cb\u003ePowered by Datasette\u003c/b\u003e · Data source: Medicare / Nursing Home Compare: Provider Info &middot; Home &middot; Name Search &middot; Dataset Search &middot; Browse Datasets &middot; About &middot; Terms of&nbsp;...",
      "cacheId": "FR8LHmBYv4oJ",
      "formattedUrl": "https://nh.publicaccountability.org/",
      "htmlFormattedUrl": "https://nh.publicaccountability.org/",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "state",
      "htmlTitle": "state",
      "link": "https://hhsstate.publicaccountability.org/state",
      "displayLink": "hhsstate.publicaccountability.org",
      "snippet": "Powered by Datasette · Queries took 7.597ms · Data source: U.S. Department of Health & Human Services · Home · Name Search · Dataset Search · Browse Datasets.",
      "htmlSnippet": "\u003cb\u003ePowered by Datasette\u003c/b\u003e · Queries took 7.597ms · Data source: U.S. Department of Health &amp; Human Services &middot; Home &middot; Name Search &middot; Dataset Search &middot; Browse Datasets.",
      "cacheId": "h5SWjUmFCZoJ",
      "formattedUrl": "https://hhsstate.publicaccountability.org/state",
      "htmlFormattedUrl": "https://hhsstate.publicaccountability.org/state",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "About Niche Museums",
      "htmlTitle": "About Niche Museums",
      "link": "https://www.niche-museums.com/about",
      "displayLink": "www.niche-museums.com",
      "snippet": "... source code for this website is available on GitHub. You can read more about how it works in niche-museums.com, powered by Datasette. Simon Willison - @simonw.",
      "htmlSnippet": "... source code for this website is available on GitHub. You can read more about how it works in niche-museums.com, \u003cb\u003epowered by Datasette\u003c/b\u003e. Simon Willison - @simonw.",
      "cacheId": "J0HdYt-Y3gMJ",
      "formattedUrl": "https://www.niche-museums.com/about",
      "htmlFormattedUrl": "https://www.niche-museums.com/about",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "incidents - ca-fires",
      "htmlTitle": "incidents - ca-fires",
      "link": "https://ca-fires.vercel.app/ca-fires/incidents/47",
      "displayLink": "ca-fires.vercel.app",
      "snippet": "Jun 10, 2020 ... CAL FIRE Mendocino Unit, Wildfire, https://www.fire.ca.gov/incidents/2020/6/9/vineyard-fire/, N. Powered by Datasette · Query took 0.94ms.",
      "htmlSnippet": "Jun 10, 2020 \u003cb\u003e...\u003c/b\u003e CAL FIRE Mendocino Unit, Wildfire, https://www.fire.ca.gov/incidents/2020/6/9/vineyard-fire/, N. \u003cb\u003ePowered by Datasette\u003c/b\u003e · Query took 0.94ms.",
      "cacheId": "hfd7Ud1ZyygJ",
      "formattedUrl": "https://ca-fires.vercel.app/ca-fires/incidents/47",
      "htmlFormattedUrl": "https://ca-fires.vercel.app/ca-fires/incidents/47",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "German Trade Registrer data / OffeneRegister.de: openregister",
      "htmlTitle": "German Trade Registrer data / OffeneRegister.de: openregister",
      "link": "https://db.offeneregister.de/",
      "displayLink": "db.offeneregister.de",
      "snippet": "... By 4.0 · openregister. 7 tables, 12 hidden tables. ReferenceNumbers, Positions, Objectives, Names, Companies, ... Powered by Datasette · Data license: CC-By ...",
      "htmlSnippet": "... By 4.0 &middot; openregister. 7 tables, 12 hidden tables. ReferenceNumbers, Positions, Objectives, Names, Companies, ... \u003cb\u003ePowered by Datasette\u003c/b\u003e · Data license: CC-By&nbsp;...",
      "cacheId": "K9l_g7XOZboJ",
      "formattedUrl": "https://db.offeneregister.de/",
      "htmlFormattedUrl": "https://db.offeneregister.de/",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Earning transcripts scraped from The Motley Fool: transcripts",
      "htmlTitle": "Earning transcripts scraped from The Motley Fool: transcripts",
      "link": "https://motley-fool-earning-transcripts.fly.dev/",
      "displayLink": "motley-fool-earning-transcripts.fly.dev",
      "snippet": "... earning transcripts · transcripts. 6,026 rows in 1 table, 3 rows in 2 hidden tables. Transcript. Powered by Datasette · Data source: Motley Fool earning ...",
      "htmlSnippet": "... earning transcripts &middot; transcripts. 6,026 rows in 1 table, 3 rows in 2 hidden tables. Transcript. \u003cb\u003ePowered by Datasette\u003c/b\u003e · Data source: Motley Fool earning&nbsp;...",
      "cacheId": "R1NmTPSVB4kJ",
      "formattedUrl": "https://motley-fool-earning-transcripts.fly.dev/",
      "htmlFormattedUrl": "https://motley-fool-earning-transcripts.fly.dev/",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
          }
        ]
      }
    }
  ]
}
```