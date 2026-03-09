import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "var(--primary, #027BBF)",
        borderRadius: "34px 34px 0 0",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "70px 100px 0 100px",
          gap: "32px",
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <Image
            src="/img/CCIDS.png"
            alt="CCIDS Logo"
            width={617}
            height={97}
          />
          <nav
            style={{
              display: "flex",
              gap: "40px",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Link
              href="#"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "underline",
                fontWeight: 400,
              }}
            >
              Join Us
            </Link>
            <Link
              href="/members"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "underline",
                fontWeight: 400,
              }}
            >
              Members
            </Link>
            <Link
              href="/events"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "underline",
                fontWeight: 400,
              }}
            >
              Events
            </Link>
            <Link
              href="#"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "underline",
                fontWeight: 400,
              }}
            >
              News
            </Link>
            <Link
              href="/publications"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "underline",
                fontWeight: 400,
              }}
            >
              Publications
            </Link>
          </nav>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="#">
              <Image
                src="/img/LinkedIn.png"
                alt="LinkedIn"
                width={33}
                height={33}
              />
            </Link>
            <Link href="#">
              <Image
                src="/img/Facebook.png"
                alt="Facebook"
                width={33}
                height={33}
              />
            </Link>
            <Link href="#">
              <Image
                src="/img/Twitter.png"
                alt="Twitter"
                width={33}
                height={33}
              />
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "270px",
          }}
        >
          <div>
            <p
              style={{
                color: "black",
                fontSize: "17px",
                lineHeight: 2,
              }}
            >
              <strong style={{ fontSize: "18px" }}>Contact Us</strong>
            </p>
            <p style={{ color: "black", fontSize: "17px", lineHeight: 2 }}>
              Email: ccids@brown.edu
            </p>
          </div>
          <div
            style={{
              marginLeft: "200px",
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "56px 32px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flex: 1,
              maxWidth: "520px",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              style={{
                flex: 3,
                border: "2px solid black",
                borderRadius: "34px",
                padding: "12px 24px",
                fontSize: "17px",
                outline: "none",
              }}
            />
            <button
              style={{
                flex: 1,
                backgroundColor: "#d0d0d0",
                border: "none",
                borderRadius: "34px",
                padding: "12px",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "85%",
          height: "1px",
          backgroundColor: "black",
          margin: "0 auto",
        }}
      />

      {/* Copyright */}
      <div
        style={{
          padding: "40px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "black",
          }}
        >
          &copy; 2026{" "}
          <Link href="#" style={{ color: "black" }}>
            Center for Clinical Cancer Informatics and Data Science (CCIDS) at
            Brown University
          </Link>
          . All Rights Reserved. &nbsp;{" "}
          <Link href="#" style={{ color: "black" }}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
