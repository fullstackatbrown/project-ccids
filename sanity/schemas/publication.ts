import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "citation",
      title: "Citation",
      type: "array",
      description:
        "Full citation. Select a member's name and press B to bold it; select the title and use the link button to add its URL.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [{ title: "Bold", value: "strong" }],
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [{ name: "href", title: "URL", type: "url" }],
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      description: "The page groups publications by this year, newest year first",
      validation: (rule) => rule.required().integer().min(1900).max(2100),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Position within its year. Lower numbers appear first",
    }),
  ],
  orderings: [
    {
      title: "Year, then order",
      name: "yearOrder",
      by: [
        { field: "year", direction: "desc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { citation: "citation", year: "year" },
    prepare({ citation, year }) {
      const text = (citation ?? [])
        .flatMap((block: { children?: { text?: string }[] }) => block.children ?? [])
        .map((span: { text?: string }) => span.text ?? "")
        .join("");
      return { title: text || "Untitled", subtitle: year ? String(year) : "No year" };
    },
  },
});
