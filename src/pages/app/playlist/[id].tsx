import { useRouter } from "next/router";
import { NextPage } from "next";
import { PlaylistTable, PlaylistHeader } from "@spotify/components/playlist";
import { LoadingScreen } from "components/shared/LoadingScreen";
import { trpc } from "@spotify/utils/trpc";
import { AppLayout } from "components/player/AppLayout";

const PlaylistPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data: playlist, isLoading } = trpc.useQuery([
    "playlist.getPlaylistById",
    { id: id as string }, // danger stuff
  ]);

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (playlist) {
    return (
      <AppLayout>
        <PlaylistHeader playlist={playlist} />
        <PlaylistTable playlist={playlist} />
      </AppLayout>
    );
  }
  return <div>Playlist not found</div>;
};

export default PlaylistPage;
