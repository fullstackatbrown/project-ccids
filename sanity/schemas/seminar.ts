import { defineField, defineType } from "sanity";

export default defineType({
  name: "seminar",
  title: "Seminar",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Talk Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "speaker",
      title: "Speaker(s)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "speakerAffiliation",
      title: "Speaker Affiliation",
      type: "string",
    }),
    defineField({
      name: "dateLabel",
      title: "Date label",
      type: "string",
      description: 'Shown on the site as-is, e.g. "March 13, Launch"',
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      description: "Optional. Only used if Date label is empty.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "recordingUrl",
      title: "Recording URL",
      type: "url",
    }),
    defineField({
      name: "slidesUrl",
      title: "Slides URL",
      type: "url",
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
    select: {
      title: "title",
      subtitle: "speaker",
      dateLabel: "dateLabel",
      date: "date",
    },
    prepare({ title, subtitle, dateLabel, date }) {
      const when = dateLabel || (date ? new Date(date).toLocaleDateString() : "");
      return {
        title: title || "Untitled",
        subtitle: `${subtitle || ""}${when ? ` — ${when}` : ""}`,
      };
    },
  },
});
