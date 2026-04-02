"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VisionBlock() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full max-w-[1498px] px-5 md:px-8 pt-8 md:pt-12 pb-8 md:pb-10 mx-auto my-10 md:my-20 bg-[var(--primary-light)] rounded-2xl md:rounded-[30px]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-3xl font-bold mb-4">Our Vision</h1>
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
              <p className="text-base md:text-xl text-justify">
                To lead and collaborate in the development of standards for
                clinical cancer informatics and genomics; to demonstrate and
                improve best practices in interoperability of the local data
                ecosystem that aligns with clinician and informatician
                workflows; to develop best-in-class natural language processing
                (NLP) solutions for cancer phenotyping at scale; to identify and
                promote rapid translational innovations; and train next
                generation of clinicians and basic researchers in the domain of
                clinical cancer informatics; through collaboration with
                stakeholders across Lifespan and Brown University, and the
                national organizations.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
