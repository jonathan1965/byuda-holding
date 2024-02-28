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
            <div className="h-72">
              <Image
                src={chairmanImage}
                alt="Chairman portrait"
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <p>
                We believe in more than just business; we believe in creating a positive impact on
                the world. From our first steps with FCC to the establishment of our diverse
                subsidiaries, each milestone reflects our dedication to excellence.
              </p>
              <p className="mt-4 lg:mt-8">
                As we navigate the future, our focus remains on fostering innovation, embracing
                sustainability, and making a meaningful difference in the lives of those we touch.
                Together, let&apos;s continue to build a legacy of progress, integrity, and shared
                success.
              </p>
              <div className="flex flex-col mt-4 lg:mt-14">
                <span className="text-dark-red">Mr. David Byuzura</span>
                <span>Founder and Chairman, Byuda Holdings</span>
              </div>
            </div>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};
export default ChairmanMessage;
