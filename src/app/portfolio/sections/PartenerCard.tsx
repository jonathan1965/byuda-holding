import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

interface Props {
  image: StaticImageData;
  description: string;
  link:any
}

const PartenerCard: FC<Props> = ({ image, description, link }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-14 lg:gap-20">
      <div className="flex items-center justify-center flex-shrink-0 w-40">
        <Image src={image} alt="logo" className="w-full contrast-0 grayscale-[100%] brightness-200 hover:contrast-100 hover:grayscale-0 hover:brightness-100 transition-all duration-300 ease-in-out  " />
      </div>

      <div className="flex max-w-4xl gap-6">
        <div className="flex-shrink-0 hidden w-px h-full bg-black sm:block"></div>
        <div>
          <p className="text-sm">{description}</p>
          <a href={link} className="flex items-center self-center mt-4 text-dark-red gap-10 lg:gap-3">
            Get to know more about the First Cleaning company
            <FiArrowRightCircle className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default PartenerCard;
