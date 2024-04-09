import CenterContent from "@/components/layouts/CenterContent";
const AboutVideo = () => {
  return (
    <div className="md:pt-6 pb-10 bg-white lg:pt-12 lg:pb-10">
      <CenterContent>
        <h4 className="text-2xl font-medium text-dark-red md:hidden">Our legacy</h4>
        <div className="flex flex-col-reverse items-center mt-4 md:mt-6 md:flex-row gap-10">
        <div className=" relative w-full md:w-[324px] h-[176px]">
            <video
              muted
              autoPlay
              loop
              width={'100%'}
              preload="none"
              className="border-none min-h-full h-full w-full  block object-cover absolute top-0 right-0 left-0 bottom-0"

            >
              <source src="/vid/Byudashortvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-[13px] md:text-lg flex-1">
            <p>
              Byuda Holdings, is a dynamic and diversified holding company at the forefront of
              driving innovation, growth, and sustainability across various sectors. Born in 2009 as
              Byuda Group, our journey began with a vision to create a conglomerate that not only
              excels in its individual domains but also contributes significantly to the economic
              and social development of the communities we serve.
            </p>
            <p className="mt-5">
              Established in 2009, Byuda Holdings took its first step into the business landscape
              with the creation of its inaugural subsidiary, FCC. This marked the beginning of a
              journey fueled by passion, vision, and a commitment to excellence.
            </p>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};
export default AboutVideo;
