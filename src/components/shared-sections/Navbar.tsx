"use client";
import logo from "@/assets/icons/byumba-holding-logo.svg";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CenterContent from "../layouts/CenterContent";
import { useState } from "react";
import downarrow from "@/assets/icons/downarrow.svg";
import pattern from "@/assets/icons/pattern.svg";
import { useRouter } from "next/navigation";
import classNames from "classnames";

const navLinks = [
  "about",
  "sectors",
  "portfolio",
  "newsroom",
  "careers",
  "contact",
];

const mobLinks = [
  {
    name: 'about',
    url: '/about',
    items: [
      { name: 'About us', url: '/about' },
      { name: 'Leadership', url: '/about#leadership' },
    ],
  },
  {
    name: 'Sectors',
    url: '',
    isNotNested: true,
    items: [
      { name: 'Hygiene', url: '/sectors/hygiene' },
      { name: 'Agriculture', url: '/sectors/agriculture' },
      { name: 'Manufacturing', url: '/sectors/manufacturing' },
      { name: 'Labour outsource', url: '/sectors/labour' },
    ],
  },
  {
    name: 'Portfolio',
    url: '/portfolio',
    items: [
      {
        name: 'FCC',
        url: '/sectors/hygiene',
      },
      {
        name: 'Keza Farmers Pride',
        url: '/sectors/agriculture',
      },
      {
        name: '⁠Ishami Factory',
        url: '/sectors/manufacturing',
      },
      // {
      //   name: 'Amtoll',
      //   url: '/sectors/agriculture',
      // },
      {
        name: 'DSS',
        url: '/sectors/labour',
      },
    ],
  },

  {
    name: 'Newsroom',
    url: '/newsroom',
    isNotNested: true,
    items: [],
  },

  {
    name: 'Contact',
    url: '/contact',
    isNotNested: true,
    items: [],
  },
]

const Navbar = () => {
  const pathnameChunks = usePathname().split("/").filter(Boolean);
  const basePath = pathnameChunks[0];
  const router = useRouter()

  const [isSeacrhcing, setIsSearching] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search?key=${e.target.search.value}`)
  }

  const isSectors = basePath === "sectors";
  const isPortfolio = basePath === "portfolio";
  const isNewsroom = basePath === "newsroom";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl">
      <CenterContent>
        <nav className="flex items-center justify-between font-inter">
          <Link href="/">
            <Image
              src={logo}
              alt="Byumba holding logo icon"
              className="w-28 md:w-auto"
              priority
            />
          </Link>
          <div className=" hidden md:flex items-center sm:gap-[100px]">
            <div className="hidden text-sm !text-black font-medium lg:flex gap-12  h-full">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={`/${
                    basePath === 'about' && link === 'about' ? '' : link
                  }`}
                  className={`capitalize hover:text-dark-red ${
                    basePath === link ? 'text-dark-red' : ''
                  } group/item  h-full py-5 lg:py-10`}
                >
                  {basePath === 'about' && link === 'about' ? 'home' : link}
                  {link !== 'about' && (
                    <div className="fixed w-full flex items-end justify-end top-[90px] duration-300 group-hover/item:visible invisible py-10 bg-[#911320]/90 left-0">
                      <div className="grid grid-cols-5 gap-20">
                        <div className="flex flex-col gap-4">
                          <h1 className="font-light text-[15px] text-white">
                            Sectors
                          </h1>
                          <div className="bg-[#FF656D] w-full h-[1px]" />
                          <Link
                            href={'/sectors/hygiene'}
                            className={classNames({
                              " hover:text-white hover:font-semibold duration-300- transition-all-  text-[14px]":true,
                              "text-white": isSectors,
                              "text-[#FF656D]":!isSectors
                            })}
                          >
                            Hygiene Services
                          </Link>
                          <Link
                            href={'/sectors/agribusiness'}
                            className={classNames({
                              "hover:text-white hover:font-semibold duration-300- transition-all-  text-[14px]":true,
                              "text-white": isSectors,
                              "text-[#FF656D]":!isSectors
                            })}
                          >
                            Agribusiness
                          </Link>
                          <Link
                            href={'/sectors/manufacturing'}
                            className={classNames({
                              "hover:text-white hover:font-semibold duration-300- transition-all-  text-[14px]":true,
                              "text-white": isSectors,
                              "text-[#FF656D]":!isSectors
                            })}
                          >
                            Manufacturing
                          </Link>
                        </div>
                        <div className="flex flex-col gap-4 w-[135px]">
                          <h1 className="font-light text-[15px] text-white">
                            Portfolio
                          </h1>
                          <div className="bg-[#FF656D] w-full h-[1px]" />
                          <Link
                            href={'/sectors/agribusiness'}
                              className={classNames({
                              " hover:text-white hover:font-semibold duration-300- transition-all-  text-[14px]":true,
                              "text-white": isPortfolio,
                              "text-[#FF656D]":!isPortfolio
                            })}
                          >
                            Keza farmers pride
                          </Link>
                          <Link
                            href={'/sectors/labour'}
                              className={classNames({
                              " hover:text-white hover:font-semibold duration-300- transition-all-  text-[14px]":true,
                              "text-white": isPortfolio,
                              "text-[#FF656D]":!isPortfolio
                            })}
                          >
                            DSS
                          </Link>
                          <Link
                            href={'/sectors/hygiene'}
                              className={classNames({
                              " hover:text-white hover:font-semibold duration-300- transition-all-  text-[14px]":true,
                              "text-white": isPortfolio,
                              "text-[#FF656D]":!isPortfolio
                            })}
                          >
                            Ishyami Factory
                          </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h1 className="font-light text-[15px] text-white">
                            Newsroom
                          </h1>
                          <div className="bg-[#FF656D] w-full h-[1px]" />
                          <Link
                            href={'/newsroom'}
                            className={classNames({
                              " hover:text-white hover:font-semibold duration-300- transition-all-  text-[14px]":true,
                              "text-white": isNewsroom,
                              "text-[#FF656D]":!isNewsroom
                            })}
                          >
                            News
                          </Link>
                          <Link
                            href={'/newsroom'}
                            className={classNames({
                              " hover:text-white hover:font-semibold duration-300- transition-all-  text-[14px]":true,
                              "text-white": isNewsroom,
                              "text-[#FF656D]":!isNewsroom
                            })}
                          >
                            Tenders
                          </Link>
                        </div>
                        <div />
                        <div />
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {/* <div>
                    <input autoFocus className={`transition-all duration-300 outline-none ${isSeacrhcing ? "w-[200px] border px-4" : "w-0"} `} />
                  </div> */}
              <Link className="block" href={'/search'}>
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
                      <use
                        xlinkHref="#image0_58_1613"
                        transform="scale(0.0078125)"
                      />
                    </pattern>
                    <image
                      id="image0_58_1613"
                      width={128}
                      height={128}
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
          <Popover className="relative -mb-2 lg:hidden">
            {({ open, close }) => (
              <>
                <Popover.Button className="py-4">
                  {open ? (
                    <XMarkIcon className="w-10 text-dark-red" />
                  ) : (
                    <Bars3Icon className="w-10 text-dark-red" />
                  )}
                </Popover.Button>

                <Popover.Panel className="fixed px-4 z-[80] bg-[#911413] bg-opacity-90 grid justify-center max-sm:grid-cols-1  pb-20 border border-gray-300/30 shadow-lg w-full -mt-2 right-0 left-0 py-2">
                  <form
                    onSubmit={handleSubmit}
                    className="flex justify-center mt-10 max-sm:w-full"
                  >
                    <button
                      type="submit"
                      className="bg-white w-9 h-9 rounded-l-xl flex justify-center items-center"
                    >
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9004 10.3684L8.90607 8.3902C9.68019 7.42499 10.0551 6.19985 9.95365 4.96672C9.85222 3.73359 9.28218 2.58618 8.36074 1.76043C7.4393 0.934683 6.2365 0.493358 4.99967 0.527203C3.76283 0.561047 2.58597 1.06749 1.71107 1.94239C0.836164 2.81729 0.329724 3.99416 0.295879 5.23099C0.262035 6.46783 0.70336 7.67062 1.52911 8.59206C2.35486 9.5135 3.50226 10.0835 4.7354 10.185C5.96853 10.2864 7.19366 9.91152 8.15888 9.13739L10.1371 11.1156C10.187 11.166 10.2465 11.2059 10.312 11.2332C10.3775 11.2605 10.4478 11.2746 10.5187 11.2746C10.5897 11.2746 10.6599 11.2605 10.7254 11.2332C10.7909 11.2059 10.8504 11.166 10.9004 11.1156C10.9973 11.0153 11.0514 10.8814 11.0514 10.742C11.0514 10.6026 10.9973 10.4686 10.9004 10.3684ZM5.14324 9.13739C4.39902 9.13739 3.67151 8.91671 3.05272 8.50324C2.43392 8.08978 1.95163 7.5021 1.66683 6.81453C1.38203 6.12697 1.30751 5.37038 1.4527 4.64047C1.59789 3.91055 1.95627 3.24007 2.48251 2.71383C3.00875 2.18759 3.67922 1.82921 4.40914 1.68402C5.13906 1.53883 5.89564 1.61335 6.58321 1.89815C7.27078 2.18295 7.85845 2.66524 8.27192 3.28404C8.68539 3.90283 8.90607 4.63034 8.90607 5.37456C8.90607 6.37252 8.50963 7.32962 7.80396 8.03529C7.09829 8.74095 6.1412 9.13739 5.14324 9.13739Z"
                          fill="#911320"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="search"
                      name="search"
                      className="bg-transparent text-white placeholder:text-white placeholder:text-center border-2 text-sm rounded-r-lg w-6- max-sm:flex-1- w-80 border-white text-white"
                      placeholder="Search here..."
                    />
                  </form>
                  <div className="grid mt-8 gap-5">
                    {mobLinks.map((navLink) => (
                      <OpenLink
                        close={close}
                        key={navLink.name}
                        name={navLink.name}
                        url={navLink.isNotNested ? navLink.url : navLink.name}
                        items={navLink.items}
                      />
                    ))}
                  </div>
                  <div className="flex text-white gap-2 py-5 mt-10 justify-center">
                    <Link href={'/careers'}>Careers</Link>|
                    <Link href={'/privacy'}>Privacy</Link>
                  </div>
                  <div className="absolute -bottom-16 right-0 left-0 w-full h-[136px]">
                    <Image src={pattern} fill alt="pattern" />
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </nav>
      </CenterContent>
    </header>
  )
};

function OpenLink({
  name,
  url,
  items,
  close
}: {
  name: string;
  url: string;
  close:any;
  items: { name: string; url: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex gap-10 items-center">
        {items.length > 0 ?
        <button
        onClick={(e) => {
          setOpen(!open)
        }}
        className={`${open ? "text-red-300" : "text-white"} text-lg  capitalize`}
      >
        {name}
      </button>
        : 
      <Link
        href={url}
        onClick={(e) => {
          close()
        }}
        className={`${open ? "text-red-300" : "text-white"} text-lg  capitalize`}
      >
        {name}
      </Link>}
        
        {items.length > 0 && (
          <button onClick={() => setOpen(!open)}>
            <Image src={downarrow} width={20} height={20} alt="arrow" />
          </button>
        )}
      </div>
      {open && (
        <div className="flex flex-col text-white mt-4 gap-4">
          {items.map((item, index) => (
            <Link key={index} href={item.url} className={`capitalize`} onClick={() => close()}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default Navbar;
