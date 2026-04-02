"use client";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="w-full max-w-[1528px] mx-6 md:mx-auto md:ml-[calc((100vw-1498px)/2)] mt-10 bg-[var(--primary-light)] text-black rounded-3xl md:rounded-[60px] px-6 py-8 md:px-[100px] md:py-10"
    >
      <div className="flex items-center">
        <label className="text-base md:text-xl font-bold mr-6 md:mr-10 flex items-center">
          <input
            type="radio"
            name="studentType"
            className="w-5 h-5 md:w-[30px] md:h-[30px] mr-2"
          />{" "}
          Undergraduate
        </label>
        <label className="text-base md:text-xl font-bold flex items-center">
          <input
            type="radio"
            name="studentType"
            className="w-5 h-5 md:w-[30px] md:h-[30px] mr-2"
          />{" "}
          Graduate
        </label>
      </div>
      <div className="h-6 md:h-8" />
      <p className="text-sm md:text-base font-bold mb-1 mt-6">Name</p>
      <input
        type="text"
        placeholder="Name"
        className="w-full max-w-[556px] p-3 rounded-lg border-none block bg-white mb-4 h-[50px] md:h-[61px]"
      />
      <p className="text-sm md:text-base font-bold mb-1 mt-6">Email</p>
      <input
        type="text"
        placeholder="Email"
        className="w-full max-w-[556px] p-3 rounded-lg border-none block bg-white mb-4 h-[50px] md:h-[61px]"
      />
      <p className="text-sm md:text-base font-bold mb-1 mt-6">Phone Number</p>
      <input
        type="text"
        placeholder="Phone Number"
        className="w-full max-w-[556px] p-3 rounded-lg border-none block bg-white mb-4 h-[50px] md:h-[61px]"
      />
      <p className="text-sm md:text-base font-bold mb-1 mt-6">Message</p>
      <textarea
        placeholder="Message"
        className="w-full max-w-[556px] p-3 rounded-lg border-none block bg-white mb-4 h-[150px] md:h-[190px] resize-none"
      />
      <button className="bg-[var(--brown)] text-white rounded-full w-full max-w-[556px] h-[50px] md:h-[68px] mt-4 text-sm md:text-base">
        Send Message
      </button>
      <p className="text-sm md:text-base font-bold mb-1 mt-6">
        Please contact us at sanjay_mishra@brown.edu with any questions!
      </p>
    </motion.div>
  );
}
