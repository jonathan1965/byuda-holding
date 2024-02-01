import fccLogoBw from "@/assets/icons/fcc-logo-bw.svg";
import amtollLogoBw from "@/assets/icons/amtoll-logo-bw.svg";
import dssLogoBw from "@/assets/icons/dss-logo-bw.svg";
import kezaLogoBw from "@/assets/icons/keza-logo-bw.svg";
import shamiLogoBw from "@/assets/icons/shami-logo-bw.svg";
import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import ContactUsCTA from "./sections/ContactUsCTA";
import PartenerCard from "./sections/PartenerCard";

const bwLogos = [fccLogoBw, shamiLogoBw, kezaLogoBw, dssLogoBw, amtollLogoBw];

const page = () => {
  return (
    <div className="mt-8 lg:mt-20">
      <CenterContent>
        <PageBreadcrumb />
        <p className="max-w-5xl mt-9">
          Lorem ipsum dolor sit amet consectetur. Fusce urna non est tortor tortor faucibus fusce
          amet suspendisse. Duis vitae et a mauris odio. Mollis condimentum integer tincidunt etiam
          faucibus enim porta sed faucibus. Pharetra ut tortor egestas convallis vitae dignissim
          pellentesque. Tellus mauris nullam odio viverra vel lectus odio consectetur sit. Diam
          scelerisque est odio donec in pharetra enim justo purus. Suscipit mauris leo nisl nibh
          proin amet cum.
        </p>
        <div className="flex flex-col my-20 lg:my-32 gap-14">
          {bwLogos.map((logo, index) => (
            <PartenerCard image={logo} key={index} />
          ))}
        </div>
      </CenterContent>
      <ContactCTA />
      <ContactUsCTA />
    </div>
  );
};
export default page;
