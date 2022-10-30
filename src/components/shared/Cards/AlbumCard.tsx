import { PropsWithLoading } from "@spotify/types/props";
import { inferQueryOutput, trpc } from "@spotify/utils";
import { RecordWrapper } from "../Wrappers/RecordWrapper";

type AlbumCardProps = PropsWithLoading<{
  name?: string;
  createdAt?: Date;
  img?: string;
  id?: string;
}>;

export const AlbumCard: React.FC<AlbumCardProps> = ({
  name,
  createdAt,
  img,
  id,
  isLoading,
}) => {
  const { data: songs, refetch } = trpc.useQuery(
    ["song.getSongsByAlbum", { albumId: id ?? "" }],
    {
      enabled: false,
    }
  );

  function onPlay() {
    console.log("AlbumCard: refetching songs");
    refetch().then((d) => console.log(d));
  }

  function getNewActiveQeue(data?: inferQueryOutput<"song.getSongsByAlbum">) {
    if (data && data !== null) {
      console.log("AlbumCard: Getting new active queue");
      const songs = data.map((song) => {
        const s = {
          id: song.id,
          name: song.name,
          duration: song.duration,
          url: song.url,
          createdAt: song.createdAt,
          Album: {
            name: name ?? "",
            image: img ?? "",
            id: id ?? "",
            Artist: {
              name: song.Album.Artist.name,
              id: song.Album.Artist.id,
            },
          },
        };
        return s;
      });
      return songs;
    }
  }

  return (
    <RecordWrapper
      isLoading={isLoading}
      title={name}
      subtitle={`${createdAt?.getFullYear()} • Album`}
      imgSrc={img}
      href={`/app/album/${id}`}
      newActiveQueue={getNewActiveQeue(songs)}
      onPlay={onPlay}
      rounded={false}
    />
  );
};
