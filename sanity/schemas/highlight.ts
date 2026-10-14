import { defineField, defineType } from "sanity";

export const HIGHLIGHT_SECTIONS = [
  { title: "Grant", value: "grant" },
  { title: "Honor & Award", value: "honor" },
];

export default defineType({
  name: "highlight",
  title: "Highlight",
  type: "document",
  description: 'A bullet on the Newsletters page ("Highlights from Our Members")',
  fields: [
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      options: { list: HIGHLIGHT_SECTIONS, layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'Optional. Shown in bold before the text, e.g. "AACR Grant"',
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", text: "text", section: "section" },
    prepare({ title, text, section }) {
      return {
        title: title || text || "Untitled",
        subtitle: HIGHLIGHT_SECTIONS.find((s) => s.value === section)?.title,
      };
    },
  },
});
