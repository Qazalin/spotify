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

  function getFollowerCountText() {
    const total = data?._count.favoriteArtist;
    if (total) {
      if (total === 1) {
        return "1 follower";
      }
      return `${numberWithCommas(total)} followers`;
    }
    return "0 followers";
  }
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
        <p>{getFollowerCountText()}</p>
      )}
    </HeaderWrapper>
  );
};
