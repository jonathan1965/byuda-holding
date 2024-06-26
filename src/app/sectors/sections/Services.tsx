import agribussinessCover from "@/assets/images/manufacturingCover-5.png";
import hygieneCover from "@/assets/images/hygieneCover-1.png";
import labourServiceCover from "@/assets/images/labourServiceCover-1.png";
import manufacturingCover from "@/assets/images/ishami-22.png";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";

const services = [
  {
    title: "Hygiene Services",
    href:"/sectors/hygiene",
    coverImage: hygieneCover,
    desciption:
      "Maintaining a clean and healthy workplace is not only a matter of aesthetics but also a crucial factor in promoting the well-being of employees and visitors. ",
    learnMorePath: "hygiene",
  },
  {
    title: "Labour Services",
    coverImage: labourServiceCover,
    href:"/sectors/labour",
    desciption:
      "Dynamic services solution (DSS) is a leading provider of outsourced labour services, dedicated to helping businesses streamline their operations and enhance productivity. ",
    learnMorePath: "labour",
  },
  {
    title: "Agribusiness",
    href:"/sectors/agribusiness",
    coverImage: agribussinessCover,
    desciption:
      "Keza Farmers Pride is a trailblazing force in the agricultural sector with a focus on seamless supply chain of agro-produce from farmers across the country to new markets",
    learnMorePath: "agribusiness",
  },
  {
    title: "Manufacturing",
    href:"/sectors/manufacturing",
    coverImage: manufacturingCover,
    desciption:
      "Ishami factory encompasses various stages of tobacco processing, from cultivation to packaging, ensuring efficiency and precision throughout the production chain.",
    learnMorePath: "manufacturing",
  },
];

const Services = () => {
  return (
    <div className="mt-10 sm:mt-20 md:mt-28 lg:mt-32">
      <CenterContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 h-full md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 sm:gap-y-10">
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="rounded-2xl overflow-clip h-full group cursor-pointer">
              <Image
                src={service.coverImage}
                alt="Hygiene service cover"
                className="object-cover w-full h-52"
              />
              <div className="bg-[#F3F3F3] group-hover:bg-[#911320] group-hover:text-white w-full px-9 py-5 h-full flex flex-col items-center gap-5 rounded-b-3xl">
                <span className="text-xl text-center">{service.title}</span>
                <p className=" text-sm text-center">{service.desciption}</p>
                <a
                  href={`/sectors/${service.learnMorePath}`}
                  className="text-[#911320] group-hover:text-white text-center"
                >
                  <FiArrowRightCircle className="text-3xl" />
                  </a>
              </div>
            </Link>
          ))}
        </div>
      </CenterContent>
    </div>
  );
};
export default Services;
