"use client";
import logo from "@/assets/icons/byumba-holding-logo.svg";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CenterContent from "../layouts/CenterContent";
import { useState } from "react";

const navLinks = ["about", "sectors", "portfolio", "newsroom", "careers", "contact"];

const Navbar = () => {
  const pathnameChunks = usePathname().split("/").filter(Boolean);
  const basePath = pathnameChunks[0];
  const [isSeacrhcing, setIsSearching] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl">
      <CenterContent>
        <nav className="flex items-center justify-between ">
          <Link href="/">
            <Image src={logo} alt="Byumba holding logo icon" className="w-28 md:w-auto" priority />
          </Link>
          <div className=" hidden md:flex items-center sm:gap-[100px]">
            <div className="hidden text-sm !text-black font-medium lg:flex gap-12  h-full">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={`/${link}`}
                  className={`capitalize ${basePath === link ? "text-dark-red" : ""} group/item  h-full py-5 lg:py-10`}
                >
                  {link}
                  {
                    link !== "about" && (
                    <div className="fixed w-full flex items-end justify-end top-[90px] group-hover/item:visible invisible py-10 bg-[#911320]/90 left-0">
                          <div className="grid grid-cols-5 gap-20">
                            <div className="flex flex-col gap-4">
                              <h1 className="font-light text-[15px] text-white">Sectors</h1>
                              <div className="bg-[#FF656D] w-full h-[1px]" />
                              <Link href={'/sectors'} className="text-[#FF656D] text-[14px]">Hygiene Services</Link>
                              <Link href={'/sectors'} className="text-[#FF656D] text-[14px]">Agribusiness</Link>
                              <Link href={'/sectors'} className="text-[#FF656D] text-[14px]">Manufacturing</Link>
                              <Link href={'/sectors'} className="text-[#FF656D] text-[14px]">Logistics</Link>
                            </div>
                            <div className="flex flex-col gap-4">
                              <h1 className="font-light text-[15px] text-white">Portfolio</h1>
                              <div className="bg-[#FF656D] w-full h-[1px]" />
                              <Link href={'/sectors'} className="text-[#FF656D] text-[14px]">Keza farmers pride</Link>
                              <Link href={'/sectors'} className="text-[#FF656D] text-[14px]">DSS</Link>
                              <Link href={'/sectors'} className="text-[#FF656D] text-[14px]">Ishyami Factory</Link>
                              <Link href={'/sectors'} className="text-[#FF656D] text-[14px]">AMTOLL</Link>
                            </div>
                            <div className="flex flex-col gap-4">
                              <h1 className="font-light text-[15px] text-white">Newsroom</h1>
                              <div className="bg-[#FF656D] w-full h-[1px]" />
                              <Link href={'/newsroom'} className="text-[#FF656D] text-[14px]">News</Link>
                              <Link href={'/newsroom'} className="text-[#FF656D] text-[14px]">Tenders</Link>
                            </div>
                            <div/>
                            <div/>

                          </div>
                    </div>
                    )
                  }
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
                  {/* <div>
                    <input autoFocus className={`transition-all duration-300 outline-none ${isSeacrhcing ? "w-[200px] border px-4" : "w-0"} `} />
                  </div> */}
                  <button onClick={(() => setIsSearching((prev) => !prev))}>
                        <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width={18} height={18} fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use xlinkHref="#image0_58_1613" transform="scale(0.0078125)" />
                      </pattern>
                      <image
                        id="image0_58_1613"
                        width={128}
                        height={128}
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                  </button>
            </div>
          </div>
          <Popover className="relative -mb-2 lg:hidden">
            {({ open }) => (
              <>
                <Popover.Button className="py-4">
                  {open ? (
                    <XMarkIcon className="w-10 text-dark-red" />
                  ) : (
                    <Bars3Icon className="w-10 text-dark-red" />
                  )}
                </Popover.Button>

                <Popover.Panel className="absolute z-[80] bg-white border border-gray-300/30 shadow-lg w-64 -ml-52 mt-2 rounded-md py-2">
                  <div className="grid grid-cols-2">
                    {navLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={`/${link}`}
                        className={`px-4 py-2 capitalize  ${
                          basePath === link ? "text-dark-red" : ""
                        }`}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </nav>
      </CenterContent>
    </header>
  );
};
export default Navbar;
