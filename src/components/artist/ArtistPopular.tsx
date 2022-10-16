import { SongRow } from "@spotify/components/playlist/PlaylistSongRow";
import { trpc } from "@spotify/utils";
import { useStoreState } from "@spotify/utils/state";

export const ArtistPopular: React.FC<{
  id: string;
}> = ({ id }) => {
  const activeSong = useStoreState((state) => state.activeSong);
  const isPlaying = useStoreState((state) => state.isPlaying);
  const { data, loading } = trpc.useQuery(["artist.getTopSongs", { id }]);

  if (!data) return null;
  const songs = data.albums.map((a) => a.songs).flat();

  return (
    <div>
      <p className="text-lg md:text-xl lg:text-2xl font-bold mb-5">Popular</p>
      <div className="flex flex-col space-y-2 w-full max-w-3xl">
        {songs.map((s, i) => {
          const img = data.albums.find((a) => a.id === s.albumId)?.image || "";
          return (
            <SongRow
              key={`song-row-${i}`}
              idx={i}
              songId={s.id}
              artistId={data?.id || ""}
              artistName={data?.name || ""}
              songName={s.name}
              songDateAdded={s.createdAt}
              songDuration={s.duration}
              albumImage={img}
              songUrl={s.url}
              clickLink={`/app/artist/${data?.id}`}
              isActive={activeSong?.id === s.id}
              isPlaying={isPlaying}
              variant="minimal"
            />
          );
        })}
      </div>
    </div>
  );
};
