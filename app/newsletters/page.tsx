"use client";

import { motion } from "framer-motion";

interface SeminarEntry {
  speakers: string;
  title: string;
  date: string;
}

interface GrantEntry {
  title: string;
  details?: string;
}

interface HonorEntry {
  content: string;
}

const seminars: SeminarEntry[] = [
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

const grants: GrantEntry[] = [
  {
    title: "BPI Grants Cat 1 & 2 awards",
    details: "Jeremy Warner (PI)",
  },
  {
    title: "American Association of Cancer Research (AACR) Grant",
    details: "Jeremy Warner (PI)",
  },
  {
    title: "Brown University Department of Pathology and Laboratory Medicine Pilot Grant",
    details:
      'Ece Uzun (PI): "Stratification of ovarian cancer subgroups using network biology approach." 5/1/2023-4/31/2024',
  },
];

const honors: HonorEntry[] = [
  {
    content:
      "Dr. Jeremy Warner was appointed as 2nd editor-in-chief of JCO Clinical Cancer Informatics (IF 4.2)",
  },
  {
    content:
      'Dr. Jeremy Warner was invited to serve on the German Federal Ministry of Education and Research (BMBF) panel, "Network of University Medicine (NUM)".',
  },
  {
    content:
      "Dr. Ece Uzun was appointed as inaugural editor-in-chief of JMIR Bioinformatics and Biotechnology",
  },
  {
    content:
      "Dr. Ece Uzun was elected as the Fellow of American Medical Informatics Association (FAMIA).",
  },
  {
    content:
      "Dr. Ece Uzun was elected as the Chair-Elect of AMIA Genomics and Translational Bioinformatics Working group.",
  },
  {
    content:
      "Dr. Sanjay Mishra received the Eric and Wendy Schmidt Award for Excellence in Science Communications from the National Academies of Science, Engineering and Medicine.",
  },
  {
    content:
      "Dr. Sandeep Jain was selected for the HemOnc.org 2023-2024 editorial internship.",
  },
  {
    content:
      "Jessica Claus was selected for the USCAP's 2024 Pathologist-in-Training Travel Award for the Annual Meeting",
  },
  {
    content:
      "Alex VanHelene was a member of the winning team of the Hackathon at the inaugural Catchment Area Data Conference (CADC) in Richmond, VA (December 7-9), that built a chatGPT driven ShinyApp.",
  },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-2 self-stretch bg-[#027BBF] rounded flex-shrink-0" />
      <h2 className="text-3xl md:text-4xl font-bold text-black">{title}</h2>
    </div>
  );
}

function SeminarItem({ speakers, title, date }: SeminarEntry) {
  return (
    <div className="flex gap-4 items-start">
      <span className="text-[#027BBF] font-bold text-lg flex-shrink-0 min-w-[24px]">
        •
      </span>
      <p className="text-base text-black leading-relaxed">
        <strong>{speakers}</strong> "{title}" ({date})
      </p>
    </div>
  );
}

function GrantItem({ title, details }: GrantEntry) {
  return (
    <div className="flex gap-4 items-start">
      <span className="text-[#027BBF] font-bold text-lg flex-shrink-0 min-w-[24px]">
        •
      </span>
      <p className="text-base text-black leading-relaxed">
        <strong>{title}:</strong> {details}
      </p>
    </div>
  );
}

function HonorItem({ content }: HonorEntry) {
  return (
    <div className="flex gap-4 items-start">
      <span className="text-[#027BBF] font-bold text-lg flex-shrink-0 min-w-[24px]">
        •
      </span>
      <p className="text-base text-black leading-relaxed">{content}</p>
    </div>
  );
}

export default function NewslettersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center pt-16 pb-5"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#027BBF] mb-6">
          Accomplishments of the CCIDS Members
        </h1>
        <p className="text-base text-black max-w-3xl mx-auto px-6">
          Highlights from our members including seminars, grants, and honors.
        </p>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-10">
        {/* CCIDS Seminar Series */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeading title="CCIDS Seminar Series" />
          <div className="flex flex-col gap-5 mt-6">
            {seminars.map((seminar, index) => (
              <SeminarItem key={index} {...seminar} />
            ))}
          </div>
        </motion.section>

        {/* Grants */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeading title="Grants" />
          <div className="flex flex-col gap-5 mt-6">
            {grants.map((grant, index) => (
              <GrantItem key={index} {...grant} />
            ))}
          </div>
        </motion.section>

        {/* Honors & Awards */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeading title="Honors & Awards" />
          <div className="flex flex-col gap-5 mt-6">
            {honors.map((honor, index) => (
              <HonorItem key={index} {...honor} />
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
