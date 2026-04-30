import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageCopy",
  title: "Page Copy",
  type: "document",
  fields: [
    defineField({
      name: "pageId",
      title: "Page ID",
      type: "string",
      description: 'Identifier for the page, e.g. "home", "about"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      description: 'Section within the page, e.g. "hero", "vision", "mission"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      pageId: "pageId",
      section: "section",
    },
    prepare({ title, pageId, section }) {
      return {
        title: title || `${pageId}/${section}`,
        subtitle: `${pageId} — ${section}`,
      };
    },
  },
});
