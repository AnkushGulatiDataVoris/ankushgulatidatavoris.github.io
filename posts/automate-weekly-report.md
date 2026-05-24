# The weekly report that should take zero minutes

There's a person on your team — maybe it's you — who spends the first two hours of every Monday rebuilding the same report. Pull the numbers. Paste them in. Reformat. Fix the chart that broke. Check it twice. Send.

By Tuesday nobody remembers it took two hours. By the next Monday, they do it again.

This is the single most common thing I get hired to fix, and it's worth explaining how I actually think about it — because the instinct most people have is the wrong one.

## The wrong instinct: "make the report faster"

When a report is painful, the natural reaction is to optimise the steps. A better template. A cleaner spreadsheet. A macro that formats the table.

That helps a little. But you've still got a human in the loop doing the same dance every week, and humans get sick, go on holiday, and make typos. The report is still fragile. You've polished the chore, not removed it.

## The right instinct: "why is a human touching this at all?"

Almost every recurring report follows the same shape:

1. **Pull** data from one or more sources
2. **Combine and clean** it into a consistent structure
3. **Calculate** the numbers that matter
4. **Present** it (a chart, a table, a PDF)
5. **Deliver** it to whoever needs it

Every single one of those five steps can be done by a machine. The only reason a person is doing them is that nobody has wired them together yet.

## What "wiring it together" actually looks like

For a typical small-business weekly report, the automated version is something like:

- A **scheduled trigger** fires every Monday at 6am
- A **script** pulls the latest data from your source (a database, a Google Sheet, an API)
- It **cleans and joins** the data the same way every time — no human judgement, no copy-paste drift
- It **renders** the output (often a PDF or a live dashboard link)
- It **emails** the finished report to the distribution list before anyone's awake

The person who used to spend two hours now spends zero. The report arrives more reliably than it ever did by hand, and it arrives *earlier*.

> The goal isn't a faster chore. It's no chore.

## How to spot your own zero-minute report

Ask one question in your next team meeting: **"What do we rebuild every week that looks basically the same each time?"**

The answers are your automation backlog, ranked roughly by how much groaning accompanies each one. Start with the loudest groan. That's the report that should take zero minutes — and almost certainly can.

---

*If you've got a report like this, [tell me about it](index.html#contact). Describing it usually takes five minutes, and that's often enough for me to tell you whether it's a quick win or a bigger system.*
