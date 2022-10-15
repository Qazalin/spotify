import { PropsWithChildren } from "react";

export const RecordsRowWrapper: React.FC<
  PropsWithChildren<{ title: string }>
> = ({ children, title }) => {
  return (
    <div className="w-full mt-5">
      <h1 className="text-md md:text-lg lg:text-xl font-semibold mb-3">
        <span className="capitalize"> {title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1, title.length).join(" ")}
      </h1>
      <div className="flex space-x-3">{children}</div>
    </div>
  );
};
