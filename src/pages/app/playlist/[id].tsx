import { useRouter } from "next/router";
import { NextPage } from "next";
import { PlaylistTable, PlaylistHeader } from "@spotify/components/playlist";
import { LoadingScreen } from "components/shared/LoadingScreen";
import { trpc } from "@spotify/utils/trpc";
import { AppLayout } from "@spotify/components/app";
import { useStoreActions } from "@spotify/utils/state";
import { useEffect } from "react";
import { Notification, PlayPauseButton } from "@spotify/components/shared";
import { useFavorite } from "@spotify/utils/hooks/useFavorite";
import { FavoriteButton } from "@spotify/components/shared/FavoriteButton";
// TODO import { assertIsValidId } from "@spotify/utils/typeGaurds";

const PlaylistPage: NextPage = () => {
  /* states */
  const router = useRouter();
  const setSongs = useStoreActions((actions) => actions.songs.setAllSongs);

  /* queries */
  const { id } = router.query;

  // TODO: Change these typescasts to a typegaurd that makes sure id is always string
  const { data: playlist, isLoading: isPlaylistLoading } = trpc.useQuery([
    "playlist.getPlaylistById",
    { id: id as string },
  ]);
  const {
    isFavorite,
    toggleFavorite,
    isLoading: isFavoriteLoading,
  } = useFavorite({
    id: id as string,
    recordType: "playlist",
  });

  /* effects */
  // set the songs when the playlist is fetched
  useEffect(() => {
    if (playlist) {
      setSongs(playlist.songs);
    }
  }, [playlist, setSongs]);

  if (isPlaylistLoading || isFavoriteLoading) {
    return <LoadingScreen />;
  }

  if (playlist) {
    return (
      <AppLayout>
        <PlaylistHeader playlist={playlist} />
        <div className="px-5 mt-5">
          <div className="flex space-x-2 mb-5">
            <PlayPauseButton className="w-10 h-10 bg-green-400 p-2" />
            <div className="w-10 h-10 p-2">
              <FavoriteButton
                isFavorite={isFavorite}
                toggleFavorite={toggleFavorite}
              />
            </div>
          </div>
          <PlaylistTable playlist={playlist} />
        </div>
        <Notification
          msg={
            isFavorite ? "Saved to Your Library" : "Removed from Your Library"
          }
          state={isFavorite}
        />
      </AppLayout>
    );
  }
  return <div>Playlist not found</div>;
};

export default PlaylistPage;
