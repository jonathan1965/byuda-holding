"use client";
import cleanAfrica from "@/assets/images/clean-africa.png";
import maizeField from "@/assets/images/maize-field.png";
import norrsken from "@/assets/images/norrsken.png";
import CenterContent from "@/components/layouts/CenterContent";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const sectorNews = [
  {
    id: "2",
    image: cleanAfrica,
    heading: "A Clean Africa.",
    description:
      "Environmental consciousness is taking center stage, cleaning companies in Africa are redefining their role beyond traditional sanitation services. They're becoming key players in fostering a cleaner continent, not only for the benefit of the",
  },
  {
    id: "1",
    image: norrsken,
    heading: "Revolutionizing workspaces",
    description:
      "In the bustling world of startups, where innovation meets chaos, maintaining a clean and organized workspace often takes a back seat. Recognizing the unique needs of the",
  },
  {
    id: "3",
    image: maizeField,
    heading: "Empowering farmers",
    description:
      "Environmental consciousness is taking center stage, cleaning companies in Africa are redefining their role beyond traditional sanitation services. They're becoming key players in fostering a cleaner continent, not only for the benefit of the",
  },
  {
    id: "4",
    image: maizeField,
    heading: "Empowering farmers",
    description:
      "Environmental consciousness is taking center stage, cleaning companies in Africa are redefining their role beyond traditional sanitation services. They're becoming key players in fostering a cleaner continent, not only for the benefit of the",
  },
  {
    id: "5",
    image: maizeField,
    heading: "Empowering farmers",
    description:
      "Environmental consciousness is taking center stage, cleaning companies in Africa are redefining their role beyond traditional sanitation services. They're becoming key players in fostering a cleaner continent, not only for the benefit of the",
  },
];

const Search = () => {
  const keySearch = useSearchParams();
  const search = keySearch.get("search");
  const [searchValue, setSearchValue] = useState(search);
  const result = sectorNews.filter((item) =>
    item.heading.toLowerCase().includes(searchValue?.toLowerCase() ?? "")
  );

  return (
    <CenterContent>
      <h3 className="text-xl capitalize md:text-[35px] mt-8">
        Search results for values{" "}
      </h3>
      <input
        autoFocus
        type="text"
        id="default-input"
        value={searchValue ?? ""}
        onChange={(e) => setSearchValue(e.target.value)}
        className=" mt-4 bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#911320] focus:border-[#911320] block w-full p-2.5 "
      />
      <div
        className={` mb-10 flex-wrap w-full grid lg:grid-cols-4 gap-4  mt-8 font-poppins lg:flex-row lg:flex-nowrap justify-center items-center`}
      >
        {result.length === 0 && <EmptyState />}
        {result.map((item, index) => (
          <div key={index}>
            <Link
              href={`/newsroom/${item.id}`}
              key={index}
              className="group !hover:shadow-md !group-hover:shadow-md"
            >
              <div className="max-w-[346px] rounded-md overflow-clip h-full">
                <Image
                  src={item.image}
                  alt="Clean africa"
                  className="object-cover w-full h-60"
                />
                <div className="px-6 pt-4 text-white group-hover:bg-white group-hover:text-black transition-all duration-300 min-h-[250px] bg-dark-red pb-11 leading-7">
                  <h3 className="text-[25px] font-medium-">{item.heading}</h3>
                  <p className="mt-4 text-[13px] md:text-[14px] leading-[21px] line-clamp-6 ">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </CenterContent>
  );
};
export default Search;

function EmptyState() {
  return (
    <div className="flex col-span-4 py-[100px] items-center w-full flex-wrap justify-center gap-10">
      <div className="grid gap-4 w-60">
        <svg
          className="mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          width={116}
          height={121}
          viewBox="0 0 116 121"
          fill="none"
        >
          <path
            d="M0.206909 63.57C0.206909 31.7659 25.987 6.12817 57.6487 6.12817C89.2631 6.12817 115.079 31.7541 115.079 63.57C115.079 77.0648 110.43 89.4805 102.627 99.2755C91.8719 112.853 75.4363 121 57.6487 121C39.7426 121 23.4018 112.794 12.6582 99.2755C4.85538 89.4805 0.206909 77.0648 0.206909 63.57Z"
            fill="#91132039"
          />
          <path
            d="M72.7942 0.600875L72.7942 0.600762L72.7836 0.599331C72.3256 0.537722 71.8622 0.5 71.3948 0.5H22.1643C17.1256 0.5 13.0403 4.56385 13.0403 9.58544V107.286C13.0403 112.308 17.1256 116.372 22.1643 116.372H93.1214C98.1725 116.372 102.245 112.308 102.245 107.286V29.4482C102.245 28.7591 102.17 28.0815 102.019 27.4162L102.019 27.416C101.615 25.6459 100.67 24.0014 99.2941 22.7574C99.2939 22.7572 99.2937 22.757 99.2934 22.7568L77.5462 2.89705C77.5461 2.89692 77.5459 2.89679 77.5458 2.89665C76.2103 1.66765 74.5591 0.876968 72.7942 0.600875Z"
            fill="white"
            stroke="#91132039"
          />
          <circle cx="60.2069" cy={61} r="21.0256" fill="#91132039" />
          <path
            d="M74.6786 46.1412L74.6783 46.1409C66.5737 38.0485 53.4531 38.0481 45.36 46.1412C37.2552 54.2341 37.2551 67.3666 45.3597 75.4596C53.4529 83.5649 66.5739 83.5645 74.6786 75.4599C82.7716 67.3669 82.7716 54.2342 74.6786 46.1412ZM79.4694 41.3508C90.2101 52.0918 90.2101 69.5093 79.4694 80.2502C68.7166 90.9914 51.3104 90.9915 40.5576 80.2504C29.8166 69.5095 29.8166 52.0916 40.5576 41.3506C51.3104 30.6096 68.7166 30.6097 79.4694 41.3508Z"
            stroke="#91132039"
          />
          <path
            d="M83.2471 89.5237L76.8609 83.1309C78.9391 81.5058 80.8156 79.6106 82.345 77.6546L88.7306 84.0468L83.2471 89.5237Z"
            stroke="#91132039"
          />
          <path
            d="M104.591 94.4971L104.59 94.4969L92.7346 82.653C92.7342 82.6525 92.7337 82.652 92.7332 82.6515C91.6965 81.6018 90.0076 81.6058 88.9629 82.6505L89.3089 82.9965L88.9629 82.6505L81.8573 89.7561C80.8213 90.7921 80.8248 92.4783 81.8549 93.5229L81.8573 93.5253L93.7157 105.384C96.713 108.381 101.593 108.381 104.591 105.384C107.6 102.375 107.6 97.5062 104.591 94.4971Z"
            fill="#91132039"
            stroke="#91132039"
          />
          <path
            d="M62.5493 65.6714C62.0645 65.6714 61.6626 65.2694 61.6626 64.7729C61.6626 62.7866 58.6595 62.7866 58.6595 64.7729C58.6595 65.2694 58.2576 65.6714 57.761 65.6714C57.2762 65.6714 56.8743 65.2694 56.8743 64.7729C56.8743 60.422 63.4478 60.4338 63.4478 64.7729C63.4478 65.2694 63.0458 65.6714 62.5493 65.6714Z"
            fill="#911320"
          />
          <path
            d="M70.1752 58.0694H66.4628C65.9662 58.0694 65.5642 57.6675 65.5642 57.1709C65.5642 56.6862 65.9662 56.2842 66.4628 56.2842H70.1752C70.6717 56.2842 71.0737 56.6862 71.0737 57.1709C71.0737 57.6675 70.6717 58.0694 70.1752 58.0694Z"
            fill="#911320"
          />
          <path
            d="M53.8596 58.0693H50.1472C49.6506 58.0693 49.2487 57.6673 49.2487 57.1708C49.2487 56.686 49.6506 56.2841 50.1472 56.2841H53.8596C54.3443 56.2841 54.7463 56.686 54.7463 57.1708C54.7463 57.6673 54.3443 58.0693 53.8596 58.0693Z"
            fill="#911320"
          />
          <rect
            x="28.9248"
            y="16.3846"
            width="30.7692"
            height="2.05128"
            rx="1.02564"
            fill="#911320"
          />
          <rect
            x="28.9248"
            y="100.487"
            width="41.0256"
            height="4.10256"
            rx="2.05128"
            fill="#91132039"
          />
          <rect
            x="28.9248"
            y="22.5385"
            width="10.2564"
            height="2.05128"
            rx="1.02564"
            fill="#911320"
          />
          <circle cx="42.2582" cy="23.5641" r="1.02564" fill="#911320" />
          <circle cx="46.3607" cy="23.5641" r="1.02564" fill="#911320" />
          <circle cx="50.4633" cy="23.5641" r="1.02564" fill="#911320" />
        </svg>
        <div>
          <h2 className="text-center text-black text-base font-medium font-inter leading-relaxed pb-1">
            There’s no result for your search
          </h2>
        </div>
      </div>
    </div>
  );
}
