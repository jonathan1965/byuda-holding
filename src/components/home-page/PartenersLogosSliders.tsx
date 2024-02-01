"use client";
import amtollLogo from "@/assets/icons/amtoll-logo.svg";
import dssLogo from "@/assets/icons/dss-logo.svg";
import fccLogo from "@/assets/icons/fcc-logo.svg";
import ishamiLogo from "@/assets/icons/ishami-logo.svg";
import kezaLogo from "@/assets/icons/keza-logo.svg";
import Image from "next/image";
import CenterContent from "../layouts/CenterContent";

const logos = [fccLogo, ishamiLogo, kezaLogo, dssLogo, amtollLogo];

const PartenersLogosSliders = () => {
  return (
    <section className="py-5 lg:py-5">
      <CenterContent>
        <swiper-container
          class="flex items-center h-20 gap-4 lg:h-32"
          slides-per-view="4"
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
                  className="w-20 h-full lg:w-32"
                />
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </CenterContent>
    </section>
  );
};
export default PartenersLogosSliders;
