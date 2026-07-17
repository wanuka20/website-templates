# Lighthouse Performance Checks

The Gym template has two production Lighthouse reports:

- `lighthouse-gym-v0.5.0.json` — initial v0.5.0 audit.
- `lighthouse-gym-v0.5.0-final.json` — final v0.5.0 audit after removing template Framer Motion hydration.

## Repeat this test later

1. Run a production build:

   ```powershell
   npm.cmd run build
   npm.cmd start -- -p 3000
   ```

2. In a second terminal, create a new report. Change the filename for the version or date being tested:

   ```powershell
   npx.cmd --yes lighthouse http://127.0.0.1:3000/templates/gym --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=reports/lighthouse-gym-vNEXT.json --chrome-flags="--headless --no-sandbox --disable-features=HttpsFirstMode"
   ```

3. Compare Performance, FCP, LCP, TBT, and CLS against the final v0.5.0 report. Run the same command for another template by replacing `gym` in both the URL and filename.

Use a production build for comparisons. `npm run dev` includes development tooling and will produce misleading numbers.
