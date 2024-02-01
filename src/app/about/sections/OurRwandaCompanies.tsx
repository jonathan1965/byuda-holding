import amtollLogo from "@/assets/icons/amtoll-logo.svg";
import dssLogo from "@/assets/icons/dss-logo.svg";
import fccLogo from "@/assets/icons/fcc-logo.svg";
import ishamiLogo from "@/assets/icons/ishami-logo.svg";
import kezaLogo from "@/assets/icons/keza-logo.svg";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";

const logos = [fccLogo, ishamiLogo, kezaLogo, dssLogo, amtollLogo];

const OurRwandaCompanies = () => {
  return (
    <div className="bg-[#F3F3F3] py-6 lg:py-16">
      <CenterContent>
        <div>
          <h3 className="text-xl">Our Companies in Rwanda</h3>
          <div className="lg:mt-4 grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div className="hidden mt-5 lg:block">
              <p>
                Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus
                fusce amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer
                tincidunt etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas
                convallis vitae dignissim pellentesque. Tellus mauris nullam odio viverra vel lectus
                odio consectetur sit. Diam scelerisque est odio donec in pharetra enim justo purus.
                Suscipit mauris leo nisl nibh proin amet cum.
              </p>
            </div>
            <div className="flex flex-wrap justify-center mt-5 gap-x-10 gap-y-6">
              {logos.map((logo, index) => (
                <div key={index} className="w-48 h-24 p-4 bg-white rounded-lg">
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
