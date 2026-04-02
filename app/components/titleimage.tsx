"use client";
import { motion } from "framer-motion";

export default function TitleImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative w-full h-[400px] md:h-[875px]"
    >
      <img
        src="/images/BrownUniversityCampusPhoto.jpg"
        alt="Brown CCIDS Image"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute bottom-8 md:bottom-[70px]">
        <h1 className="text-2xl md:text-6xl font-bold text-white ml-6 md:ml-[100px] leading-tight">
          Center for Clinical <br /> Cancer Informatics <br />
          and Data Science
        </h1>
        <div className="h-4 md:h-9" />
        <h3 className="text-xs md:text-lg font-normal text-white ml-6 md:ml-[100px]">
          Our mission is to enhance the ecosystem of Clinical Cancer Informatics{" "}
          <br className="hidden md:block" />& Data Science at Brown University
          and affiliated hospitals
        </h3>
      </div>
    </motion.div>
  );
}
