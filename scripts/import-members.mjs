// One-time import of the members that were hardcoded in app/members/page.tsx.
//
// Dry run (default, prints what would be imported, no network):
//   node scripts/import-members.mjs
// Import (needs `npx sanity login` first):
//   npx sanity exec scripts/import-members.mjs --with-user-token -- --commit
//
// Safe to re-run: documents use fixed IDs (member-<id>) and are replaced, and
// Sanity de-duplicates identical image uploads.
import fs from "node:fs";
import path from "node:path";

const HEADSHOTS = path.join(process.cwd(), "public/members/headshots");

const members = [
  {
    id: "abrickma",
    name: "Arlen Brickman, MD",
    role: "Affiliated Member",
    title: "Assistant Professor of Pathology and Laboratory Medicine, Brown University",
    href: "https://vivo.brown.edu/display/abrickma",
    photo: "abrickma_photo.jpg",
  },
  {
    id: "ecarver",
    name: "Eric Carver, PhD, DABR",
    role: "Affiliated Member",
    title: "Assistant Professor of Radiation Oncology, Brown University",
    href: "https://physicsresidency.med.brown.edu/people/eric-carver-phd-dabr",
    photo: "ecarver_photo.jpg",
  },
  {
    id: "nfisk",
    name: "J. Nicholas Fisk, PhD",
    role: "Affiliated Member",
    title:
      "Assistant Professor of Computational Biology, Discipline-Based Education Research (DBER), Brown University",
    href: "https://web.uri.edu/cmb/meet/j-nicholas-fisk/",
    photo: "nfisk_photo.png",
  },
  {
    id: "mhadfiel",
    name: "Matthew Hadfield, MD",
    role: "Affiliated Member",
    title: "Assistant Professor of Medicine, Brown University",
    href: "https://vivo.brown.edu/display/mhadfiel",
    photo: "mhadfiel_photo_.png",
  },
  {
    id: "jiao",
    name: "Zhicheng Jiao, PhD",
    role: "Affiliated Member",
    title: "Assistant Professor of Diagnostic Imaging, Brown University",
    href: "https://radiology.med.brown.edu/people/zhicheng-jiao-phd",
    photo: "jiao_photo.jpg",
  },
  {
    id: "smishr36",
    name: "Sanjay Mishra, MS, PhD",
    role: "Center Coordinator",
    title: "Research Associate of Medicine, Brown University",
    href: "https://vivo.brown.edu/display/smishr36",
    photo: "smishr36_photo.jpg",
  },
  {
    id: "auzun",
    name: "Alper Uzun, MS, PhD",
    role: "Affiliated Member",
    title:
      "Associate Professor of Pathology and Laboratory Medicine & Associate Professor of Pediatrics, Brown University",
    href: "https://vivo.brown.edu/display/auzun",
    photo: "auzun_photo.jpg",
  },
  {
    id: "dgamsiz",
    name: "Ece (Gamsiz) Uzun, MS, PhD, FAMIA",
    role: "Deputy Director",
    title: "Associate Professor of Pathology and Laboratory Medicine, Brown University",
    href: "https://vivo.brown.edu/display/dgamsiz",
    photo: "dgamsiz_photo.jpg",
  },
  {
    id: "jwarne11",
    name: "Jeremy L. Warner, MD, MS, FAMIA, FASCO",
    role: "Director",
    title: "Professor of Medicine & Professor of Biostatistics, Brown University",
    href: "https://vivo.brown.edu/display/jwarne11",
    photo: "jwarne11_photo.jpg",
  },
];

// Same order as the current site; gaps of 10 leave room to insert people later.
members.forEach((m, i) => (m.order = (i + 1) * 10));

const commit = process.argv.includes("--commit");

for (const m of members) {
  const file = path.join(HEADSHOTS, m.photo);
  if (!fs.existsSync(file)) throw new Error(`Missing photo for ${m.name}: ${file}`);
}

if (!commit) {
  console.log(`DRY RUN: ${members.length} members would be imported as member-<id>:\n`);
  for (const m of members) {
    const kb = Math.round(fs.statSync(path.join(HEADSHOTS, m.photo)).size / 1024);
    console.log(`${String(m.order).padStart(3)}  ${m.name}`);
    console.log(`     role:  ${m.role}`);
    console.log(`     title: ${m.title}`);
    console.log(`     link:  ${m.href}`);
    console.log(`     photo: ${m.photo} (${kb} KB)\n`);
  }
  console.log("Re-run with --commit through `sanity exec` to import.");
  process.exit(0);
}

const { getCliClient } = await import("sanity/cli");
const client = getCliClient({ apiVersion: "2024-01-01" });

const tx = client.transaction();
for (const m of members) {
  const asset = await client.assets.upload(
    "image",
    fs.createReadStream(path.join(HEADSHOTS, m.photo)),
    { filename: m.photo }
  );
  console.log(`Uploaded photo for ${m.name}`);
  tx.createOrReplace({
    _id: `member-${m.id}`,
    _type: "member",
    name: m.name,
    role: m.role,
    title: m.title,
    href: m.href,
    order: m.order,
    photo: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
  });
}
await tx.commit();
console.log(`Imported ${members.length} members into ${client.config().dataset}.`);
