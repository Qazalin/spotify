import { useRouter } from "next/router";
import { NextPage } from "next";
import { PlaylistTable, PlaylistHeader } from "@spotify/components/playlist";
import { LoadingScreen } from "components/shared/LoadingScreen";
import { trpc } from "@spotify/utils/trpc";
import { AppLayout } from "@spotify/components/app";
import { useStoreActions } from "@spotify/utils/state";
import { useEffect, useState } from "react";
import { PlayPauseButton } from "@spotify/components/shared";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const PlaylistPage: NextPage = () => {
  const router = useRouter();
  const setSongs = useStoreActions((actions) => actions.songs.setAllSongs);
  const [isFave, setIsFave] = useState(false); // init state should change in the userEffect when the playlist is fetched

  const { id } = router.query;
  const { data: playlist, isLoading } = trpc.useQuery([
    "playlist.getPlaylistById",
    { id: id as string }, // first time, this is undefined
  ]);
  useEffect(() => {
    if (playlist) {
      setSongs(playlist.songs);
    }
  }, [playlist, setSongs]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  function handleLikeRecord() {
    setIsFave(!isFave);
    // TODO api calls
  }
  if (playlist) {
    return (
      <AppLayout>
        <PlaylistHeader playlist={playlist} />
        <div className="px-5 mt-5">
          <div className="flex space-x-2 mb-5">
            <PlayPauseButton className="w-10 h-10 bg-green-400 p-2" />
            <div className="w-10 h-10 p-2">
              {isFave ? (
                <AiFillHeart
                  className={`w-full h-full text-zinc-400 fill-green-400`}
                  onClick={handleLikeRecord}
                />
              ) : (
                <AiOutlineHeart
                  className={`w-full h-full text-zinc-400 hover:text-zinc-100 stroke-zinc-100`}
                  onClick={handleLikeRecord}
                />
              )}
            </div>
          </div>
          <PlaylistTable playlist={playlist} />
        </div>
      </AppLayout>
    );
  }
  return <div>Playlist not found</div>;
};

export default PlaylistPage;
