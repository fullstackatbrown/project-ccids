# Sanity CMS for CCIDS

## Accessing the Studio

Visit **yoursite.com/studio** (e.g. `localhost:3000/studio` in development).

Log in with your Sanity account. Only users added to the Sanity project at
[sanity.io/manage](https://www.sanity.io/manage) can access the studio.

## Content Types

### Members
Add or edit team members shown on the Members page and homepage carousel.

- **Name** — full name with credentials (e.g. "Jeremy L. Warner, MD, MS")
- **Role** — "Director", "Deputy Director", "Affiliated Member", etc.
- **Title / Affiliation** — academic title and university
- **Photo** — upload directly in Studio (supports hotspot cropping)
- **Profile URL** — link to faculty profile page
- **Email** — optional contact email
- **Sort Order** — lower numbers appear first

### Seminars (Past Events)
Add past seminars shown on the Events page.

- **Talk Title** — title of the presentation
- **Speaker(s)** — name(s) with credentials
- **Speaker Affiliation** — optional
- **Date** — when the seminar occurred
- **Date Display Label** — optional override for how the date appears on
  the site (e.g. "March 13, Launch")
- **Description** — optional summary
- **Recording URL / Slides URL** — optional links

### Page Copy
Edit text sections on the homepage and other pages.

- **Page ID** — which page (e.g. "home", "about")
- **Section** — which section (e.g. "hero", "vision")
- **Heading** — section heading
- **Body** — rich text content
- **Sort Order** — lower numbers appear first

## Notes

- Image uploads happen inside the Studio — no need to add files to the
  codebase.
- Upcoming events still come from Google Calendar (not Sanity).
- The contact form submission goes to Google Forms (not Sanity).
- If Sanity is empty or unreachable, the site falls back to hardcoded data.
