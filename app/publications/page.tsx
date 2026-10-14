import { getPublications, getPublicationsPage } from "@/sanity/lib/queries";
import PublicationsPage from "./Publications";
import type { SanityPublication } from "./Publications";

export const revalidate = 60;

const DEFAULT_TITLE = "Selected Publications";
const DEFAULT_INTRO = "These are selected publications by the CCIDS members. Member names are in bold.";

export default async function Publications() {
  let pageTitle = DEFAULT_TITLE;
  let intro = DEFAULT_INTRO;
  let publications: SanityPublication[] | undefined;

  try {
    const [sanityPubs, sanityPage] = await Promise.all([getPublications(), getPublicationsPage()]);
    publications = sanityPubs;
    pageTitle = sanityPage?.title || DEFAULT_TITLE;
    intro = sanityPage?.intro ?? DEFAULT_INTRO;
  } catch {
    // Sanity fetch failed — Publications shows its hardcoded list (an empty list from Sanity is shown as empty)
  }

  return <PublicationsPage pageTitle={pageTitle} intro={intro} publications={publications} />;
}
