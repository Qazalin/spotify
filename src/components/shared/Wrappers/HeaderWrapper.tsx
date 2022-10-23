import { PropsWithChildren, SyntheticEvent, useState } from "react";
import Image from "next/image";

import { Verified } from "@spotify/components/shared/Icons/Verified";
import { LoaderSkeleton } from "@spotify/components/shared/Utils/LoaderSkeleton";
import { PropsWithLoading } from "@spotify/types/props";
import { useImageLoaded } from "@spotify/utils/hooks/useImageLoaded";

type HeaderWrapperProps = HeaderImageProps &
  HeaderInfoProps &
  HeaderHeadingProps;

/// TODO: Make a loading context, passing to every single child is gross
export const HeaderWrapper: React.FC<
  PropsWithChildren<PropsWithLoading<HeaderWrapperProps>>
> = ({
  type,
  isRounded,
  children,
  imageUrl,
  isLoading,
  isVerified,
  heading,
}) => {
  return (
    <div
      className={`bg-opacity-5 w-full h-64 px-3 flex justify-start items-center pt-8 relative bg-gradient-to-b from-zinc-700 to-transparent`}
    >
      <div className="flex items-center space-x-4 relative h-full w-full">
        <HeaderImage
          imageUrl={imageUrl}
          isRounded={isRounded}
          isLoading={isLoading}
        />
        <div className="space-y-4">
          <HeaderInfo
            type={type}
            isLoading={isLoading}
            isVerified={isVerified}
          />
          <HeaderHeading heading={heading} isLoading={isLoading} />
          {children}
        </div>
      </div>
    </div>
  );
};

type HeaderImageProps = {
  imageUrl?: string;
  isRounded?: boolean;
};

const HeaderImage: React.FC<PropsWithLoading<HeaderImageProps>> = ({
  imageUrl,
  isRounded,
  isLoading,
}) => {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const loading = isLoading || isImgLoading;

  function handleLoad(e: SyntheticEvent<HTMLImageElement, Event>) {
    const target = e.target as HTMLImageElement;
    if (target.complete) {
      setIsImgLoading(false);
    }
  }

  return (
    <>
      {loading && (
        <LoaderSkeleton
          className={`mb-3 w-32 h-32 animate-pulse bg-zinc-700`}
          circle={isRounded}
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {imageUrl && (
        <Image
          src={imageUrl}
          width={170}
          height={170}
          alt="cardImage"
          className={`${
            isRounded ? "rounded-full" : "rounded-none"
          } mb-3 object-cover shadow-2xl show-black ${loading ? "hidden" : ""}`}
          onLoad={(e) => handleLoad(e)}
        />
      )}
    </>
  );
};

type HeaderInfoProps = {
  type: "profile" | "playlist" | "artist";
  isVerified?: boolean;
};
const HeaderInfo: React.FC<PropsWithLoading<HeaderInfoProps>> = ({
  isLoading,
  type,
  isVerified,
}) => {
  if (isLoading) return <LoaderSkeleton className={"h-2 w-20"} />;
  else if (type !== "artist")
    return <p className="uppercase text-zinc-200 text-xs font-bold">{type}</p>;
  else if (isVerified)
    return (
      <div className="flex items-center space-x-1">
        <Verified className="w-5 h-5 fill-blue-500" />
        <p className="font-light text-sm">Verified Artist</p>
      </div>
    );
  return <p className="font-light text-sm">Artist</p>;
};

type HeaderHeadingProps = {
  heading?: string;
};
const HeaderHeading: React.FC<PropsWithLoading<HeaderHeadingProps>> = ({
  heading,
  isLoading,
}) => {
  if (isLoading) return <LoaderSkeleton className={"h-5 w-20"} />;
  return (
    <p className="text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold">
      {heading}
    </p>
  );
};
