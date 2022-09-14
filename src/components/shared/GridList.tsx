import { PropsWithChildren, useEffect, useState } from "react";
import { useTailwindScreen } from "utils/responsiveBreakpoints";

export const GridList: React.FC<
  PropsWithChildren<{ title: string; sectionId: string }>
> = ({ title, sectionId, children }) => {
  const [gridCols, setGridCols] = useState("grid-cols-9");
  const dim = useTailwindScreen();

  useEffect(() => {
    switch (dim) {
      case "sm":
        setGridCols("gid-cols-2");
        break;
      case "md":
        setGridCols("gid-cols-3");
        break;
      case "lg":
        setGridCols("gid-cols-5");
        break;
      case "xl":
        setGridCols("gid-cols-7");
        break;
      case "2xl":
        setGridCols("gid-cols-9");
        break;
      default:
        setGridCols("gid-cols-9");
    }
  }, [dim]);

  return (
    <div>
      <h1 className="text-md md:text-lg lg:text-xl font-semibold">
        <span className="capitalize"> {title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1, title.length).join(" ")}
      </h1>
      <div className={`mt-3 grid ${gridCols} gap-2 w-full h-64`}>
        {children}
      </div>
    </div>
  );
};
