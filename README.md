# Mr Parth Exim website

Website of Mr Parth Exim, an Indian merchant exporter of dehydrated food ingredients
(dehydrated white, red and pink onion, and dehydrated garlic).

It is a plain static site: HTML pages in the root, styles in `css/`, scripts in `js/`, images in `images/`.
There is no build step. Upload or serve the files as they are.

- `index.html`: Home page
- `products.html`, `<product>.html`, `<product>-<form>.html`: product, form and specification pages
- `js/site-config.js`: GST number, social profile links and the optional enquiry email endpoint
- `wrangler.json` + `.assetsignore`: serve the repository root as static assets on Cloudflare Workers
  (`npx wrangler deploy`). `package.json` only has a no-op `build` script, so a build step that runs
  `npm run build` still passes.

The earlier Next.js version of the site is in the git history (before this commit).
