import { PropsWithClassName } from "@spotify/types/props";

export const LoaderSkeleton: React.FC<
  PropsWithClassName<{ circle?: boolean }>
> = ({ className, circle }) => {
  return (
    <div
      className={`bg-zinc-700 animate-pulse ${
        circle ? "rounded-full" : "rounded"
      } ${className}`}
    />
  );
};
