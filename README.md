# Shanti Health Care & Diagnostic Center — Website

A free, static website (HTML/CSS/JS only — no build tools, no server needed) for the clinic,
ready to host for free on **GitHub Pages**.

## Features
- Bilingual: English / Nepali toggle (top right, saved per visitor)
- Dark / Light mode toggle (saved per visitor)
- Services, About, Booking form, Contact, animated ticker, floating call button
- Online appointment booking form → emails the clinic + saves to an admin dashboard
- Staff/Admin login page to view, search, delete and export (CSV) bookings

## 1. Before you publish — 2 things to update

### a) Set the clinic's real Gmail address
Open `js/main.js` and change this line near the top:

```js
const CLINIC_EMAIL = "shantihealthcare.sunsari@gmail.com";
```

Replace it with the clinic's actual Gmail address. Bookings are emailed through
**FormSubmit** (a free service, no account or backend needed — perfect for a
GitHub Pages site). The **first** time someone books, FormSubmit sends a
one-time "**Activate your form**" email to that Gmail address — open it and click
the activation link, otherwise later booking emails won't arrive.

### b) Change the admin password (optional but recommended)
Open `js/admin.js` and change:

```js
const ADMIN_ID = "ADMIN450";
const ADMIN_PASSWORD = "ADMIN450";
```

⚠️ **Important:** This is a simple front-end-only login meant for a low-budget static
site. Anyone who views the page source can see the password — it keeps casual visitors
out of the booking list, but it is **not real security**. Don't rely on it to protect
sensitive information.

## 2. How the booking list works
Since GitHub Pages has no database, each booking is:
1. **Emailed** to the clinic's Gmail automatically (the real record).
2. **Saved in the browser's local storage** of whichever device/browser the visitor
   booked from, so the admin dashboard (`admin.html`) can also show a quick on-screen
   list **when opened on that same device**. It will not show bookings made on other
   visitors' phones/computers — the Gmail inbox is always the full, reliable record.

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
- ID: `ADMIN450` · Password: `ADMIN450` (change these — see step 1b)

## File structure
```
clinic-website/
├── index.html        → main website
├── admin.html         → staff login + bookings dashboard
├── css/style.css      → all styling (light/dark themes included)
├── js/i18n.js          → English/Nepali text + theme/language logic
├── js/main.js          → booking form, animations, nav (CLINIC_EMAIL is here)
├── js/admin.js         → admin login + dashboard logic (ADMIN_ID/PASSWORD here)
└── assets/             → clinic banner image + founder photo
```
