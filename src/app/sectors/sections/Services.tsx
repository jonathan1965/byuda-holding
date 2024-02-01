import agribussinessCover from "@/assets/images/agribusiness-cover.png";
import hygieneCover from "@/assets/images/hygiene-service-cover.png";
import labourServiceCover from "@/assets/images/labour-service-cover.png";
import manufacturingCover from "@/assets/images/manufacturing-cover.png";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";

const services = [
  {
    title: "Hygiene Services",
    coverImage: hygieneCover,
    desciption:
      "Lorem ipsum dolor sit amet consectetur. Est sit non in convallis. Imperdiet cum diam dignissim egestas egestas varius.",
    learnMorePath: "hygiene",
  },
  {
    title: "Labour Services",
    coverImage: labourServiceCover,
    desciption:
      "Lorem ipsum dolor sit amet consectetur. Est sit non in convallis. Imperdiet cum diam dignissim egestas egestas varius.",
    learnMorePath: "labour",
  },
  {
    title: "Agribusiness",
    coverImage: agribussinessCover,
    desciption:
      "Lorem ipsum dolor sit amet consectetur. Est sit non in convallis. Imperdiet cum diam dignissim egestas egestas varius.",
    learnMorePath: "agribusiness",
  },
  {
    title: "Manufacturing",
    coverImage: manufacturingCover,
    desciption:
      "Lorem ipsum dolor sit amet consectetur. Est sit non in convallis. Imperdiet cum diam dignissim egestas egestas varius.",
    learnMorePath: "manufacturing",
  },
];

const Services = () => {
  return (
    <div className="mt-10 sm:mt-20 md:mt-28 lg:mt-32">
      <CenterContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 sm:gap-y-10">
          {services.map((service, index) => (
            <div key={index} className="rounded-2xl overflow-clip">
              <Image
                src={service.coverImage}
                alt="Hygiene service cover"
                className="object-cover w-full h-52"
              />
              <div className="bg-[#F3F3F3] w-full px-9 py-5 flex flex-col gap-5 rounded-b-3xl">
                <span className="text-xl">{service.title}</span>
                <p className="text-justify">{service.desciption}</p>
                <Link
                  href={`/sectors/${service.learnMorePath}`}
                  className="flex items-center self-center text-dark-red gap-3"
                >
                  Learn more <FiArrowRightCircle className="text-3xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CenterContent>
    </div>
  );
};
export default Services;
