"use client";
import CenterContent from "@/components/layouts/CenterContent";
import Link from "next/link";
import { FC, Fragment } from "react";
import dssLogo from "@/assets/icons/dss-logo.svg";
import fccLogo from "@/assets/icons/fcc-logo.svg";
import ishamiLogo from "@/assets/icons/ishami-logo.svg";
import kezaLogo from "@/assets/icons/keza-logo.svg";
import Image from "next/image";
import ContactCTA from "@/components/shared-sections/Contact-CTA";

const logos = [fccLogo, ishamiLogo, kezaLogo, dssLogo];


const Mob = () => {
  return (
    <>
    <CenterContent>
    <div className="mt-10">
      <div className="flex gap-5">
      <div className="flex-shrink-0 w-1 bg-black"></div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap uppercase gap-2">
          <Link href="/">Home</Link>
            <Fragment>
              <span>|</span>
              <Link href={`/Portfolio`} className="uppercase">
                 PORTFOLIO
              </Link>
            </Fragment>
        </div>
        <span className="text-xl capitalize md:text-3xl">
          Portfolio
        </span>
      </div>
      </div>
      <div className="my-4">
        <p className="font-[400] mt-8"> 
        Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel lectus odio consectetur sit. Diam scelerisque est odio donec in pharetra enim justo purus. Suscipit mauris leo nisl nibh proin amet cum.
        </p>
      </div>

      <div className="flex items-center justify-center flex-col gap-4 my-10">
      {logos.map((logo, index) => (
                <div key={index} className="w-48 h-24 p-4 bg-white rounded-lg">
                  <Image src={logo} alt="hello" className="w-full h-full" />
                </div>
      ))}
      </div>
    </div>
    </CenterContent>
    <div className="bg-[#F1F1F1]">
      <CenterContent>
        <div className="flex flex-col items-center justify-center py-20 text-center lg:flex-row gap-8">
          <span className="font-light">Help us get your queries to the right place</span>
          <button className="flex justify-center w-4/5 px-20 py-3 text-center uppercase border sm:w-auto bg-[#FF656D] hover:border-transparent text-white rounded-full">
            Contact us
          </button>
        </div>
      </CenterContent>
    </div>
    
    </>
  );
};
export default Mob;
