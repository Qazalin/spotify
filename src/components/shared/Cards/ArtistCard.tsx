import { PropsWithLoading } from "@spotify/types/props";
import { inferQueryOutput, trpc } from "@spotify/utils";
import { RecordWrapper } from "../Wrappers/RecordWrapper";
import { SongModel } from "@spotify/utils/state/stateModel";
import { useEffect } from "react";

type ArtistCardProps = PropsWithLoading<{
  name?: string;
  image?: string;
  id?: string;
}>;

export const ArtistCard: React.FC<ArtistCardProps> = ({
  name,
  image,
  id,
  isLoading,
}) => {
  const {
    data,
    refetch: refetchSongs,
    isLoading: isNewQueueLoading,
  } = trpc.useQuery(["artist.getTopSongs", { id: id ?? "" }], {
    enabled: false,
  });

  useEffect(() => {
    console.log("data is: ", data);
    console.log("refetching? ", refetchSongs);
    console.log("new queue loading? ", isNewQueueLoading);
  }, [data, refetchSongs, isNewQueueLoading]);

  function getNewActiveQeue(data?: inferQueryOutput<"artist.getTopSongs">) {
    if (data && data !== null) {
      const songs: SongModel[] = data.albums
        .map((album) => {
          return album.songs.map((song) => {
            const s: SongModel = {
              id: song.id,
              name: song.name,
              duration: song.duration,
              url: song.url,
              createdAt: song.createdAt,
              Album: {
                name: album.name,
                image: album.image,
                id: album.id,
                Artist: {
                  name: name ?? "",
                  id: id ?? "",
                },
              },
            };
            return s;
          });
        })
        .flat();
      return songs;
    }
  }

  function onPlay() {
    refetchSongs().then((d) => console.log(d));
  }

  return (
    <RecordWrapper
      isLoading={isLoading}
      title={name}
      subtitle="Artist"
      imgSrc={image}
      href={`app/artist/${id}`}
      newActiveQueue={getNewActiveQeue(data)}
      onPlay={onPlay}
      shouldChangeActiveSong={(activeSong) => {
        return activeSong?.Album.Artist.id === id ? false : true;
      }}
      rounded={true}
      isNewQueueLoading={isNewQueueLoading}
    />
  );
};
