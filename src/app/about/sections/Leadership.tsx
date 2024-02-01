import teamMemberImage from "@/assets/images/team-member.png";
import CenterContent from "@/components/layouts/CenterContent";
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
        <h4 className="text-2xl">LEADERSHIP</h4>
        <hr className="bg-dark-red h-[2px]" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <Image src={member.image} alt="team member" className="object-cover w-full h-96" />
              <div className="flex flex-col items-center mt-2">
                <span className="text-xl">{member.name}</span>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </CenterContent>
    </div>
  );
};
export default Leadership;
