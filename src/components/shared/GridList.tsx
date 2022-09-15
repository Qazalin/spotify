import { PropsWithChildren, useEffect, useState } from "react";
import { useTailwindScreen } from "utils/responsiveBreakpoints";

export const GridList: React.FC<
  PropsWithChildren<{
    title: string;
    sectionId: string;
    gridCols: string;
    hasMore: boolean;
  }>
> = ({ title, sectionId, children, gridCols, hasMore }) => {
  // TODO add a routing for sectionId
  return (
    <div className="mt-5 relative w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-md md:text-lg lg:text-xl font-semibold">
          <span className="capitalize"> {title.split(" ")[0]}</span>{" "}
          {title.split(" ").slice(1, title.length).join(" ")}
        </h1>
        {hasMore ? (
          <p className="text-xs text-zinc-400 font-bold cursor-pointer">
            Show all
          </p>
        ) : null}
      </div>
      <div className={`mt-3 grid ${gridCols} gap-2 w-full h-64`}>
        {children}
      </div>
    </div>
  );
};
