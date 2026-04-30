"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./members.module.css";

export type MemberData = {
  name: string;
  title: string;
  role: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

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
      ease: "easeOut" as const,
    },
  },
};

export default function MembersList({ members }: { members: MemberData[] }) {
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
