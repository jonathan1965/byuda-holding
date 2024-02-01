"use client";
import logo from "@/assets/icons/byumba-holding-logo.svg";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CenterContent from "../layouts/CenterContent";

const navLinks = ["about", "sectors", "portfolio", "newsroom", "careers", "contact"];

const Navbar = () => {
  const pathnameChunks = usePathname().split("/").filter(Boolean);
  const basePath = pathnameChunks[0];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl">
      <CenterContent>
        <nav className="flex items-center justify-between py-5 lg:py-6">
          <Link href="/">
            <Image src={logo} alt="Byumba holding logo icon" className="w-28 md:w-auto" priority />
          </Link>
          <div className="hidden text-lg !text-black font-medium lg:flex gap-12">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={`/${link}`}
                className={`capitalize ${basePath === link ? "text-dark-red" : ""}`}
              >
                {link}
              </Link>
            ))}
          </div>
          <Popover className="relative -mb-2 lg:hidden">
            {({ open }) => (
              <>
                <Popover.Button className="">
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
