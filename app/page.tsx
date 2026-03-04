import VisionBlock from "./components/visionblock";
import TitleImage from "./components/titleimage";
import FivePillars from "./components/fivepillars";
export default function Home() {
  return (
    <div>
      <div style={{ height: "297px" }}></div>{" "}
      {/* remove this when adding header! */}
      <TitleImage />
      <VisionBlock /> {/* this is the "Our Vision" part*/}
      <h2
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          borderLeft: "8px solid #027BBF",
          paddingLeft: "12px",
          marginLeft: "calc((100vw - 1498px) / 2)",
        }}
      >
        CCIDS is built around 5 pillars:
      </h2>
      <FivePillars />
    </div>
  );
}
