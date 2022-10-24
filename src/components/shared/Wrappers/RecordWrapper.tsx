import { Box } from "@spotify/components/shared/Utils/Box";
import { LoaderSkeleton } from "../Utils";
import { PropsWithLoading } from "@spotify/types/props";
import { useRef, useState } from "react";
import Image from "next/image";
import { PlayPauseButton } from "../PlayPauseButton";

type RecordWrapperProps = PropsWithLoading<
  RecordWrapperContentProps & RecordWrapperLoadingProps
>;

export const RecordWrapper: React.FC<RecordWrapperProps> = ({
  rounded,
  isLoading,
  ...props
}) => {
  return (
    <Box
      className="bg-zinc-800 p-2 rounded-md bg-opacity-25 hover:bg-opacity-80 transition-all duration-300 cursor-pointer px-3 row-span-1 col-span-1 relative max-w-[10rem]"
      isLoading={isLoading}
    >
      {isLoading ? (
        <RecordWrapperLoading rounded={rounded} />
      ) : (
        <RecordWrapperContent {...props} rounded={rounded} />
      )}
    </Box>
  );
};

type RecordWrapperLoadingProps = {
  rounded?: boolean;
};
const RecordWrapperLoading: React.FC<RecordWrapperLoadingProps> = ({
  rounded,
}) => {
  return (
    <>
      <LoaderSkeleton
        className={`w-32 h-32 ${
          rounded ? "rounded-full" : "rounded-none"
        } mb-3`}
      />
      <LoaderSkeleton className="w-full h-8" />
    </>
  );
};

type RecordWrapperContentProps = {
  title?: string;
  subtitle?: string;
  imgSrc?: string;
  href?: string;
  onPlay?: () => void;
  rounded?: boolean;
};
const RecordWrapperContent: React.FC<RecordWrapperContentProps> = ({
  title,
  imgSrc,
  subtitle,
  href,
  rounded,
  onPlay,
}) => {
  const [showPlay, setShowPlay] = useState(false);
  const playButtonRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseEnter={() => setShowPlay(true)}
      onMouseLeave={() => setShowPlay(false)}
    >
      <div className="relative">
        <Image
          src={imgSrc || ""}
          width={200}
          height={200}
          alt="cardImage"
          className={`${rounded ? "rounded-full" : "rounded-none"} mb-3`}
        />
        <div
          className={`bg-green-400 rounded-full w-8 h-8 flex justify-center items-center absolute -bottom-2 -right-1 hover:scale-105 transition-all cursor-default shadow-lg shadow-zinc-900 ${
            showPlay ? "opacity-100" : "opacity-0"
          }`}
          onClick={onPlay}
          ref={playButtonRef}
        >
          <PlayPauseButton />
        </div>
      </div>

      <h3 className="text-md font-[600]">{title}</h3>
      <p className="text-sm capitalize text-zinc-400 mt-1">{subtitle}</p>
    </div>
  );
};
