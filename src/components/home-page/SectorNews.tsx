import cleanAfrica from "@/assets/images/clean-africa.png";
import maizeField from "@/assets/images/maize-field.png";
import norrsken from "@/assets/images/norrsken.png";
import Image from "next/image";
import CenterContent from "../layouts/CenterContent";

const sectorNews = [
  {
    image: cleanAfrica,
    heading: "A Clean Africa.",
    description:
      " Lorem ipsum dolor sit amet consectetur. Tincidunt metus sapien neque eu aliquet cursus urna. Et pellentesque nam lectus imperdiet suspendisse augue nisi id. Est quis neque vitae.",
  },
  {
    image: norrsken,
    heading: "Decluttering Tech.",
    description:
      " Lorem ipsum dolor sit amet consectetur. Tincidunt metus sapien neque eu aliquet cursus urna. Et pellentesque nam lectus imperdiet suspendisse augue nisi id. Est quis neque vitae.",
  },
  {
    image: maizeField,
    heading: "A Clean Africa.",
    description:
      " Lorem ipsum dolor sit amet consectetur. Tincidunt metus sapien neque eu aliquet cursus urna. Et pellentesque nam lectus imperdiet suspendisse augue nisi id. Est quis neque vitae.",
  },
];

const SectorNews = () => {
  return (
    <CenterContent>
      <div className="flex justify-center w-full">
        <div className="w-full">
          <h4 className="text-xl text-center lg:text-left">Portfoilio & Sector News</h4>
          <div className="flex flex-wrap items-center justify-center w-full mt-8 lg:flex-row lg:flex-nowrap gap-16">
            {sectorNews.map((item, index) => (
              <div className="max-w-[346px] rounded-md overflow-clip" key={index}>
                <Image src={item.image} alt="Clean africa" className="object-cover w-full h-60" />
                <div className="px-6 pt-4 text-white bg-dark-red pb-11 leading-7">
                  <h3 className="text-xl font-medium">{item.heading}</h3>
                  <p className="mt-2 text-[15px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CenterContent>
  );
};
export default SectorNews;
