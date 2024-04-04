import CenterContent from "../layouts/CenterContent";

const ContactCTA = () => {
  return (
    <div className="bg-[#D7D6D7AB]">
      <CenterContent>
        <div className="flex flex-col items-center justify-center py-20 text-center lg:flex-row gap-11">
          <span>Help us get your queries to the right place</span>
          <button className="flex justify-center w-4/5 px-20 py-3 text-center uppercase border sm:w-auto border-dark-red rounded-full hover:bg-[#FF656D] hover:border-transparent hover:text-white lg:rounded-3xl">
            Contact us
          </button>
        </div>
      </CenterContent>
    </div>
  );
};
export default ContactCTA;
