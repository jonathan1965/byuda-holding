import dssLogoBw from "@/assets/icons/dss-logo-bw.svg";
import fccLogoBw from "@/assets/icons/fcc-logo-bw.svg";
import kezaLogoBw from "@/assets/icons/keza-logo-bw.svg";
import shamiLogoBw from "@/assets/icons/shami-logo-bw.svg";
import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import ContactUsCTA from "./sections/ContactUsCTA";
import PartenerCard from "./sections/PartenerCard";

const bwLogos = [
  {
    logo: fccLogoBw,
    description:
      "First Cleaning Company ltd (FCC) is the leading provider of meticulous cleaning services in Rwanda. Specializing in residential, commercial, and specialized cleaning, our team is dedicated to delivering excellence in cleanliness. Impeccable standards are maintained through the use of industry-leading practices and environmentally conscious products. Spaces are transformed into pristine environments, prioritizing health and hygiene.",
    link:"/sectors/hygiene"
  },
  // {
  //   logo: shamiLogoBw,
  //   description:
  //     "Located in a strategic industrial zone, Ishami Factory is equipped with cutting-edge technology and adheres to the highest industry standards for quality, safety and Environment. The facility encompasses various stages of tobacco processing, from cultivation to packaging, ensuring efficiency and precision throughout the production chain. The factory also deals in Raw material Exports globally.",
  // },
  {
    logo: kezaLogoBw,
    description:
      "Keza Farmers Pride ldt, is a trailblazing force in the agricultural sector that has been a beacon of change since its establishment with a focus on seamless supply chain management of agro-produce, The company has carved a niche for itself by championing a business model that not only prioritizes profitability but, more importantly, places a strong emphasis on the welfare and empowerment of farmers.",
    link:"/sectors/agribusiness"
  },
  {
    logo: dssLogoBw,
    description:
      "Dynamic services solution (DSS) is a leading provider of outsourced labor services, dedicated to helping businesses streamline their operations and enhance productivity. Established in 2013, the company has grown into a trusted partner for organizations seeking cost-effective and efficient solutions to their staffing needs.",
    link:"/sectors/labour"
    },
];

const page = () => {
  return (
    <div className="mt-8 lg:mt-20">
      <CenterContent>
        <PageBreadcrumb />
        <p className="max-w-5xl mt-9 text-sm leading-[21px]">
          Our dedicated investment is strategically allocated to specific sectors, both within the
          private and public markets in the region. We actively engage in equity-like investments,
          channeling resources into sectors such as manufacturing, private enterprises at various,
          and collaborative ventures alongside external partners. This sector-focused approach
          allows us to navigate and capitalize on opportunities with precision and insight.
        </p>
        <div className="flex flex-col my-20 lg:my-32 gap-14">
          {bwLogos.map((card, index) => (
            <PartenerCard image={card.logo} link={card.link} description={card.description} key={index} />
          ))}
        </div>
      </CenterContent>
      <ContactCTA />
      <ContactUsCTA />
    </div>
  );
};
export default page;
