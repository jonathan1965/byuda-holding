import SectorNews from "@/components/home-page/SectorNews";
import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";

const NewsRoom = () => {
  return (
    <div>
      <CenterContent>
        <div className="mt-16">
          <PageBreadcrumb />
        </div>
        <div className="mt-4 mb-16">
          <SectorNews hideTitle={true} />
        </div>
      </CenterContent>
      <ContactCTA />
    </div>
  );
};
export default NewsRoom;
