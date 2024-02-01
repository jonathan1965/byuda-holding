import legacyImage from "@/assets/images/legacy.png";
import HeroSlider from "@/components/home-page/HeroSlider";
import PartenersLogosSliders from "@/components/home-page/PartenersLogosSliders";
import SectorNews from "@/components/home-page/SectorNews";
import StatsSections from "@/components/home-page/StatsSections";
import VideoSection from "@/components/home-page/VideoSection";
import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PartenersLogosSliders />
      <VideoSection />
      <div className="mt-10 mb-24">
        <SectorNews />
      </div>
      <StatsSections />
      <div className="py-10 sm:py-20">
        <CenterContent>
          <div className="grid sm:grid-cols-2">
            <Image src={legacyImage} alt="Nature background" className="w-full h-40 sm:h-full" />
            <div className="flex flex-col justify-center p-6 text-white bg-dark-red gap-2 sm:gap-4 lg:gap-6 lg:p-10">
              <h3 className="text-lg sm:text-4xl">Legacy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Natoque viverra sit venenatis feugiat.
                Praesent auctor nec nisl eros nibh turpis. Ut elementum tellus risus ante lobortis
                viverra.
              </p>
              <span className="font-medium uppercase">Know more</span>
            </div>
          </div>
        </CenterContent>
      </div>
      <ContactCTA />
    </div>
  );
};
export default Home;
