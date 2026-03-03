import Image from "next/image";
import Link from "next/link";
import styles from "./members.module.css"

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
        title: "Associate Professor of Pathology and Laboratory Medicine, Brown University",
        href: "https://vivo.brown.edu/display/dgamsiz",
        imageSrc: "/members/headshots/dgamsiz_photo.jpg",
        imageAlt: "photo of Ece (Gamsiz) Uzun",
    },
    
    {
        name: "Sanjay Mishra, MS, PhD",
        role: "Center Coordinator",
        title: "Associate Professor of Pathology and Laboratory Medicine, Brown University",
        href: "https://vivo.brown.edu/display/smishr36",
        imageSrc: "/members/headshots/smishr36_photo.jpg",
        imageAlt: "photo of Sanjay Mishra",
    },

    {
        name: "Alper Uzun, MD",
        role: "Affiliated Members",
        title: "Associate Professor of Pathology and Laboratory Medicine & Associate Professor of Pediatrics, Brown University",
        href: "https://vivo.brown.edu/display/auzun",
        imageSrc: "/members/headshots/auzun_photo.jpg",
        imageAlt: "photo of Alper Uzun",
    },


];

export default function MembersPage() {
    return(
        <main className={styles.page}>
            <section className={styles.section} aria-labelledby="members-title">
                <h1 id="members-title" className={styles.title}>Members</h1>

                <div className={styles.list}>
                    {members.map((m) => (
                        <article key={m.name} className={styles.card}>
                            <div className={styles.avatar}>
                                <Image
                                    src={m.imageSrc}
                                    alt={m.imageAlt}
                                    width={84}
                                    height={84}
                                    className={styles.avatarImage}
                                />
                            </div>

                            <div className={styles.info}>
                                <Link
                                    href={m.href}
                                    target = "_blank"
                                    rel="noopener noreferrer"
                                    className={styles.name}
                                >
                                    {m.name}
                                </Link>

                                <div className={styles.role}>{m.role}</div>
                                <div className={styles.title}>{m.title}</div>
                            </div>

                        </article>
                    ))}
                </div>

            </section>
        
        </main>
    );
}
