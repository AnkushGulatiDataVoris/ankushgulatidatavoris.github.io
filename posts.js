/* ═══════════════════════════════════════════════════════════════
   DATAVORIS BLOG — POST INDEX
   ───────────────────────────────────────────────────────────────
   THIS IS THE ONLY FILE YOU EDIT TO PUBLISH A NEW POST.

   To publish:
   1. Write your post as a Markdown file inside the /posts/ folder
      e.g.  posts/my-new-post.md
   2. Add ONE entry to the top of the list below (newest first).
   3. Commit + push to GitHub. Done — it's live.

   Field guide:
     slug     → must match the .md filename WITHOUT the .md extension
     title    → post headline
     date     → YYYY-MM-DD (used for sorting + display)
     excerpt  → 1–2 sentence teaser shown on the blog list
     tags     → array of short labels (optional)
     readMins → estimated read time in minutes (optional)
   ═══════════════════════════════════════════════════════════════ */

window.DV_POSTS = [
  {
    slug: "automate-weekly-report",
    title: "The weekly report that should take zero minutes",
    date: "2026-05-20",
    excerpt: "If someone on your team rebuilds the same report every Monday, you don't have a reporting problem — you have an automation opportunity. Here's how I think about killing it.",
    tags: ["Automation", "Reporting"],
    readMins: 4
  },
  {
    slug: "dashboard-vs-system",
    title: "Stop asking for a dashboard. Ask for a system.",
    date: "2026-05-13",
    excerpt: "Most businesses ask me to build a dashboard. The good ones realise halfway through that the dashboard was never the actual problem.",
    tags: ["Strategy", "Data Systems"],
    readMins: 5
  }
];
