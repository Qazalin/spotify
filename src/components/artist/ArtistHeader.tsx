import { numberWithCommas, trpc } from "@spotify/utils";
import { LoaderSkeleton } from "../shared/Utils";
import { HeaderWrapper } from "../shared/Wrappers/HeaderWrapper";

export const ArtistHeader: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery([
    "artist.getInfo",
    {
      id: id,
    },
  ]);

  return (
    <HeaderWrapper
      type="artist"
      heading={data?.name}
      imageUrl={data?.image}
      isVerified={data?.isVerified}
      isLoading={isLoading}
      isRounded={true}
    >
      {isLoading ? (
        <LoaderSkeleton className="w-30 h-3" />
      ) : (
        <p>{numberWithCommas(data?._count.favoriteArtist || 0)} followers</p>
      )}
    </HeaderWrapper>
  );
};
