import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import Services from "./sections/Services";

const Sectors = () => {
  return (
    <div className="mt-8 lg:mt-20">
      <CenterContent>
        <PageBreadcrumb />
        <p className="max-w-5xl text-justify mt-9">
          Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce
          amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt etiam
          faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae dignissim
          pellentesque. Tellus mauris nullam odio viverra vel lectus odio consectetur sit. Diam
          scelerisque est odio donec in pharetra enim justo purus. Suscipit mauris leo nisl nibh
          proin amet cum.
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
