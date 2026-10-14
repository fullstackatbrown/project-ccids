import { getHighlights, getNewslettersPage } from "@/sanity/lib/queries";
import NewslettersClient from "./NewslettersClient";
import type { HighlightEntry } from "./NewslettersClient";

export const revalidate = 60;

const DEFAULT_TITLE = "Highlights from Our Members";

const fallbackHighlights: HighlightEntry[] = [
  {
    section: "grant",
    title: "BPI Grants Cat 1 & 2 awards",
    text: "Jeremy Warner (PI)",
  },
  {
    section: "grant",
    title: "American Association of Cancer Research (AACR) Grant",
    text: "Jeremy Warner (PI)",
  },
  {
    section: "grant",
    title: "Brown University Department of Pathology and Laboratory Medicine Pilot Grant",
    text: 'Ece Uzun (PI): "Stratification of ovarian cancer subgroups using network biology approach." 5/1/2023-4/31/2024',
  },
  {
    section: "honor",
    text: "Dr. Jeremy Warner was appointed as 2nd editor-in-chief of JCO Clinical Cancer Informatics (IF 4.2)",
  },
  {
    section: "honor",
    text: 'Dr. Jeremy Warner was invited to serve on the German Federal Ministry of Education and Research (BMBF) panel, "Network of University Medicine (NUM)".',
  },
  {
    section: "honor",
    text: "Dr. Ece Uzun was appointed as inaugural editor-in-chief of JMIR Bioinformatics and Biotechnology",
  },
  {
    section: "honor",
    text: "Dr. Ece Uzun was elected as the Fellow of American Medical Informatics Association (FAMIA).",
  },
  {
    section: "honor",
    text: "Dr. Ece Uzun was elected as the Chair-Elect of AMIA Genomics and Translational Bioinformatics Working group.",
  },
  {
    section: "honor",
    text: "Dr. Sanjay Mishra received the Eric and Wendy Schmidt Award for Excellence in Science Communications from the National Academies of Science, Engineering and Medicine.",
  },
  {
    section: "honor",
    text: "Dr. Sandeep Jain was selected for the HemOnc.org 2023-2024 editorial internship.",
  },
  {
    section: "honor",
    text: "Jessica Claus was selected for the USCAP's 2024 Pathologist-in-Training Travel Award for the Annual Meeting",
  },
  {
    section: "honor",
    text: "Alex VanHelene was a member of the winning team of the Hackathon at the inaugural Catchment Area Data Conference (CADC) in Richmond, VA (December 7-9), that built a chatGPT driven ShinyApp.",
  },
];

export default async function NewslettersPage() {
  let pageTitle = DEFAULT_TITLE;
  let highlights: HighlightEntry[];

  try {
    const [sanityHighlights, sanityPage] = await Promise.all([getHighlights(), getNewslettersPage()]);
    highlights = sanityHighlights.map((h: HighlightEntry) => ({
      section: h.section,
      title: h.title,
      text: h.text,
    }));
    pageTitle = sanityPage?.title || DEFAULT_TITLE;
  } catch {
    // Sanity fetch failed — use fallback (an empty list from Sanity is shown as empty)
    highlights = fallbackHighlights;
  }

  return <NewslettersClient pageTitle={pageTitle} highlights={highlights} />;
}
