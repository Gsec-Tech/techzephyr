This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Certificates

- Page: `/Certificate` — participant signs in with **registered email** + **roll number** (password) and downloads all their certificates as PDF or PNG.
- Verify page: `/verify/<certificate-id>` — every certificate has a unique QR code that opens this page and shows **"Verified · Official Finalist Certificate"** with name, competition and ID.
- Data: `data/certificates/sheet1.csv` (columns: Name, Email, Competition, Roll Number). Short competition names (ML, Web, Agentic AI, Case Comp, B-Plan, Cadathon) are mapped to full names in `data/certificates/config.mjs`.
- After changing the sheet or config run:

  ```bash
  npm run certs
  ```

  This regenerates `lib/server/certificates.json` (server-only — never sent to the browser). Certificate IDs are stable, so already-shared QR codes keep working.
- Extra people (from the certificate query form etc.) go in `data/certificates/additions.csv` with `Approved` = `YES`. Rows marked anything else are ignored. Several login emails for one person: put them in the Email cell separated by `;` (the first one is the main email).
- Set `SITE_URL` in `data/certificates/config.mjs` to your live domain so QR codes always point there (otherwise the current site address is used).
- Template: `public/certificates/template.png` (2000×1414). Text positions are in `lib/certificateRenderer.js` (`LAYOUT`).
- Keep the repo **private** — the sheet contains participant emails and roll numbers.
