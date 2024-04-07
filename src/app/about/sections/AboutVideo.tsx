import CenterContent from "@/components/layouts/CenterContent";

const AboutVideo = () => {
  return (
    <div className="pt-6 pb-10 bg-white lg:pt-16 lg:pb-10">
      <CenterContent>
        <h4 className="text-2xl font-medium text-dark-red">Our legacy</h4>
        <div className="flex flex-col-reverse items-center mt-6 lg:flex-row gap-10">
          {/* <iframe
            width="1200"
            height="200"
            src="https://www.youtube.com/embed/wOfm9WRFRxA"
            title="ISMAEL LO - AFRICA"
            className="border-none w-full h-60 lg:h-[12.5rem]"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe> */}
          <div className="text-lg">
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
