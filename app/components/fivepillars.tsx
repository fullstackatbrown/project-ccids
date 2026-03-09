export default function FivePillars() {
  const pillars = [
    ["C", "ontent Standardization"],
    ["C", "linical Integration"],
    ["I", "nformation Extraction"],
    ["D", "issemination of new technologies"],
    ["S", "cholarship/Education"],
  ];
  return pillars.map(([initial, text], index) => (
    <div
      key={index}
      style={{
        width: "100%",
        maxWidth: "1518px",
        height: "150px",
        display: "flex",
        margin: "30px auto 30px auto",
        backgroundColor: "var(--gray)",
        borderRadius: "30px",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
      >
        <p
          style={{
            fontSize: "70px",
            fontWeight: "bold",
            WebkitTextStroke: "2px var(--primary)",
            color: "var(--primary)",
            width: "60px", // to make them all align vertically
            marginRight: "20px",
            textAlign: "center", // to make the I align with the rest (and all the initials line up now as well)
          }}
        >
          {initial}
        </p>
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>{text}</p>
      </div>
    </div>
  ));
}
