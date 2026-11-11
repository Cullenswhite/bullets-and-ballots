# Bullets and Ballots

Campaign site for Sam Drake-Weiss and the Bullets and Ballots party. The words, the plank authors, and the roster come from the class platform. The slogan is **WE SHOOT FOR LIBERTY**.

This is a Moscow High School U.S. Government class project (Period 1, Dalebout). It is not a real campaign.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4721](http://127.0.0.1:4721).

## Build the static site

```bash
npm run build
```

That writes a finished site into `out/`. Every file in that folder can be hosted as-is. A zip of the same folder is `bullets-and-ballots-site.zip`.

## Swap the photographs

**Sam leaning against the tree** is the panel at the end of the sideways scroll. Replace `public/photos/sam-tree.jpg`, then run `npm run build` again. The page shows the file at its real pixel size, up to 360 pixels wide, so a small photo is not blown up.

**Official portrait.** Until a headshot is added, the candidate section shows a monogram. Drop a photo at one of these paths and rebuild:

- `public/candidate/headshot.jpg`
- `public/candidate/headshot.jpeg`
- `public/candidate/headshot.png`
- `public/candidate/headshot.webp`

A vertical photo fits the frame best. Do not point that slot at a stock photo.

The party emblem is `public/party-logo.webp`.

## GitHub Pages

Pushes to `main` run `.github/workflows/pages.yml`. That workflow builds the static export and deploys the `out/` folder with GitHub Actions. The site is built for the domain root, so Next.js has no `basePath`. `public/CNAME` contains `cantraldesign.design`, and `public/.nojekyll` is copied into the build so GitHub Pages does not run Jekyll.

On Namecheap, point the domain at GitHub Pages:

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `Cullenswhite.github.io` |

Remove any other A or CNAME records for `@` and `www` before adding these. Leave mail records alone if you use them.
