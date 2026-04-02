"use client";
import { motion } from "framer-motion";

export default function FivePillars() {
  const pillars = [
    ["C", "ontent Standardization"],
    ["C", "linical Integration"],
    ["I", "nformation Extraction"],
    ["D", "issemination of new technologies"],
    ["S", "cholarship/Education"],
  ];
  return pillars.map(([initial, text], index) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      key={index}
      className="w-full max-w-[1518px] h-[100px] md:h-[150px] flex mx-auto my-4 md:my-8 bg-[var(--gray)] rounded-2xl md:rounded-[30px]"
    >
      <div className="flex items-center ml-4 md:ml-5">
        <p
          className="text-5xl md:text-7xl font-bold text-[var(--primary)] w-[40px] md:w-[60px] mr-3 md:mr-5 text-center"
          style={{ WebkitTextStroke: "2px var(--primary)" }}
        >
          {initial}
        </p>
        <p className="text-lg md:text-3xl font-bold">{text}</p>
      </div>
    </motion.div>
  ));
}
