"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfijNscJHQNw3xlqSJ7BnmUzQvxOd4ZBZpF5bW7IYDMSQXSJg/formResponse";
const ENTRY_NAME = "entry.366340186";
const ENTRY_EMAIL = "entry.991356529";
const ENTRY_PHONE = "entry.689456755";
const ENTRY_MESSAGE = "entry.1918472259";

type Member = {
  name: string;
  title: string;
  role: string;
  imageSrc: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  hp_check: string; // honeypot - named obscurely to avoid browser autofill
};

const members: Member[] = [
  {
    name: "Arlen Brickman, MD",
    role: "Affiliated Member",
    title: "Assistant Professor of Pathology and Laboratory Medicine, Brown University",
    imageSrc: "/members/headshots/abrickma_photo.jpg",
  },
  {
    name: "Eric Carver, PhD, DABR",
    role: "Affiliated Member",
    title: "Assistant Professor of Radiation Oncology, Brown University",
    imageSrc: "/members/headshots/ecarver_photo.jpg",
  },
  {
    name: "J. Nicholas Fisk, PhD",
    role: "Affiliated Member",
    title: "Assistant Professor of Computational Biology, Brown University",
    imageSrc: "/members/headshots/nfisk_photo.png",
  },
  {
    name: "Matthew Hadfield, MD",
    role: "Affiliated Member",
    title: "Assistant Professor of Medicine, Brown University",
    imageSrc: "/members/headshots/mhadfiel_photo_.png",
  },
  {
    name: "Zhicheng Jiao, PhD",
    role: "Affiliated Member",
    title: "Assistant Professor of Diagnostic Imaging, Brown University",
    imageSrc: "/members/headshots/jiao_photo.jpg",
  },
  {
    name: "Sanjay Mishra, MS, PhD",
    role: "Center Coordinator",
    title: "Research Associate of Medicine, Brown University",
    imageSrc: "/members/headshots/smishr36_photo.jpg",
  },
  {
    name: "Alper Uzun, MS, PhD",
    role: "Affiliated Member",
    title: "Associate Professor of Pathology and Laboratory Medicine, Brown University",
    imageSrc: "/members/headshots/auzun_photo.jpg",
  },
  {
    name: "Ece (Gamsiz) Uzun, MS, PhD, FAMIA",
    role: "Deputy Director",
    title: "Associate Professor of Pathology and Laboratory Medicine, Brown University",
    imageSrc: "/members/headshots/dgamsiz_photo.jpg",
  },
  {
    name: "Jeremy L. Warner, MD, MS, FAMIA, FASCO",
    role: "Director",
    title: "Professor of Medicine & Professor of Biostatistics, Brown University",
    imageSrc: "/members/headshots/jwarne11_photo.jpg",
  },
];

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-white inline-block"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default function ContactUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % members.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: FormData) => {
    console.log("[Home Form] Submit handler fired");
    console.log("[Home Form] Honeypot value:", JSON.stringify(data.hp_check));

    // Honeypot check - if filled, fake success to fool bots
    if (data.hp_check) {
      console.log("[Home Form] Honeypot was filled - skipping fetch (bot detected)");
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new FormData();
      formBody.append(ENTRY_NAME, data.name);
      formBody.append(ENTRY_EMAIL, data.email);
      formBody.append(ENTRY_PHONE, data.phone || "");
      formBody.append(ENTRY_MESSAGE, data.message);

      console.log("[Home Form] Posting to:", GOOGLE_FORM_ACTION_URL);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formBody,
        mode: "no-cors",
      })
        .then(() => {
          console.log("[Home Form] Fetch resolved successfully (no-cors)");
        })
        .catch((err) => {
          console.error("[Home Form] Fetch rejected:", err);
        });

      setIsSuccess(true);
    } catch (err) {
      console.error("[Home Form] Error in submit handler:", err);
      // Still show success since no-cors doesn't give us response info
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentMember = members[currentIndex];

  const inputBaseStyles =
    "w-full max-w-[556px] p-3 rounded-lg border-2 block bg-white mb-4 h-[50px] md:h-[61px] transition-colors outline-none";
  const inputNormalStyles = "border-transparent focus:border-[var(--primary)]";
  const inputErrorStyles = "border-red-500 focus:border-red-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="w-full max-w-[1528px] mx-6 md:mx-auto md:ml-[calc((100vw-1498px)/2)] mt-10 bg-[var(--primary-light)] text-black rounded-3xl md:rounded-[60px] px-6 py-8 md:px-[100px] md:py-10"
    >
      <div className="flex flex-col lg:flex-row lg:gap-16">
        {/* Form Section */}
        <div className="flex-1">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">&#10003;</div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-base">Thanks! Sanjay will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
              {/* Honeypot */}
              <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
                <input
                  type="text"
                  id="home_hp_check"
                  name="hp_check"
                  tabIndex={-1}
                  autoComplete="new-password"
                  {...register("hp_check")}
                />
              </div>

              <label htmlFor="home-name" className="text-sm md:text-base font-bold mb-1 block">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="home-name"
                placeholder="Name"
                aria-invalid={errors.name ? "true" : "false"}
                className={`${inputBaseStyles} ${errors.name ? inputErrorStyles : inputNormalStyles}`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-600 text-sm -mt-2 mb-4">{errors.name.message}</p>}

              <label htmlFor="home-email" className="text-sm md:text-base font-bold mb-1 mt-6 block">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="home-email"
                placeholder="Email"
                aria-invalid={errors.email ? "true" : "false"}
                className={`${inputBaseStyles} ${errors.email ? inputErrorStyles : inputNormalStyles}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && <p className="text-red-600 text-sm -mt-2 mb-4">{errors.email.message}</p>}

              <label htmlFor="home-phone" className="text-sm md:text-base font-bold mb-1 mt-6 block">
                Phone Number <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="home-phone"
                placeholder="Phone Number"
                className={`${inputBaseStyles} ${inputNormalStyles}`}
                {...register("phone")}
              />

              <label htmlFor="home-message" className="text-sm md:text-base font-bold mb-1 mt-6 block">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="home-message"
                placeholder="Message"
                aria-invalid={errors.message ? "true" : "false"}
                className={`w-full max-w-[556px] p-3 rounded-lg border-2 block bg-white mb-4 h-[150px] md:h-[190px] resize-none transition-colors outline-none ${
                  errors.message ? inputErrorStyles : inputNormalStyles
                }`}
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Message must be at least 10 characters" },
                })}
              />
              {errors.message && <p className="text-red-600 text-sm -mt-2 mb-4">{errors.message.message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--brown)] text-white rounded-full w-full max-w-[556px] h-[50px] md:h-[68px] mt-4 text-sm md:text-base hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Spinner />
                    <span>Sending...</span>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-sm md:text-base font-bold mb-1 mt-6">
                Please contact us at sanjay_mishra@brown.edu with any questions!
              </p>
            </form>
          )}
        </div>

        {/* Members Carousel - Desktop Only */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center text-center w-full max-w-[556px]">
            <p className="text-2xl font-bold text-black mb-6">Our Members</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center w-full"
              >
                <div className="w-[280px] h-[360px] rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={currentMember.imageSrc}
                    alt={currentMember.name}
                    width={280}
                    height={360}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {currentMember.name}
                </h3>
                <p className="text-base font-semibold text-[var(--primary)] mb-3">
                  {currentMember.role}
                </p>
                <p className="text-base text-gray-700 leading-relaxed px-4">
                  {currentMember.title}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Dots */}
            <div className="flex gap-2.5 mt-6">
              {members.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentIndex
                      ? "bg-[var(--primary)]"
                      : "bg-gray-400"
                  }`}
                  aria-label={`Go to member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
