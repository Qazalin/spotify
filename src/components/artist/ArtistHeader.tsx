import { numberWithCommas, trpc } from "@spotify/utils";
import Image from "next/future/image";
import { Verified } from "../icons/Verified";
import { RecordHeader } from "../shared/RecordHeader";

export const ArtistHeader: React.FC<{ id: string }> = ({ id }) => {
  const { data, error } = trpc.useQuery([
    "artist.getInfo",
    {
      id: id,
    },
  ]);

  if (data) {
    return (
      <RecordHeader
        type="artist"
        heading={data.name}
        isRounded={true}
        imgSrc={data.image}
        verifiedArtist={data.isVerified}
      >
        <p>{numberWithCommas(data._count.favoriteArtist)} followers</p>
      </RecordHeader>
    );
  }
  return null;
};
