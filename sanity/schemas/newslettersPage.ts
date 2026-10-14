import { defineField, defineType } from "sanity";

// Singleton: one document with _id "newslettersPage" (see sanity.config.ts)
export default defineType({
  name: "newslettersPage",
  title: "Newsletters Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      initialValue: "Highlights from Our Members",
      validation: (rule) => rule.required(),
    }),
  ],
});
