"use client";
import cleanAfrica from "@/assets/images/clean-africa.png";
import maizeField from "@/assets/images/maize-field.png";
import norrsken from "@/assets/images/norrsken.png";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import CenterContent from "../layouts/CenterContent";
import { SwiperContainer, register } from "swiper/element";
import { useWindowSize } from "react-use";
import { usePathname } from "next/navigation";

register();

const sectorNews = [
  {
    id: "2",
    image: cleanAfrica,
    heading: "A Clean Africa.",
    description:
      "Environmental consciousness is taking center stage, cleaning companies in Africa are redefining their role beyond traditional sanitation services. They're becoming key players in fostering a cleaner continent, not only for the benefit of the",
  },
  {
    id: "1",
    image: norrsken,
    heading: "Revolutionizing workspaces",
    description:
      "In the bustling world of startups, where innovation meets chaos, maintaining a clean and organized workspace often takes a back seat. Recognizing the unique needs of the",
  },
  {
    id: "3",
    image: maizeField,
    heading: "Empowering farmers",
    description:
      "Environmental consciousness is taking center stage, cleaning companies in Africa are redefining their role beyond traditional sanitation services. They're becoming key players in fostering a cleaner continent, not only for the benefit of the",
  }
];

type Props = {
  hideTitle?: boolean;
  hiddenCardId?: string;
};

const SectorNews: FC<Props> = ({ hideTitle, hiddenCardId }) => {
  const swiperElRef = useRef<SwiperContainer>(null);
  const { width } = useWindowSize();
  const url = usePathname();

  return (
    <CenterContent>
      <div
        className={`flex w-full ${
          hiddenCardId ? "justify-start" : "justify-center"
        }`}
      >
        <div className="w-full">
          {!hideTitle && (
            <h4 className="text-[15px] md:text-xl text-center font-light lg:text-left">
              {url.includes("sectors") ? "Explore more" : "Portfoilio & Sector News"}
            </h4>
          )}
          <swiper-container
            class={`flex flex-wrap w-full mt-8 font-poppins lg:flex-row lg:flex-nowrap ${
              hiddenCardId ? "justify-start" : "justify-center items-center"
            }`}
            ref={swiperElRef}
            slides-per-view={
              width && width > 1024 ? "3" : width && width > 768 ? "2" : width && width > 400 ? '1.2' : "1"
            }
            loop="true"
            speed="500"
            space-between="30"
            css-mode="false"
          >
            {sectorNews
              .filter((item) => item.id !== hiddenCardId)
              .map((item, index) => (
                <swiper-slide key={index}>
                  <Link
                    onClick={(e)=>{
                      e.stopPropagation()
                    }}
                    href={`/newsroom/${item.id}`}
                    key={index}
                    className="group !hover:shadow-md !group-hover:shadow-md"
                  >
                    <div className="max-w-[420px] rounded-md overflow-clip h-full">
                      <Image
                        src={item.image}
                        alt="Clean africa"
                        className="object-cover w-full h-60"
                      />
                      <div className="px-6 pt-4 text-white group-hover:bg-white group-hover:text-black transition-all duration-300 min-h-[250px] bg-dark-red pb-11 leading-7">
                        <h3 className="text-[25px] font-medium-">
                          {item.heading}
                        </h3>
                        <p className="mt-4 text-[13px] md:text-[14px] leading-[21px] line-clamp-6 ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </swiper-slide>
              ))}
          </swiper-container>
          <div className="flex items-center gap-2 w-full justify-end mt-4">
            <div
              onClick={() => {
                swiperElRef.current?.swiper?.slidePrev();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-left-circle"
              >
                <circle cx={12} cy={12} r={10} />
                <polyline points="12 8 8 12 12 16" />
                <line x1={16} y1={12} x2={8} y2={12} />
              </svg>
            </div>
            <div
              onClick={() => {
                swiperElRef.current?.swiper?.slideNext();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-left-circle rotate-180"
              >
                <circle cx={12} cy={12} r={10} />
                <polyline points="12 8 8 12 12 16" />
                <line x1={16} y1={12} x2={8} y2={12} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </CenterContent>
  );
};
export default SectorNews;
