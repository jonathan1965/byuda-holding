import peopleInvest from "@/assets/images/people-invest.png";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import Hero from "./sections/Hero";
import Link from 'next/link'

const pages = () => {
  return (
    <div>
      <Hero />
      <CenterContent>
        <div className="mt-7"></div>
        <h2 className="text-2xl font-medium font-inter">Vacancies.</h2>
        <div className="flex flex-col mt-8 sm:flex-row gap-16">
          {/* <div className="flex flex-col gap-2 w-44">
            <span>Logistics Officer</span>
            <span>Positions : 2</span>
            <span>Deadline: 12/12/2026</span>
            <button className="w-full bg-[#911320] py-1 rounded-lg mt-2 text-white">
              Apply now
            </button>
          </div>
          <div className="flex flex-col gap-2 w-44">
            <span>Logistics Officer</span>
            <span>Positions : 2</span>
            <span>Deadline: 12/12/2026</span>
            <button className="w-full bg-[#911320] py-1 rounded-lg mt-2 text-white">
              Apply now
            </button>
          </div> */}
          <h4 className="md:mt-20 md:mb-20">NO VACANCIES AVAILABLE . PLEASE BE ON A LOOK OUT SOON</h4>
        </div>

        <div className="mt-10 mb-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-clip">
          <Image
            src={peopleInvest}
            alt="People invest"
            className="object-cover w-full h-52 md:h-60"
          />
          <div className="bg-[#A5A5A5] font-inter flex flex-col justify-center text-white px-5 py-5 md:py-0">
            <h5 className="text-2xl">Investing in our people</h5>
            <p className="max-w-lg mt-4">
              Investing in our people We emphasize continuous development and skill building to
              drive performance.
            </p>
            <Link href={"/about"} className="flex items-center mt-4 text-dark-red gap-3">
              <FiArrowRightCircle className="text-4xl" />
              Learn more about our legacy
            </Link>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};
export default pages;
