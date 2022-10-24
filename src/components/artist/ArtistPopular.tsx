import { SongRow } from "@spotify/components/playlist/PlaylistSongRow";
import { trpc } from "@spotify/utils";
import { useStoreState } from "@spotify/utils/state";
import { SongModel } from "@spotify/utils/state/stateModel";
import { useEffect } from "react";
import { PlayPauseButton } from "../shared";
import { Button } from "../shared/Utils/Button";
import { ButtonWithOptimisticUpdate } from "../shared/Utils/ButtonWithOptimisticUpdate";
import { SongRowWrapper } from "@spotify/components/shared/Wrappers/SongWrapper";

export const ArtistPopular: React.FC<{
  id: string;
}> = ({ id }) => {
  const activeSong = useStoreState((state) => state.activeSong);
  const isPlaying = useStoreState((state) => state.isPlaying);
  const { data, isLoading } = trpc.useQuery(["artist.getTopSongs", { id }]);
  const { data: isFavoriteArtist, isLoading: isFavoriteArtistLoading } =
    trpc.useQuery(["favorite.isFavoriteArtist", { id }]);

  const {
    mutate: toggleFavoriteArtist,
    isLoading: isToggleFavoriteArtistLoading,
    isError: isToggleFavoriteArtistError,
    isSuccess: isToggleFavoriteArtistSuccess,
  } = trpc.useMutation("favorite.toggleFavoriteArtist");

  useEffect(
    () => console.log(isToggleFavoriteArtistLoading),
    [isToggleFavoriteArtistLoading]
  );

  const songs = data?.albums.map((a) => a.songs).flat();

  const newActiveQueue: SongModel[] | undefined = data?.albums
    .map((a) => {
      return a.songs.map((s) => {
        return {
          id: s.id,
          name: s.name,
          duration: s.duration,
          url: s.url,
          createdAt: s.createdAt,
          Album: {
            name: a.name,
            id: a.id,
            image: a.image,
            Artist: {
              name: a.Artist.name,
              id: a.Artist.id,
            },
          },
        };
      });
    })
    .flat();

  return (
    <div>
      <div className="flex space-x-5 mb-5">
        <PlayPauseButton
          className="w-10 h-10 bg-green-400 p-2"
          newActiveQueue={newActiveQueue}
          activeSong={
            activeSong?.Album.Artist.id === id
              ? activeSong
              : newActiveQueue && newActiveQueue[0]
          }
        />
        <ButtonWithOptimisticUpdate
          action={`${isFavoriteArtist ? "unfollowed" : "followed"} ${
            data?.name
          }`}
          className="text-[0.6rem] leading-[0.3rem] uppercase p-1 px-3 border-2 border-zinc-400 rounded-sm tracking-widest font-bold text-zinc-200 h-6 self-center"
          onClick={() => toggleFavoriteArtist({ id })}
          isLoading={isToggleFavoriteArtistLoading}
          firstChild={isFavoriteArtist ? "following" : "follow"}
          nextChild={isFavoriteArtist ? "follow" : "following"}
          isSuccessful={isToggleFavoriteArtistSuccess}
          isError={isToggleFavoriteArtistError}
          mutate={() => toggleFavoriteArtist({ id })}
        />
      </div>
      <p className="text-lg md:text-xl lg:text-2xl font-bold mb-5">Popular</p>
      <div className="flex flex-col space-y-2 w-full max-w-3xl">
        {Array(3)
          .fill(0)
          .map((_, i) => {
            const s = songs ? songs[i] : undefined;
            const img =
              data?.albums.find((a) => a.id === s?.albumId)?.image || "";
            return (
              <SongRowWrapper
                key={`song-row-${i}`}
                idx={i + 1}
                songId={s?.id}
                artistId={data?.id || ""}
                artistName={data?.name || ""}
                songName={s?.name}
                songDateAdded={s?.createdAt}
                songDuration={s?.duration}
                albumImage={img}
                songUrl={s?.url}
                clickLink={`/app/artist/${data?.id}`}
                isActive={activeSong?.id === s?.id}
                isPlaying={isPlaying}
                variant="minimal"
                isLoading={isLoading}
              />
            );
          })}
      </div>
    </div>
  );
};
