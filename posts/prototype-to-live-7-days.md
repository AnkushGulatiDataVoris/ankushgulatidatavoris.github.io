# Your Claude prototype works. Let's make it live in 7 days.

You described an idea to Claude. It wrote you a working app — a clean interface, screens that flow, buttons that do things. You opened it in your browser and thought: *this is exactly what I pictured.*

Then you tried to actually use it. You added some data, refreshed the page, and it was all gone. There's no login. Nothing is saved. You can't share a link with a colleague and have it work for them too.

That's not a failure. That's the normal, expected line between a **prototype** and a **product** — and crossing it is a known, repeatable job. Here's exactly what it takes, and how I do it in about a week.

## What "works" actually means right now

A Claude-built frontend is genuinely impressive, and for good reason — describing a UI is exactly the kind of task these tools are great at. But by default it's a *static* app:

- **Data lives in the browser tab.** Refresh, and it resets. Nothing is stored anywhere permanent.
- **There are no real users.** No sign-up, no login, no "my data vs. your data."
- **There's no backend.** Forms don't go anywhere. Nothing talks to a database or an external service.
- **It isn't deployed.** It runs on your machine, not on the internet at a real address.

None of these are hard problems individually. They're just a different *kind* of work than building the interface — and they're the half that turns a demo into something a real business can run on.

## The path from prototype to live

![From a Claude prototype to a live product in three stages over seven days: keep the working frontend, wire up a Supabase backend with auth and a database, then deploy to Vercel or Netlify.](posts/prototype-to-live-workflow.svg)

The good news: **the expensive, creative part is already done.** You and Claude figured out what the product should be and how it should look. What's left is well-trodden engineering. Three stages:

### 1. Keep the frontend you already have

There's rarely a reason to throw away what Claude built. The interface is the part you care about, and it's the part that's done. I take that code as the starting point and build everything else *behind* it.

### 2. Wire up a real backend

This is where a prototype becomes a product. For most projects I reach for **Supabase** — it gives you a proper PostgreSQL database, user authentication (email, Google, magic links), file storage, and an instant API, without standing up a whole server. Concretely, this means:

- **Your data persists.** What a user enters is saved and still there tomorrow.
- **Real logins.** Each person signs in and sees only their own data.
- **Secure storage.** Files, records, and secrets live somewhere safe — not hard-coded in the page.
- **An API the frontend talks to.** The buttons that did nothing now read and write real data.

If a project needs heavier custom logic, this is also where serverless functions or a small Python service get added.

### 3. Deploy it and go live

Finally, the app goes onto the internet at a real address. I deploy most frontends to **Vercel** or **Netlify** — both give you fast global hosting, automatic HTTPS, and a deploy pipeline that updates the live site whenever the code changes. Connect your domain, add basic monitoring, and it's genuinely *live*: real people, real data, available 24/7.

## Why 7 days is realistic

A week sounds fast for "build me an app." It isn't — because **we're not building the app from scratch.** The product is already designed and prototyped. What remains is a defined list of engineering tasks:

- Day 1–2: Review your prototype, map the data model, set up Supabase and auth.
- Day 3–5: Connect the frontend to real data, build the API calls, handle the edge cases (errors, empty states, permissions).
- Day 6–7: Deploy to Vercel/Netlify, wire up your domain and HTTPS, test end to end, and hand it over.

Most prototype-to-live projects genuinely fit in this window. Bigger or more complex builds take longer — and if yours does, I'll tell you that honestly up front, with a realistic timeline, before we start.

## What you get at the end

- Your working app, **live on the internet** at your own domain.
- A **real database and login** so data is saved and users are separated.
- The deploy set up so future changes go live automatically.
- A short walkthrough of how it all runs — and the option to keep me on for tweaks and new features.

## Bring me the prototype

If you've built something with Claude and you're staring at it thinking *"this is great — how do I make it real?"* — that's the exact problem I solve.

Send me what you've got and a sentence on what it should do. I'll tell you whether it's a 7-day job, what the backend needs, and what it would cost — before you commit to anything.

---

*Got a working prototype you want to take live? [Start a project with me](index.html#contact) and let's get it on the internet — most go live within 7 days.*
