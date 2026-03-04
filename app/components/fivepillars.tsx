export default function FivePillars() {
  const pillars = [
    "Content Standardization",
    "Clinical Integration",
    "Information Extraction",
    "Dissemination of new technologies",
    "Scholarship/Education",
  ];
  return pillars.map((text, index) => (
    <div
      key={index}
      style={{
        width: "100%",
        maxWidth: "1518px",
        height: "150px",
        padding: "50px 20px 40px 20px",
        margin: "80px auto 80px auto",
        backgroundColor: "#e0e4e7",
        borderRadius: "30px",
      }}
    >
      {text}
    </div>
  ));
}
