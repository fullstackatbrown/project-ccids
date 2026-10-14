import VisionBlock from "./components/visionblock";
import TitleImage from "./components/titleimage";
import type { HeroImage } from "./components/titleimage";
import FivePillars from "./components/fivepillars";
import UpcomingEvents from "./components/UpcomingEvents";
import ContactUsWrapper from "./components/ContactUsWrapper";
import { getHomePage } from "@/sanity/lib/queries";
import { HOME_DEFAULTS } from "@/sanity/lib/homeDefaults";

export const revalidate = 60;

type HomeContent = typeof HOME_DEFAULTS & { heroImage?: HeroImage | null };

async function getHomeContent(): Promise<HomeContent> {
  try {
    const doc = (await getHomePage()) ?? {};
    // Any field left empty in Studio falls back to the original text
    const content: HomeContent = { ...HOME_DEFAULTS, heroImage: doc.heroImage };
    for (const key of Object.keys(HOME_DEFAULTS) as (keyof typeof HOME_DEFAULTS)[]) {
      const value = doc[key];
      if (Array.isArray(value) ? value.length > 0 : value) Object.assign(content, { [key]: value });
    }
    return content;
  } catch {
    // Sanity fetch failed — show the original homepage
    return HOME_DEFAULTS;
  }
}

const sectionHeadingClass =
  "text-2xl md:text-4xl font-bold border-l-[8px] border-[var(--primary)] pl-3 mx-6 md:mx-auto md:max-w-[1498px]";

export default async function Home() {
  const home = await getHomeContent();

  return (
    <div>
      <TitleImage title={home.heroTitle} subtitle={home.heroSubtitle} image={home.heroImage} />
      <VisionBlock heading={home.visionHeading} text={home.visionText} />
      <h2 className={sectionHeadingClass} style={{ WebkitTextStroke: "0.5px" }}>
        {home.pillarsHeading}
      </h2>
      <div className="h-8" />
      <FivePillars pillars={home.pillars} />
      <div className="h-8" />
      <h2 className={sectionHeadingClass} style={{ WebkitTextStroke: "0.5px" }}>
        {home.eventsHeading}
      </h2>
      <UpcomingEvents />
      <h2 className={sectionHeadingClass} style={{ WebkitTextStroke: "0.5px" }}>
        {home.contactHeading}
      </h2>
      <ContactUsWrapper />
      <div className="h-10" />
    </div>
  );
}
