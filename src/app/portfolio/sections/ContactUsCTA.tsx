import fccLogo from "@/assets/icons/fcc-logo.svg";
import contactUsBg from "@/assets/images/contact-us-bg.png";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";

const ContactUsCTA = () => {
  return (
    <div className="relative w-full bg-black">
      <div className="absolute z-10 w-full top-1/2 -translate-y-1/2">
        <CenterContent>
          <div className="flex flex-col-reverse justify-between h-full text-white gap-6 lg:flex-row lg:items-center">
            <div className="lg:max-w-[440px]">
              <p>
                We care about the planet as much as we care about your space. Our potions are
                eco-friendly, ensuring a sparkling clean without harming the environment. A win-win
                for you and Mother Nature!
              </p>
              <button className="flex justify-center w-4/5 px-20 py-3 text-center uppercase border border-white mt-9 sm:w-auto rounded-2xl lg:rounded-3xl">
                Contact us
              </button>
            </div>
            <Image src={fccLogo} alt="fcc logo" className="w-32 sm:w-40 lg:w-52" />
          </div>
        </CenterContent>
      </div>

      <Image
        src={contactUsBg}
        alt="Contact us background"
        className="object-cover w-full opacity-90 h-96"
      />
    </div>
  );
};
export default ContactUsCTA;
