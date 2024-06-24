import CenterContent from "../layouts/CenterContent";

const VideoSection = () => {
  return (
    <div className="bg-dark-red-200 py-9 lg:py-16">
      <CenterContent>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-20 items-stretch">
          <div
            className="order-2 text-[13px] md:text-[15px] lg:order-1 leading-[164.6%] pb-5 h-min"
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            <p>
              Byuda Holdings, is a dynamic and diversified holding company at
              the forefront of driving innovation, growth, and sustainability
              across various sectors. Born in 2009 as Byuda Group, our journey
              began with a vision to create a conglomerate that not only excels
              in its individual domains but also contributes significantly to
              the economic and social development of the communities we serve.
            </p>
            <p className="mt-10">
              Established in 2009, Byuda Holdings took its first step into the
              business landscape with the creation of its inaugural subsidiary,
              FCC. This marked the beginning of a journey fueled by passion,
              vision, and a commitment to excellence.
            </p>
          </div>
          <div className="lg:order-2 h-full bg-[#464647] overflow-hidden relative">
            <video
              muted
              autoPlay
              loop
              preload="none"
              width={"100%"}
              className="border-none min-h-full h-full w-full max-h-[300px]  block object-cover lg:absolute"
            >
              <source src="/vid/Byudashortvid.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};
export default VideoSection;
