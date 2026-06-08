/* ═══════════════════════════════════════════════════════════════
   DATAVORIS PRODUCTS — REGISTRY
   ───────────────────────────────────────────────────────────────
   To add a new product:
   1. Copy an entry below, change the fields.
   2. (Optional) Create a story page at /{slug}.html using sello.html as a template.
   3. Commit + push. The products page + homepage section auto-update.

   Field guide:
     slug     → unique identifier; matches the story page filename if story:true
     name     → product display name
     url      → live URL (where the app actually runs)
     tagline  → one short sentence (≤ 110 chars works best)
     year     → year shipped
     status   → "live" | "beta" | "soft-launch"
     story    → true if a dedicated /{slug}.html story page exists
     tags     → optional array of short labels (e.g. ["Sales","AI"])
   ═══════════════════════════════════════════════════════════════ */

window.DV_PRODUCTS = [
  {
    slug: "sello",
    name: "Sello",
    url: "https://sello.datavoris.com",
    tagline: "Run your shop from your phone — AI + WhatsApp for small retailers. Track inventory, sales and payments by talking to your phone. No notebooks, no Excel.",
    year: 2025,
    status: "live",
    story: true,
    tags: ["SaaS", "AI", "WhatsApp", "Retail"]
  }
  // Add the next product here. Example:
  // ,{
  //   slug: "app2-slug",
  //   name: "App Name",
  //   url: "https://app.datavoris.com",
  //   tagline: "One-line description.",
  //   year: 2025,
  //   status: "live",
  //   story: true,
  //   tags: ["..."]
  // }
];
