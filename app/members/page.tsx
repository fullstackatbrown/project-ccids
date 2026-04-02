"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./members.module.css";

type Member = {
  name: string;
  title: string;
  role: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const members: Member[] = [
  {
    name: "Jeremy L. Warner, MD, MS, FAMIA, FASCO",
    role: "Director",
    title: "Professor of Medicine & Professor of Biostatistics, Brown University",
    href: "https://vivo.brown.edu/display/jwarne11",
    imageSrc: "/members/headshots/jwarne11_photo.jpg",
    imageAlt: "photo of Jeremy L. Warner",
  },

  {
    name: "Ece (Gamsiz) Uzun, MS, PhD, FAMIA",
    role: "Deputy Director",
    title:
      "Associate Professor of Pathology and Laboratory Medicine, Brown University",
    href: "https://vivo.brown.edu/display/dgamsiz",
    imageSrc: "/members/headshots/dgamsiz_photo.jpg",
    imageAlt: "photo of Ece (Gamsiz) Uzun",
  },

  {
    name: "Sanjay Mishra, MS, PhD",
    role: "Center Coordinator",
    title: "Research Associate of Medicine, Brown University",
    href: "https://vivo.brown.edu/display/smishr36",
    imageSrc: "/members/headshots/smishr36_photo.jpg",
    imageAlt: "photo of Sanjay Mishra",
  },

  {
    name: "Alper Uzun, MS, PhD",
    role: "Affiliated Members",
    title:
      "Associate Professor of Pathology and Laboratory Medicine & Associate Professor of Pediatrics, Brown University",
    href: "https://vivo.brown.edu/display/auzun",
    imageSrc: "/members/headshots/auzun_photo.jpg",
    imageAlt: "photo of Alper Uzun",
  },

  {
    name: "Arlen Brickman, MD",
    role: "Affiliated Members",
    title:
      "Assistant Professor of Pathology and Laboratory Medicine, Brown University",
    href: "https://vivo.brown.edu/display/abrickma",
    imageSrc: "/members/headshots/abrickma_photo.jpg",
    imageAlt: "photo of Arlen Brickman",
  },

  {
    name: "Zhicheng Jiao, PhD",
    role: "Affiliated Members",
    title: "Assistant Professor of Diagnostic Imaging, Brown University",
    href: "https://radiology.med.brown.edu/people/zhicheng-jiao-phd",
    imageSrc: "/members/headshots/jiao_photo.jpg",
    imageAlt: "photo of Zhicheng Jiao",
  },

  {
    name: "J. Nicholas Fisk, PhD",
    role: "Affiliated Members",
    title:
      "Assistant Professor of Computational Biology, Discipline-Based Education Research (DBER), Brown University",
    href: "https://web.uri.edu/cmb/meet/j-nicholas-fisk/",
    imageSrc: "/members/headshots/nfisk_photo.png",
    imageAlt: "photo of J. Nicholas Fisk",
  },

  {
    name: "Eric Carver, PhD, DABR",
    role: "Affiliated Members",
    title: "Assistant Professor of Radiation Oncology, Brown University",
    href: "https://physicsresidency.med.brown.edu/people/eric-carver-phd-dabr",
    imageSrc: "/members/headshots/ecarver_photo.jpg",
    imageAlt: "photo of Eric Carver",
  },

  {
    name: "Matthew Hadfield, MD",
    role: "Affiliated Members",
    title: "Assistant Professor of Medicine, Brown University",
    href: "https://vivo.brown.edu/display/mhadfiel",
    imageSrc: "/members/headshots/mhadfiel_photo_.png",
    imageAlt: "photo of Matthew Hadfield",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function MembersPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section} aria-labelledby="members-title">
        <motion.h1
          id="members-title"
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Members
        </motion.h1>

        <motion.div
          className={styles.list}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {members.map((m) => (
            <motion.article
              key={m.name}
              className={styles.card}
              variants={itemVariants}
            >
              <div className={styles.avatar}>
                <Image
                  src={m.imageSrc}
                  alt={m.imageAlt}
                  width={84}
                  height={84}
                  className={styles.avatarImg}
                />
              </div>

              <div className={styles.info}>
                <div className={styles.meta}>
                  <Link
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.name}
                  >
                    {m.name}
                  </Link>
                  <div className={styles.role}>{m.role}</div>
                </div>

                <div className={styles.mainTitle}>{m.title}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
