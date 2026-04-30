import VisionBlock from "./components/visionblock";
import TitleImage from "./components/titleimage";
import FivePillars from "./components/fivepillars";
import UpcomingEvents from "./components/UpcomingEvents";
import ContactUsWrapper from "./components/ContactUsWrapper";

export default function Home() {
  return (
    <div>
      <TitleImage />
      <VisionBlock />
      <h2
        className="text-2xl md:text-4xl font-bold border-l-[8px] border-[var(--primary)] pl-3 mx-6 md:mx-auto md:max-w-[1498px]"
        style={{ WebkitTextStroke: "0.5px" }}
      >
        CCIDS is built around 5 pillars:
      </h2>
      <div className="h-8" />
      <FivePillars />
      <div className="h-8" />
      <h2
        className="text-2xl md:text-4xl font-bold border-l-[8px] border-[var(--primary)] pl-3 mx-6 md:mx-auto md:max-w-[1498px]"
        style={{ WebkitTextStroke: "0.5px" }}
      >
        Upcoming Events
      </h2>
      <UpcomingEvents />
      <h2
        className="text-2xl md:text-4xl font-bold border-l-[8px] border-[var(--primary)] pl-3 mx-6 md:mx-auto md:max-w-[1498px]"
        style={{ WebkitTextStroke: "0.5px" }}
      >
        Contact Us
      </h2>
      <ContactUsWrapper />
      <div className="h-10" />
    </div>
  );
}
