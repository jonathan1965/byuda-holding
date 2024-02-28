"use client";
import dssLogo from "@/assets/icons/dss-logo.svg";
import fccLogo from "@/assets/icons/fcc-logo.svg";
import ishamiLogo from "@/assets/icons/ishami-logo.svg";
import kezaLogo from "@/assets/icons/keza-logo.svg";
import doctor from "@/assets/images/doctor-image.png";
import farmerTractor from "@/assets/images/farmer-tractor-cover.png";
import farmer from "@/assets/images/farmer.png";
import hygieneCover from "@/assets/images/hygiene-cover.png";
import ishamiCover from "@/assets/images/ishami-cover.png";
import waiterCover from "@/assets/images/waiter-cover.png";
import waiter from "@/assets/images/waiter.png";
import SectorNews from "@/components/home-page/SectorNews";
import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

interface CompanyInfo {
  pathEnd: string;
  backgroundClass: string;
  textClass: string;
  heroCoverImage: StaticImageData;
  heroDescription: string;
  cardImage: StaticImageData;
  logoImage: StaticImageData;
  companyWebsite: string;
  companyEmail: string;
  cardTitle: string;
  companyDescription: string;
}

const servicePageData: CompanyInfo[] = [
  {
    pathEnd: "hygiene",
    backgroundClass: "bg-[#115AA8]",
    heroDescription:
      "Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel lectus odio consectetur sit. Diam scelerisque est odio donec in pharetra enim justo purus. Suscipit mauris leo nisl nibh proin amet cum.",
    textClass: "text-[#115AA8]",
    heroCoverImage: hygieneCover,
    cardImage: doctor,
    logoImage: fccLogo,
    companyWebsite: "www.fccrwanda.rw",
    cardTitle: "Unlock Your Business Potential",
    companyEmail: "info@fccrwanda.rw",
    companyDescription:
      "Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel lectus odio consectetur sit. Diam scelerisque est odio donec in pharetra enim justo purus. Suscipit mauris leo nisl nibh proin amet cum.",
  },
  {
    pathEnd: "manufacturing",
    backgroundClass: "bg-[#19C374]",
    textClass: "text-[#19C374]",
    heroDescription:
      "Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel lectus odio consectetur sit. Diam scelerisque est odio donec in pharetra enim justo purus. Suscipit mauris leo nisl nibh proin amet cum.",
    heroCoverImage: ishamiCover,
    cardImage: farmer,
    logoImage: ishamiLogo,
    companyWebsite: "www.ishamifactory.rw",
    companyEmail: "info@ishamifactory.rw",
    cardTitle: "Unlock Your Business Potential",
    companyDescription:
      "Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel lectus odio consectetur sit. Diam scelerisque est odio donec in pharetra enim justo purus. Suscipit mauris leo nisl nibh proin amet cum.",
  },
  {
    pathEnd: "agribusiness",
    backgroundClass: "bg-[#12971F]",
    textClass: "text-[#12971F]",
    heroDescription:
      "Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel lectus odio consectetur sit. Diam scelerisque est odio donec in pharetra enim justo purus. Suscipit mauris leo nisl nibh proin amet cum.",
    heroCoverImage: farmerTractor,
    cardImage: farmer,
    logoImage: kezaLogo,
    companyWebsite: "www.kezafarmers.rw",
    companyEmail: "info@kezafarmers.rw",
    cardTitle: "From farms to your door step, Keza delivers.",
    companyDescription:
      "Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel lectus odio consectetur sit. Diam scelerisque est odio donec in pharetra enim justo purus. Suscipit mauris leo nisl nibh proin amet cum.",
  },
  {
    pathEnd: "labour",
    backgroundClass: "bg-[#9D1853]",
    textClass: "text-[#9D1853]",
    heroCoverImage: waiterCover,
    heroDescription:
      "Byuda holdings prides its self in Transforming the lives of the population through Job creation by providing high-quality outsourced labor services, contributing to job creation and fostering economic transformation. Through its subsidiary DSS, the company strives to enhance productivity and efficiency, enabling organizations to focus on their core competencies while handling the workforce management aspects with precision and expertise.",
    cardImage: waiter,
    logoImage: dssLogo,
    companyWebsite: "www.dss.rw",
    companyEmail: "info@dss.rw",
    cardTitle: "Unlock Your Business Potential",
    companyDescription:
      "Dynamic services solution (DSS) is a leading provider of outsourced labor services, dedicated to helping businesses streamline their operations and enhance productivity. Established in 2013, the company has grown into a trusted partner for organizations seeking cost-effective and efficient solutions to their staffing needs.",
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
        className="object-cover w-full h-60"
      />
      <div className="mt-8 md:mt-14">
        <CenterContent>
          <div className="max-w-4xl mx-auto">
            <PageBreadcrumb />
            <p className="mt-11">{activeData.heroDescription}</p>

            <div className="flex flex-col md:flex-row mt-14 gap-5 md:gap-14">
              <Image
                src={activeData.logoImage}
                alt="service sector"
                className="flex-shrink-0 w-40 gap-40 md:w-52"
              />
              <div className="flex flex-col max-w-2xl gap-5">
                <p className="text-justify">{activeData.companyDescription}</p>
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
              <h3 className="text-2xl lg:text-5xl">{activeData.cardTitle}</h3>
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
