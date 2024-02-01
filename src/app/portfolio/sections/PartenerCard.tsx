import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

interface Props {
  image: StaticImageData;
}

const PartenerCard: FC<Props> = ({ image }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-14 lg:gap-20">
      <div className="flex items-center justify-center flex-shrink-0 w-40">
        <Image src={image} alt="logo" className="w-full" />
      </div>

      <div className="flex max-w-4xl gap-6">
        <div className="flex-shrink-0 hidden w-px h-full bg-black sm:block"></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce
            amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt
            etiam faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae
            dignissim pellentesque. Tellus mauris nullam.
          </p>
          <span className="flex items-center self-center mt-4 text-dark-red gap-10 lg:gap-3">
            Get to know more about the First Cleaning company
            <FiArrowRightCircle className="text-3xl" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default PartenerCard;
