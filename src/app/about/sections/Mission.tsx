import CenterContent from "@/components/layouts/CenterContent";

const companyInfo = [
  {
    heading: "Mission",
    description:
      "Our mission is to lead and inspire positive change in the business landscape by nurturing innovative ventures across diverse industries, consistently delivering value to our economic uphold.",
  },
  {
    heading: "Vision",
    description:
      "At Byuda Holdings, we envision a future where excellence, integrity, and social responsibility converge to foster a sustainable and prosperous Africa.",
  },
  {
    heading: "Sustainability",
    description:
      "We want to prioritize eco-friendly practices, champion social responsibility, and innovate for a greener future.",
  },
];

const Mission = () => {
  return (
    <div className="py-6 bg-white lg:py-12">
      <CenterContent>
        <div className="flex overflow-scroll text-white grid-cols-3 gap-7">
          {companyInfo.map((info, index) => (
            <div
              className="bg-[#911320] flex-shrink-0 w-full sm:w-[450px] py-6 pl-7 pr-10 rounded-xl"
              key={index}
            >
              <span className="text-2xl">{info.heading}</span>
              <p className="mt-6 text-white/75">{info.description}</p>
            </div>
          ))}
        </div>
      </CenterContent>
    </div>
  );
};
export default Mission;
