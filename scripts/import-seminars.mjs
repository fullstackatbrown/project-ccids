// One-time import of the seminars that were hardcoded in app/events/page.tsx.
//
// Dry run (default, prints what would be imported, no network):
//   node scripts/import-seminars.mjs
// Import (needs `npx sanity login` first):
//   npx sanity exec scripts/import-seminars.mjs --with-user-token -- --commit
//
// Safe to re-run: documents use fixed IDs (seminar-<n>) and are replaced.

const seminars = [
  {
    speaker: "Jeremy L. Warner MD, MS and Ece Uzun, MS, PhD",
    title: "A Vision for Cancer Informatics at Brown and Lifespan.",
    dateLabel: "March 13, Launch",
  },
  {
    speaker: "David A. Braun, MD, PhD",
    title: "Computational approaches to cancer immunotherapy.",
    dateLabel: "April 17",
  },
  {
    speaker: "Catherine J. Wu, MD",
    title: "Single-cell sequencing in CLL in Blood.",
    dateLabel: "May 22",
  },
  {
    speaker: "Danielle S. Bitterman, MD",
    title: "NLP for Radiation Oncology.",
    dateLabel: "June 12",
  },
  {
    speaker: "Zeynep H. Gumus, PhD",
    title: "Rare germline variants in cancer risk and tumor characteristics.",
    dateLabel: "Aug 21",
  },
  {
    speaker: "Leo Anthony Celi, MD, MPH, MSc",
    title: "The Data Scientist as an Activist for Health Equity.",
    dateLabel: "September 18",
  },
  {
    speaker: "Harry Hochheiser, PhD and Guergana Savova, PhD",
    title: "Cancer Deep Phenotyping",
    dateLabel: "December 11",
  },
];

// Same order as the current site; gaps of 10 leave room to insert seminars later.
seminars.forEach((s, i) => (s.order = (i + 1) * 10));

const commit = process.argv.includes("--commit");

if (!commit) {
  console.log(`DRY RUN: ${seminars.length} seminars would be imported as seminar-<n>:\n`);
  for (const s of seminars) {
    console.log(`${String(s.order).padStart(3)}  ${s.speaker} — "${s.title}" (${s.dateLabel})`);
  }
  console.log("\nRe-run with --commit through `sanity exec` to import.");
  process.exit(0);
}

const { getCliClient } = await import("sanity/cli");
const client = getCliClient({ apiVersion: "2024-01-01" });

const tx = client.transaction();
seminars.forEach((s, i) =>
  tx.createOrReplace({
    _id: `seminar-${i + 1}`,
    _type: "seminar",
    title: s.title,
    speaker: s.speaker,
    dateLabel: s.dateLabel,
    order: s.order,
  })
);
await tx.commit();
console.log(`Imported ${seminars.length} seminars into ${client.config().dataset}.`);
