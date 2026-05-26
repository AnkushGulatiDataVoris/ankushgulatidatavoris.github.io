# Claude built your prototype. Now what?

You've had the idea for a while. You finally sat down with Claude, described what you want, and twenty minutes later you've got a beautiful HTML file that demos exactly what you imagined. The buttons click. The charts move. It looks like a real product.

Then you try to actually *use* it — with your data, on your customers, every day — and the whole thing falls apart in slow motion.

That gap is real, and it's the bit nobody warns you about.

## What Claude is genuinely great at

I use Claude every week, and it's astonishing how far it gets you. In a single conversation you can produce:

- A working UI that looks designed, not hacked together
- Plausible interactions, animations, even simple charts
- HTML/CSS/JS that runs in any modern browser
- A demo polished enough to send to a stakeholder

For exploring an idea, this is a superpower. You went from *"I think the page should look like this"* to *"here's the page, click it"* in an afternoon. That used to take a week with a designer.

That alone is worth a lot. But it's a prototype, not a product.

## Where the cracks start showing

The day you try to take that HTML file beyond a demo, you start hitting questions Claude wasn't asked to solve:

- **Where does the real data come from?** Your prototype probably uses hard-coded sample data or a fake JSON blob. Production needs a live source — an API, a database, a Google Sheet, a CRM — and the plumbing to keep it fresh.
- **Where does the data go when a user submits?** A click handler that logs to the console is fine for a demo. In production it needs to write somewhere durable, with validation, deduping, and an audit trail.
- **What happens when two people use it at once?** Static HTML doesn't know what "users" are. Real apps need identity, sessions, access control, and a backend that handles concurrent state.
- **What happens when it breaks?** Production code needs error handling, logging, retries, and observability. A prototype just throws and you reload the page.
- **How does it stay online?** Hosting, domain, SSL, monitoring, backups, security headers, rate-limiting, spam protection — all the unglamorous infrastructure that keeps a thing alive in the wild.
- **How does it stay correct as your business changes?** A prototype is a snapshot. A real system has to evolve — new fields, new rules, new integrations — without rebuilding from scratch every time.

None of these are exotic problems. They're just the difference between a film set and a building you can live in. Both look like houses from the front.

## Why this gap exists

Claude is a brilliant collaborator on the *visible* part of the work — the part you can describe in a prompt. It's much harder to describe the boring half: "this needs to handle 500 form submissions a day, write them to a Google Sheet, dedupe them by email, notify me on Slack, and never lose one even when the API has a hiccup."

You can ask Claude to write code for that. It will. But wiring it into your actual stack — your CRM, your warehouse, your spam filters, your existing dashboards — requires someone who understands both halves. The AI half and the systems-engineering half.

That's the bit I do.

## A practical bridge

When someone comes to me with a Claude-built prototype, the conversation usually goes like this:

1. **Keep the front-end.** Claude did a great job. Why throw it away?
2. **Identify the real data sources.** Where does the live data live? Sheets, Snowflake, an API, a CRM? Often it's three places and we need to merge them.
3. **Build the engine underneath.** That means a small Python pipeline, an Apps Script, a Power Automate flow, or a Fabric/Snowflake job — whatever makes sense for the volume and the stack you already have.
4. **Wire it up.** The pretty form now writes to your real systems. The pretty chart now reads from live data. The pretty PDF actually generates and gets emailed.
5. **Make it boring.** Logging, error handling, retries, basic auth, rate-limit guards, a monitoring ping if it ever stops running. The stuff that means you don't think about it again.
6. **Hand it over.** You get the working system, a short doc on how it operates, and the option to keep me on retainer for tweaks — or not.

In most projects this is 1–3 weeks of work, depending on how many systems we're wiring into.

## The honest version

Claude is making it cheaper than ever to *test an idea*. That's a genuinely great thing. Ten years ago, the prototype phase was the bottleneck. Today, the bottleneck has moved one step downstream: turning the prototype into a thing your business can actually run on.

If you've built something with Claude and you're staring at it thinking *"this is great, but how do I make it real?"* — that's the conversation I want to have.

Bring the prototype. I'll bring the production engineering. Together we'll make it the thing you originally pictured, except this time it actually works on a Tuesday morning when you've got real customers depending on it.

---

*Got a Claude-built prototype you want to take live? [Tell me what you've built and where it's stuck](index.html#contact) — I'll walk you through what it would take to ship it properly.*
