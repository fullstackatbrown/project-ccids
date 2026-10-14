// One-time import of the publications that were hardcoded in app/publications/Publications.tsx,
// plus the Publications Page singleton (title + intro).
// The citations were converted from the JSX (bold member names, linked titles) into
// scripts/data/publications.json.
//
// Dry run (default, prints what would be imported, no network):
//   node scripts/import-publications.mjs
// Import (needs `npx sanity login` first):
//   npx sanity exec scripts/import-publications.mjs --with-user-token -- --commit
//
// Safe to re-run: documents use fixed IDs (publication-<year>-<n>, publicationsPage) and are replaced.
import fs from "node:fs";
import path from "node:path";

const PAGE = {
  title: "Selected Publications",
  intro: "These are selected publications by the CCIDS members. Member names are in bold.",
};

const publications = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "scripts/data/publications.json"), "utf8")
);

const plainText = (p) => p.citation.flatMap((b) => b.children).map((s) => s.text).join("");
const docId = (p) => `publication-${p.year}-${p.order / 10}`;

const commit = process.argv.includes("--commit");

if (!commit) {
  console.log(`DRY RUN: page "${PAGE.title}" + ${publications.length} publications:\n`);
  let year;
  for (const p of publications) {
    if (p.year !== year) console.log(`\n== ${(year = p.year)} ==`);
    const bold = p.citation[0].children.filter((s) => s.marks.includes("strong")).length;
    const links = p.citation[0].markDefs.length;
    const text = plainText(p);
    console.log(`${String(p.order / 10).padStart(3)}. ${text.length > 95 ? text.slice(0, 95) + "…" : text}  [${bold} bold, ${links} link]`);
  }
  console.log("\nRe-run with --commit through `sanity exec` to import.");
  process.exit(0);
}

const { getCliClient } = await import("sanity/cli");
const client = getCliClient({ apiVersion: "2024-01-01" });

const tx = client.transaction();
tx.createOrReplace({ _id: "publicationsPage", _type: "publicationsPage", ...PAGE });
for (const p of publications) {
  tx.createOrReplace({ _id: docId(p), _type: "publication", citation: p.citation, year: p.year, order: p.order });
}
await tx.commit();
console.log(`Imported page + ${publications.length} publications into ${client.config().dataset}.`);
