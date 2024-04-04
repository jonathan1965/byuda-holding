import CenterContent from "../layouts/CenterContent";

const VideoSection = () => {
  return (
    <div className="bg-dark-red-200 py-9 lg:py-16">
      <CenterContent>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-20">
          <div className="order-2 lg:text-[15px] lg:order-1 leading-[24.69px]" style={{
            textAlign:"justify",
            textJustify:"inter-word"
          }}>
            <p>
              Byuda Holdings, is a dynamic and diversified holding company at the forefront of
              driving innovation, growth, and sustainability across various sectors. Born in 2009 as
              Byuda Group, our journey began with a vision to create a conglomerate that not only
              excels in its individual domains but also contributes significantly to the economic
              and social development of the communities we serve.
            </p>
            <p className="mt-10">
              Established in 2009, Byuda Holdings took its first step into the business landscape
              with the creation of its inaugural subsidiary, FCC. This marked the beginning of a
              journey fueled by passion, vision, and a commitment to excellence.
            </p>
          </div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oeOdHMPhZaQ"
            title="ISMAEL LO - AFRICA"
            className="border-none lg:order-2"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </CenterContent>
    </div>
  );
};
export default VideoSection;
