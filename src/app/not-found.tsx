import byundaHoldingLogo from "@/assets/icons/byuda-holding-logo-white.svg";
import notFoundIcon from "@/assets/icons/not-found-icon.svg";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Custom404 = () => {
  return (
    <div className="bg-dark-red fixed h-screen z-[1000] flex flex-col top-0 w-full">
      <CenterContent>
        <nav className="w-full flex  items-center justify-between text-white py-10">
          <Link href="/">
            <Image
              src={byundaHoldingLogo}
              alt="Byumba holding logo icon"
              className="w-32 md:w-40"
              priority
            />
          </Link>
          <span className="uppercase">Contact</span>
        </nav>
      </CenterContent>
      <div className="flex flex-col md:flex-row flex-1 w-full items-center justify-center gap-10 px-4 text-center md:text-left">
        <Link href="/" className="w-fit">
          <Image
            src={notFoundIcon}
            alt="Byumba holding logo icon"
            className="w-56 sm:w-80"
            priority
          />
        </Link>
        <div className="text-white">
          <h5 className="text-[#FF656D] font-medium text-xl">WEBSITE UNDER CONSTRUCTION!</h5>
          <p className="mt-3">We are currently working on something awesome.</p>
          <p>We will be back very soon.</p>
          <div className="flex flex-col items-center md:flex-row mt-4 gap-2 md:gap-8">
            <div className="flex gap-3 items-center">
              <FaPhone className="flex-shrink-0 block ml-px text-xl rotate-90 text-[#FF656D]" />
              <span>Tel: +250 7880 000X</span>
            </div>
            <div className="flex gap-3 items-center">
              <MdMailOutline className="flex-shrink-0 block ml-px text-2xl text-[#FF656D]" />
              <span className="block">info@byudaholdings.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Custom404;
