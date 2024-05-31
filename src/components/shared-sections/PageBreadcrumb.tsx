"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, Fragment } from "react";

type Props = {
  pathEndLabel?: string;
  title?: string;
  hidden?: boolean
};

const PageBreadcrumb: FC<Props> = ({ pathEndLabel, title, hidden = false }) => {
  const pathnameChunks = usePathname().split("/").filter(Boolean);
  const isServicePage = pathnameChunks[0] === "sectors" && pathnameChunks.length > 1;
  const lastPathnameChunk = pathnameChunks[pathnameChunks.length - 1].split("-").join(" ");

  return (
    <div className="flex gap-5 font-poppins">
      <div className={`flex-shrink-0 ${hidden ? 'hidden md:block' : 'block'} w-1 bg-black`}></div>
      <div className={`flex-col gap-2 ${hidden ? 'hidden md:flex' : "flex"} `}>
        <div className="flex flex-wrap uppercase gap-2">
          <Link className="uppercase !font-thin text-[15px]" href="/">Home</Link>
          {pathnameChunks.map((chunk, index) => (
            <Fragment key={index}>
              <span>|</span>
              <Link href={`/${pathnameChunks.slice(0, index + 1).join("/")}`} className="uppercase !font-thin text-[#911320] text-[15px]">
                {index === pathnameChunks.length - 1 && pathEndLabel ? pathEndLabel : chunk}
              </Link>
            </Fragment>
          ))}
        </div>
        <span className="text-xl capitalize md:text-[35px] mt-2.5">
          {title ? title : isServicePage ? `${lastPathnameChunk} services` : pathnameChunks[0]}
        </span>
      </div>
    </div>
  );
};
export default PageBreadcrumb;
