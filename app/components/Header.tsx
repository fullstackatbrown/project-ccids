import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "0 100px",
        height: "297px",
      }}
    >
      <Image
        src="/img/CCIDS.png"
        alt="CCIDS Logo"
        width={617}
        height={97}
        priority
      />
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Link
          href="/"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "22px",
            lineHeight: "22px",
            fontWeight: 400,
          }}
        >
          Home
        </Link>
        <Link
          href="/members"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "22px",
            lineHeight: "22px",
            fontWeight: 400,
          }}
        >
          Members
        </Link>
        <Link
          href="/events"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "22px",
            lineHeight: "22px",
            fontWeight: 400,
          }}
        >
          Events
        </Link>
        <Link
          href="/contact"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "22px",
            lineHeight: "22px",
            fontWeight: 400,
          }}
        >
          Contact
        </Link>
        <Link
          href="/publications"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "22px",
            lineHeight: "22px",
            fontWeight: 400,
          }}
        >
          Publications
        </Link>
        <Link
          href="#"
          style={{
            backgroundColor: "var(--primary, #027BBF)",
            color: "white",
            width: "189px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "34px",
            textDecoration: "none",
            fontSize: "22px",
            fontWeight: 400,
          }}
        >
          Newsletters
        </Link>
      </nav>
    </header>
  );
}
