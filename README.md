# Shanti Health Care & Diagnostic Center — Website

A free, static website (HTML/CSS/JS only — no build tools, no server needed) for the clinic,
ready to host for free on **GitHub Pages**.

## Features
- Bilingual: English / Nepali toggle (top right, saved per visitor)
- Dark / Light mode toggle (saved per visitor)
- Services, About, Our Facility gallery, Booking form, Contact, animated ticker, floating call button
- Online appointment booking form → saved to a real shared database + emails the clinic
- Staff/Admin login page (HMIS-style dashboard) to view, search, delete and export (CSV) bookings
  from any device — not just the one they were booked from

## 1. Before you publish — set the clinic's real Gmail address
Open `js/main.js` and change this line near the top:

```js
const CLINIC_EMAIL = "shantihealthcare.sunsari@gmail.com";
```

Replace it with the clinic's actual Gmail address. Bookings are emailed through
**FormSubmit** (a free service, no account needed) as a backup notification. The
**first** time someone books, FormSubmit sends a one-time "**Activate your form**"
email to that Gmail address — open it and click the activation link, otherwise
later booking emails won't arrive. (The booking is always saved to the database
regardless of this email.)

### Changing the admin password
The admin login is checked by a server-side function (`booking-admin`, deployed to
Supabase) — not by code in this folder. To change `ADMIN_ID` / `ADMIN_PASSWORD` or
the `SESSION_SECRET`, edit the `booking-admin` Edge Function's source in the
Supabase dashboard (Edge Functions → booking-admin) and redeploy it. This is real
server-side security: unlike the old front-end-only gate, the password is never
present in this website's files or visible via "View Source".

## 2. How the booking list works — real backend (Supabase)
Every booking now goes through two Edge Functions deployed on Supabase
(project `shanti-health-care`, see `js/backend.js` for the project URL/key):
- **`booking-create`** — called by the public booking form. Anyone can call it to
  submit a booking (by design — it's a public form), but it can only *insert*, never
  read or change existing bookings.
- **`booking-admin`** — called by `admin.html` after checking the staff password
  server-side. Handles login, listing, deleting and clearing bookings. The
  database itself (`bookings` table) has Row Level Security enabled with **no**
  public policies, so the only way to read or modify it at all is through these
  two functions.

Because the data lives in a real database rather than the visitor's own browser,
every booking — from any patient, on any device — reliably shows up in the admin
dashboard, and it survives clearing browser data, switching browsers, or opening
the dashboard from a different computer.

Bookings are still **also emailed** to the clinic's Gmail via FormSubmit as a
convenient backup/notification, but the database is now the authoritative record.

## 3. Publish it for free on GitHub Pages
1. Create a new GitHub repository (e.g. `shanti-health-care`).
2. Upload everything **inside this `clinic-website` folder** (`index.html`, `admin.html`,
   `css/`, `js/`, `assets/`) to the repository — the files, not the folder itself.
3. In the repo: **Settings → Pages → Source → Deploy from branch → main / (root)** → Save.
4. After a minute, your site is live at:
   `https://<your-github-username>.github.io/<repo-name>/`

No domain purchase needed — this URL is free forever.

## 4. Login
- Admin page: `admin.html` (also linked from the footer / nav as "Staff Login")
- ID: `ADMIN450` · Password: `ADMIN450` (change these in the `booking-admin` Edge
  Function on Supabase — see "Changing the admin password" above)

## File structure
```
clinic-website/
├── index.html        → main website
├── admin.html         → staff login + bookings dashboard
├── css/style.css      → all styling (light/dark themes included)
├── js/i18n.js          → English/Nepali text + theme/language logic
├── js/backend.js       → Supabase project URL/anon key + backendCall() helper
├── js/main.js          → booking form, animations, nav (CLINIC_EMAIL is here)
├── js/admin.js         → admin login + dashboard logic (talks to the backend)
└── assets/             → clinic banner, founder photo, and facility photos
```
