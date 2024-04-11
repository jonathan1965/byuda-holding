import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import Services from "./sections/Services";

const Sectors = () => {
  return (
    <div className="mt-8 lg:mt-20">
      <CenterContent>
        <PageBreadcrumb />
        <p className="max-w-5xl text-justify mt-9 text-sm">
          Our dedicated investment is strategically allocated to specific
          sectors, both within the private and public markets in the region. We
          actively engage in equity-like investments, channeling resources into
          sectors such as manufacturing, private enterprises at various, and
          collaborative ventures alongside external partners. This
          sector-focused approach allows us to navigate and capitalize on
          opportunities with precision and insight.
        </p>
      </CenterContent>
      <Services />
      <div className="mt-10 sm:mt-32">
        <ContactCTA />
      </div>
    </div>
  );
};
export default Sectors;
