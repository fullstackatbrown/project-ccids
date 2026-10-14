"use client";

import { motion } from "framer-motion";

export interface HighlightEntry {
  section: "grant" | "honor";
  title?: string;
  text: string;
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-2 self-stretch bg-[#027BBF] rounded flex-shrink-0" />
      <h2 className="text-3xl md:text-4xl font-bold text-black">{title}</h2>
    </div>
  );
}

function HighlightItem({ title, text }: HighlightEntry) {
  return (
    <div className="flex gap-4 items-start">
      <span className="text-[#027BBF] font-bold text-lg flex-shrink-0 min-w-[24px]">
        •
      </span>
      <p className="text-base text-black leading-relaxed">
        {title && <strong>{title}:</strong>} {text}
      </p>
    </div>
  );
}

const SECTIONS: { key: HighlightEntry["section"]; heading: string }[] = [
  { key: "grant", heading: "Grants" },
  { key: "honor", heading: "Honors & Awards" },
];

export default function NewslettersClient({
  pageTitle,
  highlights,
}: {
  pageTitle: string;
  highlights: HighlightEntry[];
}) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center pt-16 pb-5"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#027BBF]">
          {pageTitle}
        </h1>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-10">
        {SECTIONS.map(({ key, heading }) => {
          const items = highlights.filter((h) => h.section === key);
          if (items.length === 0) return null;
          return (
            <motion.section
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <SectionHeading title={heading} />
              <div className="flex flex-col gap-5 mt-6">
                {items.map((item, index) => (
                  <HighlightItem key={index} {...item} />
                ))}
              </div>
            </motion.section>
          );
        })}
      </main>
    </div>
  );
}
