"use client";
import fccLogo from "@/assets/icons/fcc-logo.svg";
import ishamiLogo from "@/assets/icons/ishami-logo.svg";
import kezaLogo from "@/assets/icons/keza-logo.svg";
import doctor from "@/assets/images/doctor-image.png";
import farmerTractor from "@/assets/images/farmer-tractor-cover.png";
import farmer from "@/assets/images/farmer.png";
import ishamiCover from "@/assets/images/ishami-cover.png";
import hygieneCover from "@/assets/images/hygiene-cover.png";
import SectorNews from "@/components/home-page/SectorNews";
import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

const servicePageData = [
  {
    pathEnd: "hygiene",
    backgroundClass: "bg-[#115AA8]",
    textClass: "text-[#115AA8]",
    heroCoverImage: hygieneCover,
    cardImage: doctor,
    logoImage: fccLogo,
    companyWebsite: "www.fccrwanda.rw",
    companyEmail: "info@fccrwanda.rw",
  },
  {
    pathEnd: "manufacturing",
    backgroundClass: "bg-[#19C374]",
    textClass: "text-[#19C374]",
    heroCoverImage: ishamiCover,
    cardImage: farmer,
    logoImage: ishamiLogo,
    companyWebsite: "www.ishamifactory.rw",
    companyEmail: "info@ishamifactory.rw",
  },
  {
    pathEnd: "agribusiness",
    backgroundClass: "bg-[#12971F]",
    textClass: "text-[#12971F]",
    heroCoverImage: farmerTractor,
    cardImage: farmer,
    logoImage: kezaLogo,
    companyWebsite: "www.kezafarmers.rw",
    companyEmail: "info@kezafarmers.rw",
  },
];

const Page = () => {
  const pathnameChunks = usePathname().split("/").filter(Boolean);
  const lastPathnameChunk = pathnameChunks[pathnameChunks.length - 1].split("-").join(" ");

  const activeData =
    servicePageData.find((data) => data.pathEnd === lastPathnameChunk) || servicePageData[0];

  return (
    <div>
      <Image
        src={activeData.heroCoverImage}
        alt="service sector"
        className="object-cover h-60 w-full"
      />
      <div className="mt-8 md:mt-14">
        <CenterContent>
          <div className="max-w-4xl mx-auto">
            <PageBreadcrumb />
            <p className="mt-11">
              Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus
              fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer
              tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis
              vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel lectus odio
              consectetur sit. Diam scelerisque est odio donec in pharetra enim justo purus.
              Suscipit mauris leo nisl nibh proin amet cum.
            </p>

            <div className="flex flex-col md:flex-row mt-14 gap-5 md:gap-14">
              <Image
                src={activeData.logoImage}
                alt="service sector"
                className="flex-shrink-0 gap-40 w-40 md:w-52"
              />
              <div className="flex flex-col max-w-2xl gap-5">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus
                  fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer
                  tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas
                  convallis vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel
                  lectus odio consectetur sit. Diam scelerisque est odio donec in pharetra enim
                  justo purus. Suscipit mauris leo nisl nibh proin amet cum.
                </p>
                <span>Learn more about Keza Farmers Pride</span>
                <Link className={activeData.textClass} href="https://www.fccrwanda.rw">
                  {activeData.companyWebsite}
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-clip">
            <Image
              src={activeData.cardImage}
              alt="service sector"
              className="object-cover w-full h-72 md:h-full"
            />
            <div
              className={`bg-[#115AA8] text-white p-4 md:p-8 lg:px-12 flex flex-col justify-center ${activeData.backgroundClass}`}
            >
              <h3 className="text-2xl md:text-2xl lg:text-4xl">
                Lorem ipsum dolor sit amet consectetur. Fusce.
              </h3>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus
                fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer.
              </p>
              <div className="mt-8 lg:mt-16 space-y-4">
                <div className="flex gap-5">
                  <FaPhone className="block ml-px text-2xl rotate-90" />
                  <span>Tel: +250 7880 000 | +250 7880 000 </span>
                </div>
                <div className="flex gap-5">
                  <MdMailOutline className="block ml-px text-2xl" />
                  <span>{activeData.companyEmail}</span>
                </div>
                <span className="flex items-center mt-12 gap-3">
                  <FiArrowRightCircle className="text-3xl lg:text-5xl" />
                  Learn more
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 mb-14 md:mb-32">
            <SectorNews />
          </div>
        </CenterContent>
        <ContactCTA />
      </div>
    </div>
  );
};
export default Page;
