"use client";
import CenterContent from "@/components/layouts/CenterContent";
import { useEffect, useRef, useState } from "react";
import { SwiperContainer, register } from "swiper/element/bundle";
import { SwiperOptions } from "swiper/types";



const companyInfo = [
  {
    heading: "Mission",
    description:
      "Our mission is to lead and inspire positive change in the business landscape by nurturing innovative ventures across diverse industries, consistently delivering value to our economic uphold.",
  },
  {
    heading: "Vision",
    description:
      "At Byuda Holdings, we envision a future where excellence, integrity, and social responsibility converge to foster a sustainable and prosperous Africa.",
  },
  {
    heading: "Sustainability",
    description:
      "We want to prioritize eco-friendly practices, champion social responsibility, and innovate for a greener future.",
  },
];

register();
const Mission = () => {
  const swiperRef = useRef<SwiperContainer>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params: SwiperOptions = {
      loop: true,
      autoplay: true,
      pagination: {
        clickable: true,
      },
      breakpoints:{
        0:{
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        640:{
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        768:{
          slidesPerView: 2,
          spaceBetween: 20,
        },

        800:{
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024:{
          slidesPerView: 3,
          spaceBetween: 20,
        }
      },
      spaceBetween: 20,
      speed: 200,
      injectStyles: [
        `
          .swiper-pagination-bullet{
            width: 56px;
            height: 4px;
            display: none;
          }
      `,
      ],
    };


    if (swiperContainer) {
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
      swiperContainer.swiper.on('slideChange', function (event) {
        setActiveIndex(event.realIndex)
      }
    )}
  }, []);
  return (
    <div className="py-6 bg-white lg:py-12">
      <CenterContent>
        <swiper-container class="w-full overflow-scroll grid text-white grid-cols-1 gap-7" init="false" ref={swiperRef}>
            {companyInfo.map((info, index) => (
            <swiper-slide class="h-[100%]">
            <div
                className={`${activeIndex !== index ? "max-sm:bg-[#A5A5A5]" : "max-sm:bg-[#911320]"} sm:bg-[#911320] transition-all duration-300  min-h-[200px] flex-shrink-0 w-full xl:w-[450px]- py-6 pl-7 pr-10 h-full rounded-xl`}
                key={index}
              >
                <span className="text-xl sm:text-[26px]">{info.heading}</span>
                <p className="mt-6 text-white/75 max-sm:text-[13px]">{info.description}</p>
              </div>
            </swiper-slide>
            
            ))}
          {/* </div> */}
          </swiper-container>
      </CenterContent>
    </div>
  );
};
export default Mission;
