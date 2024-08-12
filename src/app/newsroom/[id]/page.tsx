import cleanAfrica from "@/assets/images/clean-africa.png";
import maizeField from "@/assets/images/maize-field.png";
import norrsken from "@/assets/images/norrsken.png";
import SectorNews from "@/components/home-page/SectorNews";
import CenterContent from "@/components/layouts/CenterContent";
import ContactCTA from "@/components/shared-sections/Contact-CTA";
import PageBreadcrumb from "@/components/shared-sections/PageBreadcrumb";
import Image, { StaticImageData } from "next/image";

type Article = {
  id: string;
  title: string;
  realeaseDate: string;
  coverImage: StaticImageData;
  pathEndLabel: string;
  highlight: string;
  paragraphs: string[];
};

const articles: Article[] = [
  {
    id: "1",
    title: "Revolutionizing Workspaces: FCC Tailored for Startup Success.",
    realeaseDate: "12/01/2024",
    coverImage: norrsken,
    pathEndLabel: "REVOLUTIONIZING WORKSPACES",
    paragraphs: [
      "In the bustling world of startups, where innovation meets chaos, maintaining a clean and organized workspace often takes a back seat. Recognizing the unique needs of the startup sector, FCC specializes in decluttering services tailored to these dynamic environments.",
      "Startups are known for their fast-paced and ever-changing nature. With limited time and resources, maintaining a tidy workspace can become a daunting task. Traditional cleaning services may not fully grasp the nuances of startup life, leading to a gap in meeting the specific organizational needs of these businesses, this is why a partnership with Norsken, an entreprenuer Hub center in the heart of kigali was forstered.",
      "FCC goes beyond the conventional, offering customized decluttering solutions designed specifically for startups. Our specialists understand the ebb and flow of a startup environment, creating personalized plans that align with the unique workflow and requirements of each business.",
      "Startup teams often work irregular hours, and conventional 9-to-5 cleaning services may disrupt their operations. FCC has managed to embrace flexibility, offering services during evenings and weekends to minimize interference during regular business hours.",
      "Tech startups, particlulary at Norsken kigali, face a different set of challenges when it comes to decluttering. Cables, electronic devices, and technology-related items contribute to the chaos. A forward-thinking cleaning company like FCC ensures its staff are trained to handle tech equipment, contributing to a tidy and organized tech workspace.",
      "One-size-fits-all approaches don't cut it in the startup world. Decluttering specialists work collaboratively with startup teams to understand their organizational culture and preferences. Regular communication with our team ensures that cleaning services evolve in sync with the startup's changing needs.",
      "To stay ahead in the competitive cleaning industry, FCC remains adaptable and innovative. Keeping up with the latest cleaning technologies and methodologies ensuring that cleaning specialists are equipped to tackle the evolving needs of local startups.",
    ],
    highlight:
      "FCC goes beyond the conventional, offering customized decluttering solutions designed specifically for startups.",
  },
  {
    id: "2",
    title: "RA Clean Africa: The Business of Environmental Stewardship",
    realeaseDate: "12/01/2024",
    coverImage: cleanAfrica,
    pathEndLabel: "A CLEAN AFRICA",
    paragraphs: [
      "For FCC, sustainability is not just a buzzword; it's a fundamental part of the business strategy. The company is increasingly adopting eco-friendly practices, from incorporating biodegradable cleaning agents to utilizing energy-efficient equipment. This commitment to sustainability is not only a demonstration of corporate responsibility but also a way to meet the growing demand from environmentally conscious clients.",
      "Economic empowerment is another key aspect of the business-oriented environmental efforts of FCC. By creating job opportunities within local communities, the company is not only contributing to environmental cleanliness but also driving economic stability. The economic ripple effect extends to attracting more clients and investors, showcasing the business advantages of a cleaner environment.",
      "In response to the prevalent issue of inadequate waste management in many African countries, FCC is showcasing their innovative capabilities. They're implementing recycling programs, waste-to-energy initiatives, and sustainable waste disposal methods. These initiatives not only address environmental concerns but also position the company as leaders in cutting-edge solutions, differentiating them in a competitive market.",
      'For example, FCC has embarked on a mission to revolutionize hygiene practices in local businesses. "We are not merely cleaning spaces; We are on a mission to change the hygiene landscape of African premises. Through targeted outreach programs and partnerships with local businesses, our aim is to set new standards for cleanliness and hygiene. By providing tailor-made solutions and leveraging the latest technologies, whilst actively contributing to the transformation of business hygiene practices across the continent" said Christian Rwamwejo – CEO Byuda Holdings, the holding company for FCC.',
    ],
    highlight:
      "We are not merely cleaning spaces; We are on a mission to change the hygiene landscape of African premises.",
  },
  {
    id: "3",
    title: "RA Clean Africa: The Business of Environmental Stewardship",
    realeaseDate: "12/01/2024",
    coverImage: maizeField,
    pathEndLabel: "A CLEAN AFRICA",
    paragraphs: [
      "In a dynamic face within the agricultural sector, Keza Farmers Pride ltd (Keza FP) is taking the lead in redefining the relationship between commercial entities and farmers. More than just a profit-driven enterprise, Keza FP is pioneering initiatives that add substantial value to the lives of farmers, setting a new standard for agribusiness in Rwanda.",
      "In an era where farmers often face challenges in reaching markets and securing fair prices, Keza Farmers Pride ltd (Keza FP) is breaking down barriers. By establishing direct connections between farmers and markets, the company ensures that farmers receive fair and transparent pricing. The company empowers farmers to negotiate better deals and improving their economic prospects.",
      "In an effort to streamline the agricultural supply chain and vegetables in particular, Keza FP ensures a seamless flow of produce from farms to consumers. By offering logistical support and modern storage facilities, the company reduces post-harvest losses and guarantees a steady income for farmers, contributing to the resilience and sustainability of the entire agricultural supply chain.",
      "At the forefront of promoting sustainability, Keza FP encourages farmers to adopt eco-friendly practices. From organic farming initiatives to efficient water management and environmentally conscious pest control methods, Keza FP is contributing to the local movement for sustainable agriculture.",
      "Keza FP is not merely a commercial agribusiness; it's a partner in the journey towards a more prosperous and sustainable agricultural future. As the company continues to innovate and collaborate, the collective efforts are poised to yield a harvest of shared success for farmers in Rwanda.",
    ],
    highlight: "",
  },
];

const Page = ({params}:{
  params: { id: string };
}) => {
  const activeArticleId = params.id;
  const activeArticle = articles.find((article) => article.id === activeArticleId) || articles[0];
  return (
    <div className="mt-10">
      <CenterContent>
        <PageBreadcrumb pathEndLabel={activeArticle.pathEndLabel} title={activeArticle.title} />
        <span className="inline-block px-2 py-1 my-6 text-white bg-black rounded-tr-xl rounded-bl-xl ml-7">
          {activeArticle.realeaseDate}
        </span>

        <Image
          className="w-full h-52 lg:h-[560px] object-cover"
          src={activeArticle.coverImage}
          alt={activeArticle.pathEndLabel}
        />
        <div className="grid w-full grid-cols-1 md:grid-cols-8 mt-9 gap-y-8 md:gap-x-10 lg:gap-x-20">
          <div className="flex w-full flex-col gap-4 md:col-span-6">
            {activeArticle.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-justify w-full">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col justify-between col-span-2">
            <p className="w-full text-2xl text-[#911320] text-justify font-medium min-h-[300px]">
              {activeArticle.highlight}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <hr className="bg-black h-[2px]" />
              <span className="font-medium mt-2">Article by Byuda Holdings Communications</span>
              <span>Published - {activeArticle.realeaseDate}</span>
              <span>communications@byudaholdings.com</span>
              <span className="text-dark-red font-medium">Byuda Holdings ©</span>
            </div>
          </div>
        </div>
        <div className="my-16">
          <h4 className="font-medium text-2xl">Explore more</h4>
          <SectorNews hideTitle={true} hiddenCardId={activeArticle.id} />
        </div>
      </CenterContent>
      <ContactCTA />
    </div>
  );
};
export default Page;


export function generateStaticParams() {
  return articles.map((article) => ({ id: article.id }));
}