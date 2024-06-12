/* eslint-disable react/no-unescaped-entities */
import CenterContent from "@/components/layouts/CenterContent";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import { FaRegClock } from "react-icons/fa";
import { FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { MdMailOutline, MdOutlineLocationOn } from "react-icons/md";

function page() {
  return (
    <div className="mt-10 md:mt-20">
      <CenterContent>
        <PageBreadcrumb />
        <div className="my-10 md:my-14">
          <h2 className="text-2xl text-dark-red font-poppins">Talk to us today.</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="w-full font-poppins text-sm">
              <p className="text-justify">
                Have a question, need assistance, or just want to share your thoughts? We're here to
                listen and respond. Feel free to reach out to us using the contact information
                below, and let's start a conversation. Your inquiries matter to us.Have a question,
                need assistance, or just want to share your thoughts? We're here to listen and
                respond. Feel free to reach out to us using the contact information below, and let's
                start a conversation. Your inquiries matter to us.
              </p>
              <p className="mt-3">
                We value your communication and strive to provide timely responses. Whether you're a
                prospective client, partner, or simply curious, talking to us today is the first
                step towards meaningful engagement.
              </p>

              <h4 className="mt-12 text-xl">Byuda Holdings</h4>
              <div className="flex gap-6 mt-7">
                <MdOutlineLocationOn className="flex-shrink-0 block text-3xl text-dark-red" />
                <p>
                  Byuda Building (KG 6X78), Prime Economic Zone, Masoro. P.O.Box 00000, Kigali -
                  Rwanda
                </p>
              </div>
              <div className="flex mt-4 gap-5 ">
                <FaRegClock className="flex-shrink-0 block ml-1 text-2xl text-dark-red" />
                <span>
                  Operating hours of Byuda Holdings: <br /> Monday to Friday: 0900 – 1700 ​​(GMT + 2
                  hours) Closed on Saturdays, Sundays and public holidays
                </span>
              </div>
              <div className="flex mt-4 gap-5">
                <MdMailOutline className="flex-shrink-0 block ml-px text-2xl text-dark-red" />
                <span className="block">info@byudaholdings.com</span>
              </div>
              <div className="flex mt-6 gap-5 ">
                <FaPhone className="flex-shrink-0 block ml-px text-2xl text-dark-red" />
                <a href="tel:+250785129699">
                  Tel: +250 785 129 699
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.508633465002!2d30.150454683895482!3d-1.9496586316204405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db596fa4684d11%3A0x37af8dcc93e51419!2sPRIME%20ECONOMIC%20ZONES!5e0!3m2!1sen!2srw!4v1706126977965!5m2!1sen!2srw"
                width="100%"
                title="Byuda holdings location on Google map"
                height="450"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex items-center mt-10 ml-auto gap-3">
                <span className="text-gray-400">Connect with Us</span>
                <span className="p-2 text-white bg-black rounded-full">
                  <FaLinkedinIn className="text-lg" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </CenterContent>
    </div>
  );
}
export default page;
