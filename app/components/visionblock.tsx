"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VisionBlock({ heading, text }: { heading: string; text: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full max-w-[1498px] px-5 md:px-8 pt-8 md:pt-12 pb-8 md:pb-10 mx-auto my-10 md:my-20 bg-[var(--primary-light)] rounded-2xl md:rounded-[30px]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-3xl font-bold mb-4">{heading}</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full border-none bg-gray-300 text-white text-lg cursor-pointer"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <hr />
            <br />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p className="text-base md:text-xl text-justify whitespace-pre-line">
                {text}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
