"use client";
import { useState } from "react";

export default function VisionBlock() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section
      className="vision-block"
      style={{
        width: "100%",
        maxWidth: "1498px",
        padding: "50px 20px 40px 20px",
        margin: "80px auto 80px auto", //first argument is distance from the image , top right bottom left
        backgroundColor: "rgba(2, 123, 191, 0.2)",
        borderRadius: "30px",
      }}
    >
      <div // open div for the title and the button
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Our Vision
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#ccc",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <>
          <hr />
          <br />
          <p style={{ fontSize: "18px", textAlign: "justify" }}>
            To lead and collaborate in the development of standards for clinical
            cancer informatics and genomics; to demonstrate and improve best
            practices in interoperability of the local data ecosystem that
            aligns with clinician and informatician workflows; to develop
            best-in-class natural language processing (NLP) solutions for cancer
            phenotyping at scale; to identify and promote rapid translational
            innovations; and train next generation of clinicians and basic
            researchers in the domain of clinical cancer informatics; through
            collaboration with stakeholders across Lifespan and Brown
            University, and the national organizations.
          </p>
        </>
      )}
    </section>
  );
}
