import { getSeminars } from "@/sanity/lib/queries";
import EventsClient from "./EventsClient";
import type { SeminarEntry } from "./EventsClient";

const fallbackSeminars: SeminarEntry[] = [
  {
    speakers: "Jeremy L. Warner MD, MS and Ece Uzun, MS, PhD",
    title: "A Vision for Cancer Informatics at Brown and Lifespan.",
    date: "March 13, Launch",
  },
  {
    speakers: "David A. Braun, MD, PhD",
    title: "Computational approaches to cancer immunotherapy.",
    date: "April 17",
  },
  {
    speakers: "Catherine J. Wu, MD",
    title: "Single-cell sequencing in CLL in Blood.",
    date: "May 22",
  },
  {
    speakers: "Danielle S. Bitterman, MD",
    title: "NLP for Radiation Oncology.",
    date: "June 12",
  },
  {
    speakers: "Zeynep H. Gumus, PhD",
    title: "Rare germline variants in cancer risk and tumor characteristics.",
    date: "Aug 21",
  },
  {
    speakers: "Leo Anthony Celi, MD, MPH, MSc",
    title: "The Data Scientist as an Activist for Health Equity.",
    date: "September 18",
  },
  {
    speakers: "Harry Hochheiser, PhD and Guergana Savova, PhD",
    title: "Cancer Deep Phenotyping",
    date: "December 11",
  },
];

export default async function EventsPage() {
  let seminars: SeminarEntry[] = fallbackSeminars;

  try {
    const sanitySeminars = await getSeminars();
    if (sanitySeminars && sanitySeminars.length > 0) {
      seminars = sanitySeminars.map(
        (s: { speaker: string; title: string; dateLabel?: string; date: string }) => ({
          speakers: s.speaker,
          title: s.title,
          date: s.dateLabel || new Date(s.date).toLocaleDateString("en-US", { month: "long", day: "numeric" }),
        })
      );
    }
  } catch {
    // Sanity fetch failed — use fallback
  }

  return <EventsClient pastSeminars={seminars} />;
}
