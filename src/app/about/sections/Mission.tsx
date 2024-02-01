import CenterContent from "@/components/layouts/CenterContent";

const companyInfo = [
  {
    heading: "Mission",
    description:
      "Byuda Holdings, is a multifaceted holding company with a passion for nurturing and steering businesses across diverse sectors.",
  },
  {
    heading: "Vision",
    description:
      "Byuda Holdings, is a multifaceted holding company with a passion for nurturing and steering businesses across diverse sectors.",
  },
  {
    heading: "Sustainability",
    description:
      "Byuda Holdings, is a multifaceted holding company with a passion for nurturing and steering businesses across diverse sectors.",
  },
];

const Mission = () => {
  return (
    <div className="py-6 bg-white lg:py-12">
      <CenterContent>
        <div className="flex overflow-scroll text-white grid-cols-3 gap-7">
          {companyInfo.map((info, index) => (
            <div className="bg-[#911320] flex-shrink-0 w-full sm:w-[450px] py-6 pl-7 pr-10 rounded-xl" key={index}>
              <span className="text-2xl">{info.heading}</span>
              <p className="mt-6">{info.description}</p>
            </div>
          ))}
        </div>
      </CenterContent>
    </div>
  );
};
export default Mission;
