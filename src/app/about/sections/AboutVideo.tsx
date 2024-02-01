import CenterContent from "@/components/layouts/CenterContent";

const AboutVideo = () => {
  return (
    <div className="pt-6 pb-10 bg-white lg:pt-16 lg:pb-10">
      <CenterContent>
        <h4 className="text-2xl font-medium text-dark-red">Our legacy</h4>
        <div className="flex flex-col-reverse items-center mt-6 lg:flex-row gap-10">
          <iframe
            width="1200"
            height="200"
            src="https://www.youtube.com/embed/wOfm9WRFRxA"
            title="ISMAEL LO - AFRICA"
            className="border-none w-full h-60 lg:h-[12.5rem]"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="text-lg">
            <p>
              Byuda Holdings, is a multifaceted holding company with a passion for nurturing and
              steering businesses across diverse sectors. With a strong foundation in numerous
              service sectors ranging from Hygiene, Agriculture, Skilled labour, Manufacturing, all
              the way to Architectural Interior design.
            </p>
            <p className="mt-5">
              We are at the forefront of creating an ecosystem that thrives on excellence,
              innovation, and sustainability.
            </p>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};
export default AboutVideo;
