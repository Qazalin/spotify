import { PropsWithChildren } from "react";
import { PropsWithClassName } from "@spotify/types/props";

export type BoxProps = PropsWithChildren<
  PropsWithClassName<{
    isLoading?: boolean;
  }>
>;

export const Box: React.FC<BoxProps> = ({ className, children, isLoading }) => {
  const hoverClasses = className
    ?.split(" ")
    .map((c) => {
      if (c.includes("hover:")) {
        return c;
      }
    })
    .join(" ");

  const sharedClasses = className
    ?.split(" ")
    .filter((c) => !c.includes("hover:"))
    .join(" ");

  return (
    <div className={`${sharedClasses} ${!isLoading && hoverClasses}`}>
      {children}
    </div>
  );
};
