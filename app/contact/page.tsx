"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center px-6 py-8 md:px-12">
      <h1 className="text-4xl font-bold text-[var(--primary,#027BBF)] mb-8">Contact</h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-[600px] bg-[var(--primary-light)] text-black rounded-3xl md:rounded-[60px] px-6 py-8 md:px-12 md:py-10"
      >
        <p className="text-sm md:text-base font-bold mb-1">Name</p>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg border-none block bg-white mb-4 h-[50px] md:h-[61px]"
        />
        <p className="text-sm md:text-base font-bold mb-1 mt-6">Email</p>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg border-none block bg-white mb-4 h-[50px] md:h-[61px]"
        />
        <p className="text-sm md:text-base font-bold mb-1 mt-6">Phone Number</p>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 rounded-lg border-none block bg-white mb-4 h-[50px] md:h-[61px]"
        />
        <p className="text-sm md:text-base font-bold mb-1 mt-6">Message</p>
        <textarea
          placeholder="Message"
          className="w-full p-3 rounded-lg border-none block bg-white mb-4 h-[150px] md:h-[190px] resize-none"
        />
        <button className="bg-[var(--brown)] text-white rounded-full w-full h-[50px] md:h-[68px] mt-4 text-sm md:text-base hover:opacity-90 transition-opacity">
          Send Message
        </button>
        <p className="text-sm md:text-base font-bold mb-1 mt-6">
          Please contact us at sanjay_mishra@brown.edu with any questions!
        </p>
      </motion.div>
    </div>
  );
}
