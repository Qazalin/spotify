import { numberWithCommas, trpc } from "@spotify/utils";
import Image from "next/future/image";
import { Verified } from "../icons/Verified";

export const ArtistHeader: React.FC<{ id: string }> = ({ id }) => {
  const { data, error } = trpc.useQuery([
    "artist.getInfo",
    {
      id: id,
    },
  ]);

  if (data) {
    return (
      <div
        className={`bg-opacity-5 w-full h-72 flex justify-start items-center relative`}
      >
        <Image
          src={data.backgroundImage}
          alt={data.name}
          width={400}
          height={288}
          className="w-full h-full object-cover absolute -z-0"
        />
        <div className="z-10 ml-5 lg:ml-10 flex flex-col items-start space-y-2 self-end mb-2">
          <div className="flex justify-center items-center space-x-1">
            <Verified className="w-5 h-5 fill-blue-500" />
            <p className="font-light text-sm">Verified Artist</p>
          </div>
          <p className="text-2xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold">
            {data.name}
          </p>
          <p>{numberWithCommas(data._count.favoriteArtist)} Followers</p>
        </div>
      </div>
    );
  }
  return null;
};
