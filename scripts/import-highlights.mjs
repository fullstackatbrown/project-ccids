// One-time import of the highlights that were hardcoded in app/newsletters/page.tsx,
// plus the Newsletters Page singleton (page title).
//
// Dry run (default, prints what would be imported, no network):
//   node scripts/import-highlights.mjs
// Import (needs `npx sanity login` first):
//   npx sanity exec scripts/import-highlights.mjs --with-user-token -- --commit
//
// Safe to re-run: documents use fixed IDs (highlight-<n>, newslettersPage) and are replaced.

const PAGE_TITLE = "Highlights from Our Members";

const highlights = [
  {
    section: "grant",
    title: "BPI Grants Cat 1 & 2 awards",
    text: "Jeremy Warner (PI)",
  },
  {
    section: "grant",
    title: "American Association of Cancer Research (AACR) Grant",
    text: "Jeremy Warner (PI)",
  },
  {
    section: "grant",
    title: "Brown University Department of Pathology and Laboratory Medicine Pilot Grant",
    text: 'Ece Uzun (PI): "Stratification of ovarian cancer subgroups using network biology approach." 5/1/2023-4/31/2024',
  },
  {
    section: "honor",
    text: "Dr. Jeremy Warner was appointed as 2nd editor-in-chief of JCO Clinical Cancer Informatics (IF 4.2)",
  },
  {
    section: "honor",
    text: 'Dr. Jeremy Warner was invited to serve on the German Federal Ministry of Education and Research (BMBF) panel, "Network of University Medicine (NUM)".',
  },
  {
    section: "honor",
    text: "Dr. Ece Uzun was appointed as inaugural editor-in-chief of JMIR Bioinformatics and Biotechnology",
  },
  {
    section: "honor",
    text: "Dr. Ece Uzun was elected as the Fellow of American Medical Informatics Association (FAMIA).",
  },
  {
    section: "honor",
    text: "Dr. Ece Uzun was elected as the Chair-Elect of AMIA Genomics and Translational Bioinformatics Working group.",
  },
  {
    section: "honor",
    text: "Dr. Sanjay Mishra received the Eric and Wendy Schmidt Award for Excellence in Science Communications from the National Academies of Science, Engineering and Medicine.",
  },
  {
    section: "honor",
    text: "Dr. Sandeep Jain was selected for the HemOnc.org 2023-2024 editorial internship.",
  },
  {
    section: "honor",
    text: "Jessica Claus was selected for the USCAP's 2024 Pathologist-in-Training Travel Award for the Annual Meeting",
  },
  {
    section: "honor",
    text: "Alex VanHelene was a member of the winning team of the Hackathon at the inaugural Catchment Area Data Conference (CADC) in Richmond, VA (December 7-9), that built a chatGPT driven ShinyApp.",
  },
];

// Same order as the current site; gaps of 10 leave room to insert items later.
highlights.forEach((h, i) => (h.order = (i + 1) * 10));

const commit = process.argv.includes("--commit");

if (!commit) {
  console.log(`DRY RUN: page title "${PAGE_TITLE}" + ${highlights.length} highlights:\n`);
  for (const h of highlights) {
    const label = h.section === "grant" ? "Grant" : "Honor";
    console.log(`${String(h.order).padStart(4)}  [${label}] ${h.title ? h.title + ": " : ""}${h.text}`);
  }
  console.log("\nRe-run with --commit through `sanity exec` to import.");
  process.exit(0);
}

const { getCliClient } = await import("sanity/cli");
const client = getCliClient({ apiVersion: "2024-01-01" });

const tx = client.transaction();
tx.createOrReplace({ _id: "newslettersPage", _type: "newslettersPage", title: PAGE_TITLE });
highlights.forEach((h, i) =>
  tx.createOrReplace({
    _id: `highlight-${i + 1}`,
    _type: "highlight",
    section: h.section,
    ...(h.title && { title: h.title }),
    text: h.text,
    order: h.order,
  })
);
await tx.commit();
console.log(`Imported page title + ${highlights.length} highlights into ${client.config().dataset}.`);
