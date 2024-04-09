import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import AboutVideo from "./sections/AboutVideo";
import ChairmanMessage from "./sections/ChairmanMessage";
import Hero from "./sections/Hero";
import Leadership from "./sections/Leadership";
import Mission from "./sections/Mission";
import OurRwandaCompanies from "./sections/OurRwandaCompanies";
import Breadcrumb from "@/components/shared-sections/Breadcrumb";

const About = () => {
  return (
    <div>
      <Hero />
      <div className="mt-8 md:mt-10">
        <CenterContent>
          <div className="max-w-[1080px] mx-auto">
            <Breadcrumb hidden crumbs={[{ name: 'About us', url: "/about"}, { name: 'Our legacy', url: "/"}]} title="About us"  />
          </div>
          
        </CenterContent>
      </div>

      <AboutVideo />
      <OurRwandaCompanies />
      <ChairmanMessage />
      <Mission />
      <Leadership />
      <ContactCTA />
    </div>
  );
};
export default About;
