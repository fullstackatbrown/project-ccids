import { getMembers } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import ContactUs from "./contactus";
import type { CarouselMember } from "./contactus";

export default async function ContactUsWrapper() {
  let members: CarouselMember[] = [];

  try {
    const sanityMembers = await getMembers();
    if (sanityMembers && sanityMembers.length > 0) {
      members = sanityMembers.map(
        (m: { name: string; role: string; title: string; photo?: unknown }) => ({
          name: m.name,
          role: m.role,
          title: m.title,
          imageSrc: m.photo ? urlFor(m.photo).width(560).height(720).url() : "/members/headshots/placeholder.jpg",
        })
      );
    }
  } catch {
    // Sanity fetch failed — component will use hardcoded fallback
  }

  return <ContactUs members={members} />;
}
