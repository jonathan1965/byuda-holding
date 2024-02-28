import cleanAfrica from "@/assets/images/clean-africa.png";
import maizeField from "@/assets/images/maize-field.png";
import norrsken from "@/assets/images/norrsken.png";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import CenterContent from "../layouts/CenterContent";

const sectorNews = [
  {
    id: "2",
    image: cleanAfrica,
    heading: "A Clean Africa.",
    description:
      "Environmental consciousness is taking center stage, cleaning companies in Africa are redefining their role beyond traditional sanitation services. They're becoming key players in fostering a cleaner continent, not only for the benefit of the",
  },
  {
    id: "1",
    image: norrsken,
    heading: "Revolutionizing workspaces",
    description:
      "In the bustling world of startups, where innovation meets chaos, maintaining a clean and organized workspace often takes a back seat. Recognizing the unique needs of the",
  },
  {
    id: "3",
    image: maizeField,
    heading: "Empowering farmers",
    description:
      "Environmental consciousness is taking center stage, cleaning companies in Africa are redefining their role beyond traditional sanitation services. They're becoming key players in fostering a cleaner continent, not only for the benefit of the",
  },
];

type Props = {
  hideTitle?: boolean;
  hiddenCardId?: string;
};

const SectorNews: FC<Props> = ({ hideTitle, hiddenCardId }) => {
  return (
    <CenterContent>
      <div className={`flex w-full ${hiddenCardId ? "justify-start" : "justify-center"}`}>
        <div className="w-full">
          {!hideTitle && (
            <h4 className="text-xl text-center lg:text-left">Portfoilio & Sector News</h4>
          )}
          <div
            className={`flex flex-wrap w-full mt-8 lg:flex-row lg:flex-nowrap gap-16 ${
              hiddenCardId ? "justify-start" : "justify-center items-center"
            }`}
          >
            {sectorNews
              .filter((item) => item.id !== hiddenCardId)
              .map((item, index) => (
                <Link href={`/newsroom/${item.id}`} key={index}>
                  <div className="max-w-[346px] rounded-md overflow-clip">
                    <Image
                      src={item.image}
                      alt="Clean africa"
                      className="object-cover w-full h-60"
                    />
                    <div className="px-6 pt-4 text-white bg-dark-red pb-11 leading-7">
                      <h3 className="text-xl font-medium">{item.heading}</h3>
                      <p className="mt-2 text-[15px] line-clamp-4">{item.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </CenterContent>
  );
};
export default SectorNews;
