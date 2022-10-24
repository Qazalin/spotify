import { Box } from "@spotify/components/shared/Utils/Box";
import { LoaderSkeleton } from "../Utils";

type RecordWrapperProps = {
  title?: string;
  subtitle?: string;
  imgSrc?: string;
  href?: string;
  onPlay?: () => void;
  rounded?: boolean;
  isLoading: boolean;
};

export const RecordWrapper: React.FC<RecordWrapperProps> = ({
  title,
  imgSrc,
  subtitle,
  href,
  rounded,
  onPlay,
  isLoading,
}) => {
  return (
    <Box
      className="bg-zinc-800 p-2 rounded-md bg-opacity-25 hover:bg-opacity-80 transition-all duration-300 cursor-pointer px-3 row-span-1 col-span-1 relative max-w-[10rem]"
      isLoading={true}
    >
      <LoaderSkeleton
        className={`w-32 h-32 ${
          rounded ? "rounded-full" : "rounded-none"
        } mb-3`}
      />
      <LoaderSkeleton className="w-full h-8" />
    </Box>
  );
};
