// One-time creation of the Home Page document, pre-filled with the current homepage text.
//
// Dry run:  npx sanity exec scripts/import-home.ts
// Import:   npx sanity exec scripts/import-home.ts --with-user-token -- --commit
//
// Uses createIfNotExists, so re-running never overwrites edits made in Studio.
import { getCliClient } from "sanity/cli";
import { HOME_DEFAULTS } from "../sanity/lib/homeDefaults";

const doc = { _id: "homePage", _type: "homePage", ...HOME_DEFAULTS };

async function main() {
  if (!process.argv.includes("--commit")) {
    console.log("DRY RUN: would create Home Page with:\n" + JSON.stringify(doc, null, 2));
    return;
  }
  const client = getCliClient({ apiVersion: "2024-01-01" });
  if (await client.getDocument("homePage")) {
    console.log("Home Page already exists, left unchanged.");
    return;
  }
  await client.createIfNotExists(doc);
  console.log("Created Home Page in " + client.config().dataset + ".");
}

main();
