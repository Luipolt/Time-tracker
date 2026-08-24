# Work Time Tracker

A lightweight, privacy-focused work and travel time tracker built as a single-page web application. It operates entirely without a backend, stores all data locally in the browser, can be hosted directly via GitHub Pages, and is installable as a PWA on mobile devices.

## Features

* **Quick Logging:** One-click time stamping with predefined statuses (`Active`, `Passive`, `Break`, `End`).
* **Industrial Hours Calculation:** Automatic daily totals calculated in decimal hours (e.g., 7.50 h) for easy reporting.
* **Excel Export (Matrix Format):** Generates `.xlsx` files with date-column matrix layouts including status abbreviations and optional notes.
* **Backup & Restore:** Full JSON export and import capabilities to safeguard and migrate your data.
* **Offline & PWA Ready:** Integrated Web App Manifest and Service Worker support desktop and mobile installation with full offline support.
* **Dark / Light Mode:** Automatically aligns with system preferences, with an instant manual toggle switch.
* **Privacy-First:** All data stays strictly local in your browser's `localStorage`.

## Installation & Deployment

1. Clone or download the repository.
2. Open `index.html` directly in any web browser or deploy via **GitHub Pages**.
3. Add to your mobile home screen ("Install PWA / Web App").

## Dependencies

* [SheetJS (xlsx)](https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js) – Used for client-side Excel generation.

---
Developed by Luipolt & Gemini
