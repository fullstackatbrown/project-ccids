import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

// Types with exactly one document, opened directly instead of as a list
const SINGLETONS = ["newslettersPage", "publicationsPage"];

export default defineConfig({
  name: "ccids",
  title: "CCIDS Content Studio",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Newsletters Page")
              .id("newslettersPage")
              .child(S.document().schemaType("newslettersPage").documentId("newslettersPage")),
            S.listItem()
              .title("Publications Page")
              .id("publicationsPage")
              .child(S.document().schemaType("publicationsPage").documentId("publicationsPage")),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => !SINGLETONS.includes(item.getId() ?? "")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Singletons can't be created from the "new document" menu
    templates: (templates) => templates.filter(({ schemaType }) => !SINGLETONS.includes(schemaType)),
  },

  document: {
    // Singletons can't be duplicated or deleted
    actions: (actions, { schemaType }) =>
      SINGLETONS.includes(schemaType)
        ? actions.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : actions,
  },
});
