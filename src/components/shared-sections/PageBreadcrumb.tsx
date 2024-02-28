"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, Fragment } from "react";

type Props = {
  pathEndLabel?: string;
  title?: string;
};

const PageBreadcrumb: FC<Props> = ({ pathEndLabel, title }) => {
  const pathnameChunks = usePathname().split("/").filter(Boolean);
  const isServicePage = pathnameChunks[0] === "sectors" && pathnameChunks.length > 1;
  const lastPathnameChunk = pathnameChunks[pathnameChunks.length - 1].split("-").join(" ");

  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 w-1 bg-black"></div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap uppercase gap-2">
          <Link href="/">Home</Link>
          {pathnameChunks.map((chunk, index) => (
            <Fragment key={index}>
              <span>|</span>
              <Link href={`/${pathnameChunks.slice(0, index + 1).join("/")}`} className="uppercase">
                {index === pathnameChunks.length - 1 && pathEndLabel ? pathEndLabel : chunk}
              </Link>
            </Fragment>
          ))}
        </div>
        <span className="text-xl capitalize md:text-3xl">
          {title ? title : isServicePage ? `${lastPathnameChunk} services` : pathnameChunks[0]}
        </span>
      </div>
    </div>
  );
};
export default PageBreadcrumb;
