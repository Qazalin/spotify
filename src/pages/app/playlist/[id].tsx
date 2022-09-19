import { AppLayout } from "components/player/AppLayout";
import { PlaylistTable } from "components/player/PlaylistTable";
import { LoadingScreen } from "components/shared/LoadingScreen";
import { PlaylistHeader } from "components/shared/RecordHeader";
import { useRouter } from "next/router";
import { trpc, inferQueryOutput } from "utils/trpc";

const PlaylistPage = () => {
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
