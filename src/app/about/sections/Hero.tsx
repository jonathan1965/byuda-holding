import heroBg from "@/assets/images/about-page-hero-bg.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="absolute w-full bottom-4 md:bottom-10 lg:bottom-16">
      </div>
      <Image
        src={heroBg}
        alt="About page hero background"
        className="w-full object-cover object-top h-[40vh]"
      />
    </section>
  );
};
export default Hero;
