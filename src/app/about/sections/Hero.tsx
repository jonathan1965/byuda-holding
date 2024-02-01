import heroBg from "@/assets/images/about-page-hero-bg.png";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="absolute w-full bottom-4 md:bottom-10 lg:bottom-16">
        <CenterContent>
          <div className="w-full text-white">
            <h1 className="text-2xl text-white lg:text-4xl">Byuda Holdings</h1>
            <p className="max-w-2xl mt-3">
              We are an innovative global healthcare company with one purpose: to chase the miracles
              of science to improve people’s lives
            </p>
          </div>
        </CenterContent>
      </div>
      <Image
        src={heroBg}
        alt="About page hero background"
        className="w-full object-cover object-top h-[36vh] lg:h-[540px]"
      />
    </section>
  );
};
export default Hero;
