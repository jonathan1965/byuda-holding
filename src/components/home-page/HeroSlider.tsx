"use client";
import landingHeroBg1 from "@/assets/images/landing-bg-1.png";
import landingHeroBg2 from "@/assets/images/landing-bg-2.png";
import landingHeroMobile from "@/assets/images/landing-mobile.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { SwiperContainer, register } from "swiper/element/bundle";
import { SwiperOptions } from "swiper/types";

register();

const HeroSlider = () => {
  const swiperRef = useRef<SwiperContainer>(null);

  const sliderData = [
    {
      image: [landingHeroMobile, landingHeroBg1],
      description:
        "Byuda Holdings invests in sectors that are the building blocks of the African Population",
    },
    {
      image: landingHeroBg2,
      description:
        "Byuda Holdings invests in sectors that are the building blocks of the African Population",
    },
  ];

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params: SwiperOptions = {
      loop: true,
      autoplay: true,
      pagination: {
        clickable: true,
      },
      speed: 200,
      injectStyles: [
        `
          .swiper-pagination-bullet{
            width: 56px;
            height: 4px;
            border-radius: 4px !important;
            background-color: white;
          }
      `,
      ],
    };

    if (swiperContainer) {
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }
  }, []);

  return (
    <section className="relative w-full bg-black">
      <swiper-container className="w-full h-10" init="false" ref={swiperRef}>
        {sliderData.map((item, index) => (
          <swiper-slide className="w-full" key={index}>
            <div>
              {Array.isArray(item.image) ? (
                <>
                  {item.image.map((img, idx) => (
                    <Image
                      src={img}
                      alt="Landing hero section background image one"
                      key={idx}
                      className={`${
                        idx === 0 ? "md:hidden" : "hidden md:inline-block"
                      } w-full h-[70vh] object-center lg:h-[600px] object-cover lg:object-top pointer-events-none opacity-80`}
                    />
                  ))}
                  <span className="absolute block w-full text-center font-inter font-medium text-white lg:text-[15px] bottom-10">
                    Byuda Holdings invests in sectors that are the building
                    blocks of the African Population
                  </span>
                </>
              ) : (
                <>
                  <Image
                    src={item.image}
                    alt="Landing hero section background image one"
                    className="w-full h-[70vh] object-center lg:h-[600px] object-cover lg:object-top pointer-events-none opacity-80"
                  />
                  <span className="absolute block w-full text-center font-inter font-medium text-white lg:text-[15px] bottom-10">
                    Byuda Holdings invests in sectors that are the building
                    blocks of the African Population
                  </span>
                </>
              )}
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};
export default HeroSlider;
