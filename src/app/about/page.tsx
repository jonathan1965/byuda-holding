import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import AboutVideo from "./sections/AboutVideo";
import ChairmanMessage from "./sections/ChairmanMessage";
import Hero from "./sections/Hero";
import Leadership from "./sections/Leadership";
import Mission from "./sections/Mission";
import OurRwandaCompanies from "./sections/OurRwandaCompanies";

const About = () => {
  return (
    <div>
      <Hero />
      <div className="mt-10">
        <CenterContent>
          <PageBreadcrumb />
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
