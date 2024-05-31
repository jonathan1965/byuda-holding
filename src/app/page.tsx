import legacyImage from "@/assets/images/legacy.png";
import HeroSlider from "@/components/home-page/HeroSlider";
import PartenersLogosSliders from "@/components/home-page/PartenersLogosSliders";
import SectorNews from "@/components/home-page/SectorNews";
import StatsSections from "@/components/home-page/StatsSections";
import VideoSection from "@/components/home-page/VideoSection";
import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import Image from "next/image";
import Link from 'next/link'

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
            <Image
              src={legacyImage}
              alt="Nature background"
              className="w-full h-40 sm:h-full"
            />
            <div className="flex flex-col justify-end p-6 text-white bg-dark-red gap-2 sm:gap-4 lg:gap-6 lg:p-10">
              <div className="flex flex-col  gap-2 sm:gap-4 lg:gap-6">
                <h3 className="text-lg sm:text-[34px] font-inter">Legacy</h3>
                <p className="font-inter font-light text-[12px] md:text-[13px] mt-5">
                We envision a future where excellence, integrity, and social responsibility converge to foster a sustainable and properous Africa.
                </p>
                <Link href="/about" className="flex items-center group gap-4 hover:gap-8 cursor-pointer transition-all duration-300">
                  <span className="font-medium font-inter uppercase group-hover:opacity-60">
                    Know more
                  </span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.82546 5.7881C8.76816 5.73079 8.71085 5.73079 8.65354 5.7881L7.79395 6.705L11.0031 9.91417C11.0604 9.97148 11.0604 10.0288 11.0031 10.0861L7.79395 13.2953L8.65354 14.2122C8.71085 14.2695 8.76816 14.2695 8.82546 14.2122L12.9515 10.0861C13.0088 10.0288 13.0088 9.97148 12.9515 9.91417L8.82546 5.7881Z"
                      fill="#911320"
                    />
                    <path
                      d="M17.0774 2.92264C15.2436 1.14613 12.7794 0 9.97135 0C7.22063 0 4.75645 1.14613 2.92264 2.92264C1.14613 4.75645 0 7.22063 0 9.97135C0 12.7794 1.14613 15.2436 2.92264 17.0774C4.69914 18.8539 7.22063 20 9.97135 20C12.7794 20 15.2436 18.8539 17.0774 17.0774C18.8539 15.2436 20 12.7794 20 9.97135C20 7.22063 18.9112 4.75645 17.0774 2.92264ZM12.9513 10.086L8.82521 14.212C8.76791 14.2693 8.7106 14.2693 8.65329 14.212L7.7937 13.2951L11.0029 10.086C11.0602 10.0287 11.0602 9.97135 11.0029 9.91404L7.7937 6.70487L8.65329 5.78797C8.7106 5.73066 8.76791 5.73066 8.82521 5.78797L12.9513 9.91404C13.0086 9.97135 13.0086 10.0287 12.9513 10.086Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </CenterContent>
      </div>
      <ContactCTA />
    </div>
  );
};
export default Home;
