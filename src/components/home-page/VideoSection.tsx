import CenterContent from "../layouts/CenterContent";

const VideoSection = () => {
  return (
    <div className="bg-dark-red-200 py-9 lg:py-16">
      <CenterContent>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-20">
          <div className="order-2 lg:text-lg lg:order-1">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tincidunt metus sapien neque eu aliquet cursus
              urna. Et pellentesque nam lectus imperdiet suspendisse augue nisi id. Est quis neque
              vitae vehicula amet. Mi at sit tristique suspendisse habitant augue aliquam tellus.
              Urna elit mauris quis risus etiam libero volutpat odio etiam. Turpis viverra dignissim
              risus sed odio.
            </p>
            <p className="mt-5">
              Mi at sit tristique suspendisse habitant augue aliquam tellus. Urna elit mauris quis
              risus etiam libero volutpat odio etiam. Turpis viverra dignissim risus sed odio.
            </p>
          </div>
          <iframe
            width="100%"
            height="300"
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
