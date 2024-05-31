import CenterContent from "../layouts/CenterContent";
import Link from 'next/link'

const ContactCTA = () => {
  return (
    <div className="bg-[#D7D6D7AB]">
      <CenterContent>
        <div className="flex flex-col items-center justify-center py-20 text-center lg:flex-row gap-6 md:gap-11">
          <span className="font-light font-inter max-md:text-sm">Help us get your queries to the right place</span>
          <Link href="/contact" className="flex justify-center px-20 py-3 text-center uppercase border sm:w-auto border-[#911320]  rounded-full hover:bg-[#FF656D] hover:border-transparent hover:text-white lg:rounded-3xl">
            Contact us
          </Link>
        </div>
      </CenterContent>
    </div>
  );
};
export default ContactCTA;
