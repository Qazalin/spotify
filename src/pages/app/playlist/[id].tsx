import { AppLayout } from "components/player/AppLayout";
import { PlaylistTable } from "components/player/PlaylistTable";
import { LoadingScreen } from "components/shared/LoadingScreen";
import { PlaylistHeader } from "components/shared/RecordHeader";
import { useRouter } from "next/router";
import { trpc } from "utils/trpc";

const PlaylistPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: playlist, isLoading } = trpc.useQuery([
    "playlist.getPlaylistById",
    { id: id as string }, // danger stuff
  ]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  console.log(playlist?.songs);
  return (
    <AppLayout>
      <div className="w-full h-full bg-gray-200">
        <PlaylistHeader playlist={playlist} />
        <PlaylistTable />
      </div>
    </AppLayout>
  );
};

export default PlaylistPage;
