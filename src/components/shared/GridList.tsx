import { PropsWithChildren } from "react";

export const GridList: React.FC<
  PropsWithChildren<{ title: string; sectionId: string }>
> = ({ title, sectionId, children }) => {
  return (
    <div>
      <h1 className="text-md md:text-lg lg:text-xl font-semibold">
        <span className="capitalize"> {title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1, title.length).join(" ")}
      </h1>
      <div className="mt-3 grid grid-cols-9 gap-2 w-full h-64">{children}</div>
    </div>
  );
};
