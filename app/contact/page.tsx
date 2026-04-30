"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfijNscJHQNw3xlqSJ7BnmUzQvxOd4ZBZpF5bW7IYDMSQXSJg/formResponse";
const ENTRY_NAME = "entry.366340186";
const ENTRY_EMAIL = "entry.991356529";
const ENTRY_PHONE = "entry.689456755";
const ENTRY_MESSAGE = "entry.1918472259";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  hp_check: string; // honeypot - named obscurely to avoid browser autofill
};

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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check - if filled, fake success to fool bots
    if (data.hp_check) {
      setIsSuccess(true);
      setStatusMessage("Thanks! Sanjay will be in touch soon.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("Sending your message...");

    try {
      const formBody = new FormData();
      formBody.append(ENTRY_NAME, data.name);
      formBody.append(ENTRY_EMAIL, data.email);
      formBody.append(ENTRY_PHONE, data.phone || "");
      formBody.append(ENTRY_MESSAGE, data.message);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formBody,
        mode: "no-cors",
      }).catch((err) => {
        console.error("[Contact Form] Fetch rejected:", err);
      });

      // With no-cors we can't read the response, so assume success
      setIsSuccess(true);
      setStatusMessage("Thanks! Sanjay will be in touch soon.");
    } catch (err) {
      console.error("[Contact Form] Error in submit handler:", err);
      setStatusMessage(
        "Something went wrong. Please email sanjay_mishra@brown.edu directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseStyles =
    "w-full p-3 rounded-lg border-2 block bg-white h-[50px] md:h-[61px] transition-colors outline-none";
  const inputNormalStyles = "border-transparent focus:border-[var(--primary)]";
  const inputErrorStyles = "border-red-500 focus:border-red-500";

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center px-6 py-8 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[var(--primary,#027BBF)] mb-8"
        >
          Contact
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[600px] bg-[var(--primary-light)] text-black rounded-3xl md:rounded-[60px] px-6 py-12 md:px-12 md:py-16 text-center"
        >
          <div className="text-5xl mb-6">&#10003;</div>
          <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
          <p className="text-base md:text-lg" role="status" aria-live="polite">
            {statusMessage}
          </p>
          <p className="text-sm md:text-base mt-6 text-gray-700">
            You can also reach us at{" "}
            <a
              href="mailto:sanjay_mishra@brown.edu"
              className="text-[var(--primary)] underline"
            >
              sanjay_mishra@brown.edu
            </a>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-6 py-8 md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-[var(--primary,#027BBF)] mb-8"
      >
        Contact
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-[600px] bg-[var(--primary-light)] text-black rounded-3xl md:rounded-[60px] px-6 py-8 md:px-12 md:py-10"
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          {/* Honeypot field - hidden from users, visible to bots */}
          <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
            <label htmlFor="hp_check">
              Leave this field empty
              <input
                type="text"
                id="hp_check"
                tabIndex={-1}
                autoComplete="new-password"
                {...register("hp_check")}
              />
            </label>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-sm md:text-base font-bold mb-1 block"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`${inputBaseStyles} ${
                errors.name ? inputErrorStyles : inputNormalStyles
              }`}
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p
                id="name-error"
                className="text-red-600 text-sm mt-1"
                role="alert"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4 mt-6">
            <label
              htmlFor="email"
              className="text-sm md:text-base font-bold mb-1 block"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${inputBaseStyles} ${
                errors.email ? inputErrorStyles : inputNormalStyles
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-red-600 text-sm mt-1"
                role="alert"
              >
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4 mt-6">
            <label
              htmlFor="phone"
              className="text-sm md:text-base font-bold mb-1 block"
            >
              Phone Number{" "}
              <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="(123) 456-7890"
              className={`${inputBaseStyles} ${inputNormalStyles}`}
              {...register("phone")}
            />
          </div>

          {/* Message */}
          <div className="mb-4 mt-6">
            <label
              htmlFor="message"
              className="text-sm md:text-base font-bold mb-1 block"
            >
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full p-3 rounded-lg border-2 block bg-white h-[150px] md:h-[190px] resize-none transition-colors outline-none ${
                errors.message ? inputErrorStyles : inputNormalStyles
              }`}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            />
            {errors.message && (
              <p
                id="message-error"
                className="text-red-600 text-sm mt-1"
                role="alert"
              >
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[var(--brown)] text-white rounded-full w-full h-[50px] md:h-[68px] mt-4 text-sm md:text-base hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
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

          {/* Status announcements for screen readers */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {statusMessage}
          </div>

          <p className="text-sm md:text-base font-bold mb-1 mt-6">
            You can also reach us at{" "}
            <a
              href="mailto:sanjay_mishra@brown.edu"
              className="text-[var(--primary)] underline"
            >
              sanjay_mishra@brown.edu
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
