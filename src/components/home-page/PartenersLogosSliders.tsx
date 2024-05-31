"use client";
import amtollLogo from "@/assets/images/AMTOLLOLD-1.png";
import dssLogo from "@/assets/images/dss.png";
import fccLogo from "@/assets/images/fcc.png";
import ishamiLogo from "@/assets/images/ishami.png";
import kezaLogo from "@/assets/images/kaze.png";
import Image from "next/image";
import CenterContent from "../layouts/CenterContent";

const logos = [fccLogo, ishamiLogo, kezaLogo, dssLogo,amtollLogo];

const PartenersLogosSliders = () => {
  return (
    <section className="py-5 lg:py-5">
      <CenterContent>
        <div className="sm:hidden block">
        <swiper-container
          class="flex items-center h-20 gap-4 lg:h-32"
          slides-per-view="3"
          autoplay="true"
          loop="true"
          speed="500"
          space-between="70"
        >
          {logos.map((logo, index) => (
            <swiper-slide key={index} class="h-full ml-6 lg:ml-0">
              <div className="flex items-center justify-between w-20 h-full lg:w-36">
                <Image
                  src={logo}
                  alt="Landing hero section background image one"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
        </div>
        <div className="sm:flex hidden items-center gap-16 w-fit mx-auto">
          {logos.map((logo, index) => (
            <div key={index}>
              <Image
                src={logo}
                alt="Landing hero section background image one"
                className="w-28 h-28 object-contain contrast-0 grayscale-[900%] brightness-200 hover:contrast-100 hover:grayscale-0 hover:brightness-100 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </CenterContent>
    </section>
  );
};
export default PartenersLogosSliders;
