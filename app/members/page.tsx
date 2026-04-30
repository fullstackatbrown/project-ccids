import { getMembers } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import MembersList from "./MembersList";
import type { MemberData } from "./MembersList";

const fallbackMembers: MemberData[] = [
  {
    name: "Arlen Brickman, MD",
    role: "Affiliated Member",
    title: "Assistant Professor of Pathology and Laboratory Medicine, Brown University",
    href: "https://vivo.brown.edu/display/abrickma",
    imageSrc: "/members/headshots/abrickma_photo.jpg",
    imageAlt: "photo of Arlen Brickman",
  },
  {
    name: "Eric Carver, PhD, DABR",
    role: "Affiliated Member",
    title: "Assistant Professor of Radiation Oncology, Brown University",
    href: "https://physicsresidency.med.brown.edu/people/eric-carver-phd-dabr",
    imageSrc: "/members/headshots/ecarver_photo.jpg",
    imageAlt: "photo of Eric Carver",
  },
  {
    name: "J. Nicholas Fisk, PhD",
    role: "Affiliated Member",
    title: "Assistant Professor of Computational Biology, Discipline-Based Education Research (DBER), Brown University",
    href: "https://web.uri.edu/cmb/meet/j-nicholas-fisk/",
    imageSrc: "/members/headshots/nfisk_photo.png",
    imageAlt: "photo of J. Nicholas Fisk",
  },
  {
    name: "Matthew Hadfield, MD",
    role: "Affiliated Member",
    title: "Assistant Professor of Medicine, Brown University",
    href: "https://vivo.brown.edu/display/mhadfiel",
    imageSrc: "/members/headshots/mhadfiel_photo_.png",
    imageAlt: "photo of Matthew Hadfield",
  },
  {
    name: "Zhicheng Jiao, PhD",
    role: "Affiliated Member",
    title: "Assistant Professor of Diagnostic Imaging, Brown University",
    href: "https://radiology.med.brown.edu/people/zhicheng-jiao-phd",
    imageSrc: "/members/headshots/jiao_photo.jpg",
    imageAlt: "photo of Zhicheng Jiao",
  },
  {
    name: "Sanjay Mishra, MS, PhD",
    role: "Center Coordinator",
    title: "Research Associate of Medicine, Brown University",
    href: "https://vivo.brown.edu/display/smishr36",
    imageSrc: "/members/headshots/smishr36_photo.jpg",
    imageAlt: "photo of Sanjay Mishra",
  },
  {
    name: "Alper Uzun, MS, PhD",
    role: "Affiliated Member",
    title: "Associate Professor of Pathology and Laboratory Medicine & Associate Professor of Pediatrics, Brown University",
    href: "https://vivo.brown.edu/display/auzun",
    imageSrc: "/members/headshots/auzun_photo.jpg",
    imageAlt: "photo of Alper Uzun",
  },
  {
    name: "Ece (Gamsiz) Uzun, MS, PhD, FAMIA",
    role: "Deputy Director",
    title: "Associate Professor of Pathology and Laboratory Medicine, Brown University",
    href: "https://vivo.brown.edu/display/dgamsiz",
    imageSrc: "/members/headshots/dgamsiz_photo.jpg",
    imageAlt: "photo of Ece (Gamsiz) Uzun",
  },
  {
    name: "Jeremy L. Warner, MD, MS, FAMIA, FASCO",
    role: "Director",
    title: "Professor of Medicine & Professor of Biostatistics, Brown University",
    href: "https://vivo.brown.edu/display/jwarne11",
    imageSrc: "/members/headshots/jwarne11_photo.jpg",
    imageAlt: "photo of Jeremy L. Warner",
  },
];

export default async function MembersPage() {
  let members: MemberData[] = fallbackMembers;

  try {
    const sanityMembers = await getMembers();
    if (sanityMembers && sanityMembers.length > 0) {
      members = sanityMembers.map(
        (m: { name: string; role: string; title: string; photo?: unknown; href?: string }) => ({
          name: m.name,
          role: m.role,
          title: m.title,
          href: m.href || "#",
          imageSrc: m.photo ? urlFor(m.photo).width(168).height(168).url() : "/members/headshots/placeholder.jpg",
          imageAlt: `photo of ${m.name}`,
        })
      );
    }
  } catch {
    // Sanity fetch failed — use fallback
  }

  return <MembersList members={members} />;
}
