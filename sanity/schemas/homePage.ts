import { defineArrayMember, defineField, defineType } from "sanity";
import { HOME_DEFAULTS } from "../lib/homeDefaults";

// Singleton: one document with _id "homePage" (see sanity.config.ts)
export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Top banner" },
    { name: "vision", title: "Our Vision box" },
    { name: "pillars", title: "Pillars" },
    { name: "headings", title: "Section headings" },
  ],
  fields: [
    defineField({
      name: "heroTitle",
      title: "Headline",
      type: "text",
      rows: 3,
      fieldset: "hero",
      description: "Each new line in this box starts a new line on the site",
      initialValue: HOME_DEFAULTS.heroTitle,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Mission sentence",
      type: "text",
      rows: 3,
      fieldset: "hero",
      description: "New lines are kept on computers; on phones the text wraps on its own",
      initialValue: HOME_DEFAULTS.heroSubtitle,
    }),
    defineField({
      name: "heroImage",
      title: "Banner photo",
      type: "image",
      fieldset: "hero",
      description: "Optional. Leave empty to use the Brown campus photo. Wide photos work best.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Photo description",
          type: "string",
          description: "Short description for screen readers, e.g. “Aerial view of Brown University campus”",
        }),
      ],
    }),
    defineField({
      name: "visionHeading",
      title: "Heading",
      type: "string",
      fieldset: "vision",
      initialValue: HOME_DEFAULTS.visionHeading,
    }),
    defineField({
      name: "visionText",
      title: "Text",
      type: "text",
      rows: 8,
      fieldset: "vision",
      description: "Shown when a visitor opens the box with the + button",
      initialValue: HOME_DEFAULTS.visionText,
    }),
    defineField({
      name: "pillarsHeading",
      title: "Heading",
      type: "string",
      fieldset: "pillars",
      initialValue: HOME_DEFAULTS.pillarsHeading,
    }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      fieldset: "pillars",
      description: "The first letter of each pillar is shown large. Drag to reorder.",
      of: [defineArrayMember({ type: "string" })],
      initialValue: HOME_DEFAULTS.pillars,
    }),
    defineField({
      name: "eventsHeading",
      title: "Events heading",
      type: "string",
      fieldset: "headings",
      initialValue: HOME_DEFAULTS.eventsHeading,
    }),
    defineField({
      name: "contactHeading",
      title: "Contact heading",
      type: "string",
      fieldset: "headings",
      initialValue: HOME_DEFAULTS.contactHeading,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
