import byundaHoldingLogo from "@/assets/icons/byuda-holding-logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  "about",
  "sectors",
  "portfolio",
  "newsroom",
  "careers",
  "contact",
];
const sectors = [
  "hygiene Services",
  "agribusiness",
  "manufacturing",
];
const parteners = [
  "FCC",
  "Keza Farmers's pride",
  "Ishami Foundation",
  "Amtoll",
  "DSS",
];

const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute right-0 hidden w-3/5 h-full md:block bg-dark-red"></div>
      <div className="hidden md:block absolute bg-[#7F0D1D] h-full w-[45%] left-0"></div>

      <div className="w-full lg:w-11/12 max-w-[88.5rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-[#7F0D1D] z-10 py-8 lg:py-14 w-full">
            <div className="flex flex-col items-center max-w-sm text-white lg:items-start lg:gap-10">
              <Image
                src={byundaHoldingLogo}
                alt="Byunda holding white logo"
                className="h-14 relative -left-[70px] sm:-left-[22px]"
              />
              <p className="hidden lg:block">
                Byuda Holdings, is a dynamic and diversified holding company at
                the forefront of driving innovation, growth, and sustainability
                across various sectors to contribute significantly to the
                economic and social development of the local communities.
              </p>
              <span className="hidden lg:block">
                Byuda Holdings © All rights reserved. 2024
              </span>
            </div>
          </div>
          <div className="lg:col-span-2 bg-dark-red w-full z-10 text-[#FFF3F5] px-[5%] py-14 lg:pl-24">
            <div className=" grid grid-cols-2 sm:gap-0 place-content-end sm:items-start sm:flex flex-wrap justify-between w-full gap-y-10">
              <ul className="flex flex-col w-48 gap-3">
                <li className="mb-1 font-medium text-[14px] md:text-[15px]">
                  Quick links
                </li>
                {quickLinks.map((link, index) => (
                  <li
                    key={index}
                    className="capitalize text-[14px] md:text-[15px]"
                  >
                    <Link href={link}> {link}</Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col w-48 gap-3">
                <li className="mb-1 font-medium text-[14px] md:text-[15px]">
                  Sectors
                </li>
                {sectors.map((sector, index) => (
                  <li
                    key={index}
                    className="capitalize text-[14px] md:text-[15px]"
                  >
                    <Link href={`sectors/${sector.split(" ").join("-")}`}>
                      {" "}
                      {sector}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col w-48 gap-3">
                <li className="mb-1 font-medium text-[14px] md:text-[15px]">
                  Portfolio
                </li>
                {parteners.map((link, index) => (
                  <li
                    key={index}
                    className="capitalize text-[14px] md:text-[15px]"
                  >
                    <Link href="#"> {link}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 w-48 text-[#FF656D] text-3xl">
                <h4 className="font-medium text-base text-[#FFF3F5] text-[14px] md:text-[15px]">
                  Socials
                </h4>
                <ul className="flex sm:flex-row flex-col flex-wrap gap-6">
                  <li>
                    <FaTwitter className="w-6 h-6" />
                  </li>
                  <li>
                    <FaInstagramSquare className="w-6 h-6" />
                  </li>
                  <li>
                    <FaFacebookF className="w-6 h-6" />
                  </li>
                  <li>
                    <FaWhatsapp className="w-6 h-6" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
