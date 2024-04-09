import amtollLogo from "@/assets/icons/amtoll-logo.svg";
import dssLogo from "@/assets/icons/dss-logo.svg";
import fccLogo from "@/assets/icons/fcc-logo.svg";
import ishamiLogo from "@/assets/icons/ishami-logo.svg";
import kezaLogo from "@/assets/icons/keza-logo.svg";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";

const logos = [fccLogo, ishamiLogo, kezaLogo, dssLogo];

const OurRwandaCompanies = () => {
  return (
    <div className="bg-[#F3F3F3] py-6 lg:py-16">
      <CenterContent>
        <div>
          <h3 className="text-xl md:text-[25px]">Our subsidiaries in Rwanda</h3>
          <div className="lg:mt-4 grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div className="hidden mt-5 lg:block">
              <p className="font-poppins text-sm leading-[1.8]">
                Since our inception in 2009, Byuda Holdings has woven a legacy of excellence,
                innovation, and social responsibility. Rooted in a vision to create a positive
                impact, our journey began with the birth of our first subsidiary, FCC (The First
                Cleaning Company). Over the years, we&apos;ve diversified our portfolio, embracing
                sectors that redefine industries and uplift communities.
              </p>
            </div>
            <div className="grid justify-center min-[324px]:grid-cols-[fit-content(100%)_fit-content(100%)] grid-col sm:flex flex-wrap sm:justify-center mt-5 gap-x-8 sm:gap-x-10 gap-y-6 relative md:-top-16">
              {logos.map((logo, index) => (
                <div key={index} className="w-[134px] min-[360px]:w-36 sm:w-48 h-24 p-4 bg-white rounded-lg">
                  <Image src={logo} alt="hello" className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};
export default OurRwandaCompanies;
