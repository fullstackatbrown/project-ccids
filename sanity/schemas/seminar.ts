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
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateLabel",
      title: "Date Display Label",
      type: "string",
      description: 'Optional label shown on the site, e.g. "March 13, Launch"',
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
  ],
  orderings: [
    {
      title: "Date (newest first)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "speaker",
      date: "date",
    },
    prepare({ title, subtitle, date }) {
      return {
        title: title || "Untitled",
        subtitle: `${subtitle || ""}${date ? ` — ${new Date(date).toLocaleDateString()}` : ""}`,
      };
    },
  },
});
