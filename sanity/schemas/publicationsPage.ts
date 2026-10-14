import { defineField, defineType } from "sanity";

// Singleton: one document with _id "publicationsPage" (see sanity.config.ts)
export default defineType({
  name: "publicationsPage",
  title: "Publications Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      initialValue: "Selected Publications",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro text",
      type: "text",
      rows: 2,
      initialValue: "These are selected publications by the CCIDS members. Member names are in bold.",
    }),
  ],
});
