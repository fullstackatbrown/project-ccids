import VisionBlock from "./components/visionblock";
import TitleImage from "./components/titleimage";
import FivePillars from "./components/fivepillars";
import UpcomingEvents from "./components/UpcomingEvents";
import ContactUs from "./components/contactus";

const sectionHeaderStyle = {
  fontSize: "35px",
  fontWeight: "bold",
  WebkitTextStroke: "0.5px",
  borderLeft: "8px solid var(--primary)",
  paddingLeft: "12px",
  marginLeft: "calc((100vw - 1498px) / 2)",
};
export default function Home() {
  return (
    <div>
      <TitleImage />
      <VisionBlock />
      <h2 style={sectionHeaderStyle}>CCIDS is built around 5 pillars:</h2>
      <div style={{ height: "30px" }}></div>
      <FivePillars />
      <div style={{ height: "30px" }}></div>
      <h2 style={sectionHeaderStyle}>Upcoming Events</h2>
      <UpcomingEvents />
      <h2 style={sectionHeaderStyle}>Contact Us</h2>
      <ContactUs />
    </div>
  );
}
