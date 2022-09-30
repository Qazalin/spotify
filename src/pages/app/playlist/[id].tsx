import { useRouter } from "next/router";
import { NextPage } from "next";
import { PlaylistTable, PlaylistHeader } from "@spotify/components/playlist";
import { LoadingScreen } from "components/shared/LoadingScreen";
import { trpc } from "@spotify/utils/trpc";
import { AppLayout } from "@spotify/components/app";
import { useStoreActions } from "@spotify/utils/state";
import { useEffect, useState } from "react";
import { Notification, PlayPauseButton } from "@spotify/components/shared";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorite } from "@spotify/utils/hooks/useFavorite";
// TODO import { assertIsValidId } from "@spotify/utils/typeGaurds";

const PlaylistPage: NextPage = () => {
  const router = useRouter();
  const setSongs = useStoreActions((actions) => actions.songs.setAllSongs);
  const [isFavoritePlaylist, setIsFavoritePlaylist] = useState(false); // init state should change in the userEffect when the playlist is fetched

  // queries
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

  // effects

  // set the songs and isFavorite states when the playlist is fetched
  useEffect(() => {
    if (playlist) {
      setSongs(playlist.songs);
    }
  }, [playlist, setSongs]);

  useEffect(() => {
    if (isFavorite) {
      setIsFavoritePlaylist(isFavorite);
    }
  }, [isFavorite]);

  // handle adding/removing a playlist from favorites
  useEffect(() => {
    if (playlist) {
      toggleFavorite({
        id: playlist.id as string,
      });
    }
  }, [isFavoritePlaylist, id, toggleFavorite, playlist]);

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
              {isFavoritePlaylist ? (
                <AiFillHeart
                  className={`w-full h-full text-zinc-400 fill-green-400 my-auto`}
                  onClick={() => setIsFavoritePlaylist((s) => !s)}
                />
              ) : (
                <AiOutlineHeart
                  className={`w-full h-full text-zinc-400 hover:text-zinc-100 stroke-zinc-100`}
                  onClick={() => setIsFavoritePlaylist((s) => !s)}
                />
              )}
            </div>
          </div>
          <PlaylistTable playlist={playlist} />
        </div>
        <Notification
          msg={
            isFavoritePlaylist
              ? "Saved to Your Library"
              : "Removed from Your Library"
          }
          state={isFavoritePlaylist}
        />
      </AppLayout>
    );
  }
  return <div>Playlist not found</div>;
};

export default PlaylistPage;
