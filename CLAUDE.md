# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Working preferences

- Use simple, clear, concise language. Ask clarifying questions when unsure.
- **Pull requests: the owner has authorised Claude to open pull requests
  and merge them automatically** (squash merge into `main`) once the work
  is done and checked. No need to ask first.

## Project

The website for Cheadle Community Library, a volunteer-supported library.
Many visitors are older people, so keep pages simple and easy to read.

- `site/` – the static website (plain HTML). This is what gets uploaded to Wix.
- `src/styles.scss` – styles, built on GOV.UK Frontend. Compiles to
  `site/assets/styles.css`. Do not edit the compiled CSS by hand.
- Build the CSS: `npm install` then `npm run build` (a post-build step makes the CSS plain ASCII so text uploads are exact).

## Design system

The site uses the GOV.UK Design System (`govuk-frontend` package).
The site is **not** on GOV.UK, so it must **not** use:

- the crown logo or the GOV.UK name or logotype
- the GDS Transport font (use Arial – set in `src/styles.scss`)
- the Crown copyright or Open Government Licence footer text

Use the `govuk-generic-header` component (not `govuk-header`) and the
`govuk-service-navigation` component for the top menu. Keep the menu at the
top of the page – user testing showed older visitors miss side menus.

## Wix deployment

- Wix site ID (metaSiteId): `7e0c2898-4af1-42a9-82e3-f02b5de1e20f`
- Live (test) address: https://headless-patlbjrwgcb-james95939-140a.wix-site-host.com
- Dashboard: https://manage.wix.com/dashboard/7e0c2898-4af1-42a9-82e3-f02b5de1e20f

To deploy, upload the changed files in `site/` to that site ID with the Wix
connector (`UploadHeadlessWebsiteFiles`). The connector cannot read files from
GitHub, so files must be sent as text. Then compare the live files with the
repository to confirm the upload is exact.

Automatic deploys from GitHub Actions were tried and do not work: Wix rejects
API-key logins for this site (`VELO.APP_PROJECT_READ` denied for the site's
app, even with every permission). Do not retry this without new information.

Never create a new Wix site for updates. This site is separate from the live www.cheadlecommunitylibrary.org.uk
site, which must not be changed without asking.

After deploying, check every page returns 200 and look at the changed pages in a browser.
