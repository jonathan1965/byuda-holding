"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const PageBreadcrumb = () => {
  const pathnameChunks = usePathname().split("/").filter(Boolean);
  const isServicePage = pathnameChunks[0] === "sectors" && pathnameChunks.length > 1;
  const lastPathnameChunk = pathnameChunks[pathnameChunks.length - 1].split("-").join(" ");

  return (
    <div className="flex gap-5">
      <div className="w-1 bg-black flex-shrink-0"></div>
      <div className="flex flex-col gap-2">
        <div className="flex uppercase gap-2 flex-wrap">
          <Link href="/">Home</Link>
          {pathnameChunks.map((chunk, index) => (
            <Fragment key={index}>
              <span>|</span>
              <Link href={`/${pathnameChunks.slice(0, index + 1).join("/")}`} className="uppercase">
                {chunk}
              </Link>
            </Fragment>
          ))}
        </div>
        <span className="text-xl md:text-3xl capitalize">
          {isServicePage
            ? `${lastPathnameChunk} services`
            : pathnameChunks[0]}
        </span>
      </div>
    </div>
  );
};
export default PageBreadcrumb;
