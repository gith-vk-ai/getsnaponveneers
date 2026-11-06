# GetSnapOnVeneers

Pre-sell web pro getsnaponveneers.com: landing page → 6krokový kvíz → personalizované výsledky → affiliate odkaz (snap-on veneers).
Next.js 16 (App Router, TypeScript, Tailwind 4) exportovaný staticky do `out/` a servírovaný přes Cloudflare Workers static assets.
Stejná kostra jako [ccwpermitpro](https://github.com/gith-vk-ai/ccwpermitpro) / [languagesup](https://github.com/gith-vk-ai/languagesup).

## Kde co upravit

| Co | Soubor |
| --- | --- |
| Affiliate odkaz, sub-ID | `src/config/affiliate.ts` |
| GTM / GA4 ID, sledované URL parametry, consent banner | `src/config/tracking.ts` |
| Otázky a odpovědi kvízu | `src/config/quiz.ts` |
| Texty výsledků (personalizace) | `src/lib/personalize.ts` |
| Kontaktní e-mail, datum právních textů | `src/config/site.ts` |
| Hlavní stránka | `src/app/page.tsx` |
| Barvy | `src/app/globals.css` (tokeny `teal*` = hlavní akcent – petrolejová, `sun` = zlatá) |

### Affiliate
Dokud je `liveUrl` prázdné, CTA vede na neaffiliate `previewUrl` (zatím placeholder = vlastní homepage – doplnit partnera).
Po vložení schváleného affiliate odkazu do `liveUrl` se automaticky používá ten.
`NEXT_PUBLIC_AFFILIATE_MODE=preview` vynutí preview i při vyplněném `liveUrl`.

### Obsah
Snap-on veneers jsou kosmetický produkt, ne léčba. Texty záměrně neslibují zdravotní výsledky, neuvádějí konkrétní ceny ani značky
a web všude uvádí, že nejde o zubní/lékařskou radu (při bolesti, viklajících se zubech apod. → zubař). 18+.

### Analytika
Události: `PageView`, `QuizStart`, `QuizStepViewed`, `QuizAnswered`, `QuizCompleted`, `ResultsViewed`, `OutboundAffiliateClick`.
Každá nese zachycené UTM / `campaign_id` / `ad_id` / `click_id` / Revcontent `boost_id`, `widget_id`, `content_id`, `rc_uuid` z první návštěvy v session.

### Zdroje provozu: NewsBreak + Revcontent (native)
Pixely obou sítí se vkládají jako tagy v **Google Tag Manageru** (`gtmId` v `src/config/tracking.ts`), spouštěné událostmi z `dataLayer`
(`PageView`, `QuizCompleted`, `OutboundAffiliateClick` = konverze na webu). Samotné prodeje se do sítí posílají postbackem z affiliate sítě.

Příklad cílové URL v Revcontent:
`https://www.getsnaponveneers.com/?utm_source=revcontent&utm_campaign={boost_id}&boost_id={boost_id}&widget_id={widget_id}&content_id={content_id}&rc_uuid={uuid}`

U NewsBreak použij `utm_source=newsbreak` a makra z NewsBreak Ad Manageru namapuj na `campaign_id`, `ad_id`, `click_id`.

## Vývoj

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statický export do out/
npx wrangler dev   # lokálně servíruje out/ stejně jako Cloudflare
```

## Nasazení (Cloudflare Workers)

Cloudflare při každém pushu do `main` spustí `npx wrangler deploy`. Wrangler si podle `wrangler.jsonc` sám
spustí `npm run build` a nahraje `out/` – build command v dashboardu proto může zůstat prázdný.

Každý push do `main` = nasazení na živý web.

Kanonická doména je `https://www.getsnaponveneers.com` – `worker/index.js` přesměruje apex a http (301).
V Cloudflare přidej k Workeru custom domains `getsnaponveneers.com` i `www.getsnaponveneers.com`.
