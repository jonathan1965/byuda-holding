"use client";

import teamMemberImage from "@/assets/images/team-member.png";
import CenterContent from "@/components/layouts/CenterContent";
import arrow from "@/assets/icons/redarrow.svg";
import { Popover } from "@headlessui/react";
import Image from "next/image";

const teamMembers = [
  {
    image: teamMemberImage,
    name: "Steve Kalisa",
    role: "Chairman",
  },
  {
    image: teamMemberImage,
    name: "Steve Kalisa",
    role: "Chairman",
  },
  {
    image: teamMemberImage,
    name: "Steve Kalisa",
    role: "Chairman",
  },
  {
    image: teamMemberImage,
    name: "Steve Kalisa",
    role: "Chairman",
  },
];

const Leadership = () => {
  return (
    <div className="pt-12 pb-16 bg-white">
      <CenterContent>
        <h4 className="text-2xl sm:text-start text-center sm:mb-0 mb-8">
          LEADERSHIP
        </h4>
        <hr className="bg-dark-red h-[2px] sm:block hidden" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {teamMembers.map((member, index) => (
            <Popover key={index}>
              {({ open, close }) => (
                <>
                  <div className="relative group cursor-pointer">
                    <Image
                      src={member.image}
                      alt="team member"
                      className="object-cover w-full h-96"
                    />
                    <div className="flex flex-col items-center mt-2">
                      <span className="text-xl">{member.name}</span>
                      <span>{member.role}</span>
                    </div>
                    <div className="bg-[#7F0D1D] group-hover:opacity-100 bg-opacity-80 absolute inset-0 w-full h-96 flex justify-center items-center opacity-0 ">
                      <Popover.Button className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
                        <Image
                          src={arrow}
                          alt="arrow"
                          className="h-8 w-8 relative left-0.5 -rotate-90"
                        />
                      </Popover.Button>
                    </div>
                    <Popover.Panel className="fixed flex justify-center items-center inset-0 h-full w-full z-[100000] bg-black/50" onClick={((e)=>{
                      close();
                    })}>
                      <div className="max-w-7xl mx-auto w-full h-56 py-48 px-20 bg-white flex gap-10 items-center"
                      onClick={((e)=>{
                      e.stopPropagation();
                    })}
                      >
                        <Image
                          src={teamMemberImage}
                          width={200}
                          height={200}
                          alt="team member"
                          className="w-[180px] max-h-[180px] h-[200px] object-cover rounded-full"
                        />
                        <div className="flex-1">
                          <h4 className="text-2xl mb-3">David Byuzura</h4>
                          <p className="font-light mb-1">Chairman</p>
                          <p className="font-light mb-5">
                            We believe in more than just business; we believe in
                            creating a positive impact on the world. From our
                            first steps with FCC to the establishment of our
                            diverse subsidiaries, each milestone reflects our
                            dedication to excellence.
                          </p>
                          <p>We believe in more than just business; we believe in
                            creating a positive impact on the world.</p>
                        </div>
                      </div>
                    </Popover.Panel>
                  </div>
                </>
              )}
            </Popover>
          ))}
        </div>
      </CenterContent>
    </div>
  );
};
export default Leadership;
