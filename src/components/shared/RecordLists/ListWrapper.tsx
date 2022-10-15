import { PropsWithChildren } from "react";
// WIP

export const ListWrapper: React.FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <div className="w-full mt-5 space-y-2">
      <h1 className="text-md md:text-lg lg:text-xl font-semibold">
        <span className="capitalize"> {title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1, title.length).join(" ")}
      </h1>
      <div className="flex">{children}</div>
    </div>
  );
};
