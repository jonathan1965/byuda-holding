import chairmanImage from "@/assets/images/chairman.png";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";

const ChairmanMessage = () => {
  return (
    <div className="py-8 bg-white lg:py-12">
      <CenterContent>
        <div>
          <h4 className="text-xl text-dark-red">Message from our Chairman</h4>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            <Image src={chairmanImage} alt="Chairman portrait" className="object-cover object-top w-full h-64" />
            <div>
              <p>
                Byuda Holdings, is a multifaceted holding company with a passion for nurturing and
                steering businesses across diverse sectors. With a strong foundation in numerous
                service sectors ranging from Hygiene, Agriculture, Skilled labour, Manufacturing,
                all the way to Architectural Interior design.
              </p>
              <p className="mt-4 lg:mt-8">
                We are at the forefront of creating an ecosystem that thrives on excellence,
                innovation, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};
export default ChairmanMessage;
