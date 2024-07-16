"use client";
import dssLogo from "@/assets/icons/dss-logo.svg";
import fccLogo from "@/assets/icons/fcc-logo.svg";
import ishamiLogo from "@/assets/icons/ishami-logo.svg";
import kezaLogo from "@/assets/icons/loggo.svg";
import doctor from "@/assets/images/fffc.png";
import farmerTractor from "@/assets/images/farmer-tractor-cover.png";
import farmer from "@/assets/images/imagegg.png";
import mammmm from "@/assets/images/image--11.png";
import hygieneCover from "@/assets/images/hygiene-cover.png";
import ishamiCover from "@/assets/images/jjjajj.png";
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
  pag:string;
  learn:string;
  cardTitle: string;
  companyDescription: string;
}

const servicePageData: CompanyInfo[] = [
  {
    pathEnd: "hygiene",
    backgroundClass: "bg-[#115AA8]",
    heroDescription:
      "Maintaining a clean and healthy workplace is not only a matter of aesthetics but also a crucial factor in promoting the well-being of employees and visitors. As one of the sectors invested in by Byuda Holdings, Hygiene services for companies encompass a range of activities aimed at creating and sustaining a clean, safe, and healthy environment.",
    textClass: "text-[#115AA8]",
    heroCoverImage: hygieneCover,
    cardImage: doctor,
    logoImage: fccLogo,
    companyWebsite: "www.fccrwanda.rw",
    cardTitle: "Ready to experience the magic?",
    pag:"Let FCC be your cleaning wizardry partner. Unleash the magic, revel in the sparkle, and let your space become a testament to the enchantment we bring. ",
    learn:"Learn more about the First cleaning company (FCC)",
    companyEmail: "info@fccrwanda.rw",
    companyDescription:
      "First Cleaning Company ltd (FCC) is the leading provider of meticulous cleaning services in Rwanda. Specializing in residential, commercial, and specialized cleaning, our team is dedicated to delivering excellence in cleanliness. Impeccable standards are maintained through the use of industry-leading practices and environmentally conscious products. Spaces are transformed into pristine environments, prioritizing health and hygiene.",
  },
  {
    pathEnd: "manufacturing",
    backgroundClass: "bg-[#19C374]",
    textClass: "text-[#19C374]",
    heroDescription:
      "Byuda Holdings Group recognized the potential within the tobacco processing sector as a robust and globally significant industry. The company therefore strategically invested in a manufacturing plant dedicated to the industry itself, demonstrating its commitment to sustainable growth and profitability.",
    heroCoverImage: ishamiCover,
    cardImage: mammmm,
    logoImage: ishamiLogo,
    companyWebsite: "www.ishamifactory.rw",
    companyEmail: "info@ishamifactory.rw",
    pag:"As a manufacturer of tobacco products, we take our social and environmental responsibilities seriously. We are committed supporters of effective safeguards for the our communities. Minimizing our environmental impact along our value chain, with a focus on climate and nature.",
    learn:"Learn more about Keza Farmers Pride",
    cardTitle: "Responsibility – People & Planet.",
    companyDescription:
      "Located in a strategic industrial zone, Ishami Factory is equipped with cutting-edge technology and adheres to the highest industry standards for quality, safety and Environment. The facility encompasses various stages of tobacco processing, from cultivation to packaging, ensuring efficiency and precision throughout the production chain. The factory also deals in Raw material Exports globally.",
  },
  {
    pathEnd: "agribusiness",
    backgroundClass: "bg-[#12971F]",
    textClass: "text-[#12971F]",
    heroDescription:
      "In an era where farmers often face challenges in reaching markets and securing fair prices, Byuda Holdings is breaking down barriers. By establishing direct connections between farmers and markets, through its subsidiary Keza farmers pride, the company ensures that farmers receive fair and transparent pricing. This move eradicates the need for intermediaries, empowering farmers to negotiate better deals and improving their economic prospects.",
    heroCoverImage: farmerTractor,
    cardImage: farmer,
    logoImage: kezaLogo,
    pag:"Freshness meets purpose. We source directly from farmers, ensuring premium quality produce delivered to your doorstep. Sustainable, innovative, and community-driven.",
    learn:"Learn more about Keza Farmers Pride",
    companyWebsite: "www.kezafarmers.rw",
    companyEmail: "info@kezafarmers.rw",
    cardTitle: "From farms to your door step, Keza delivers.",
    companyDescription:
      "Keza Farmers Pride ldt, is a trailblazing force in the agricultural sector that has been a beacon of change since its establishment with a focus on seamless supply chain management of agro-produce, The company has carved a niche for itself by championing a business model that not only prioritizes profitability but, more importantly, places a strong emphasis on the welfare and empowerment of farmers.",
  },
  {
    pathEnd: "dss",
    backgroundClass: "bg-[#9D1853]",
    textClass: "text-[#9D1853]",
    heroCoverImage: waiterCover,
    heroDescription:
      "Byuda holdings prides its self in Transforming the lives of the population through Job creation by providing high-quality outsourced labor services, contributing to job creation and fostering economic transformation. Through its subsidiary DSS, the company strives to enhance productivity and efficiency, enabling organizations to focus on their core competencies while handling the workforce management aspects with precision and expertise.",
    cardImage: waiter,
    logoImage: dssLogo,
    pag:"We are not just streamlining the local workforce – we are contributing to job creation and fostering economic transformation. Join us in building a brighter future for businesses and communities alike!",
    learn:"Learn more about Dynamic services solution",
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
                className="flex-shrink-0 w-40 gap-40 md:w-52 object-contain"
              />
              <div className="flex flex-col max-w-2xl gap-5">
                <p className="text-justify">{activeData.companyDescription}</p>
                <span>{activeData.learn}</span>
                <Link className={activeData.textClass} href={`https://${activeData.companyWebsite}`}>
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
                {activeData.pag}
              </p>
              <div className="mt-8 lg:mt-16 space-y-4">
                <div className="flex gap-5">
                  <FaPhone className="block ml-px text-2xl rotate-90" />
                  <a href="tel:+250785129699">+250 785 129 699 </a>
                </div>
                <div className="flex gap-5">
                  <MdMailOutline className="block ml-px text-2xl" />
                  <span>{activeData.companyEmail}</span>
                </div>
                <a href={`https://${activeData.companyWebsite}`} className="flex items-center !mt-16 gap-3">
                  <FiArrowRightCircle className="text-2xl lg:text-4xl" />
                  Learn more
                </a>
              </div>
            </div>
          </div>

        </CenterContent>
        <div className="mt-10 mb-24">
        <SectorNews />
      </div>
        <ContactCTA />
      </div>
    </div>
  );
};
export default Page;
