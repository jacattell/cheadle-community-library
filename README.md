# cheadle-community-library

Repository for Cheadle Community Library.

## New website (Wix)

`site/` holds a simple static website. It copies the content of the
Google Sites prototype:
https://sites.google.com/cheadlecommunitylibrary.org.uk/cheadlecommunitylibrary/homepage

- Live (test) address: https://headless-patlbjrwgcb-james95939-140a.wix-site-host.com
- Wix dashboard: https://manage.wix.com/dashboard/7e0c2898-4af1-42a9-82e3-f02b5de1e20f
- Wix site ID: `7e0c2898-4af1-42a9-82e3-f02b5de1e20f`

This is a separate site. It does not change www.cheadlecommunitylibrary.org.uk.

### Pages

| File | Page |
| --- | --- |
| `site/index.html` | Homepage: hours, contact, Wi-Fi, computers, printing, What's on calendar |
| `site/room-and-space-hire.html` | Room and space hire (embedded Google Form) |
| `site/volunteer.html` | Volunteer (embedded Google Form) |
| `site/assets/styles.css` | Shared styles |

### Differences from the Google Sites prototype

- The menu is at the top of every page as large buttons, not down the
  left side. User testing found an older visitor did not notice the side menu.
- Text is a little larger (18px base).
- Each form page has a plain link to open the form, in case the embed does not load.

### Updating the site

Edit the files in `site/`, then upload the changed files to the Wix site
above (for example, by asking Claude Code with the Wix connector to
"upload the changed files in site/ to Wix site 7e0c2898-...").
Commit the change here as well, so this repository stays the source of truth.
