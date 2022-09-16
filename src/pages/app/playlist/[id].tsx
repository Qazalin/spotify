import { AppLayout } from "components/player/AppLayout";
import { LoadingScreen } from "components/shared/LoadingScreen";
import { PlaylistHeader } from "components/shared/RecordHeader";
import { useRouter } from "next/router";
import { trpc } from "utils/trpc";

const PlaylistPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: playlist, isLoading } = trpc.useQuery([
    "playlist.getPlaylistById",
    { id },
  ]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  console.log(playlist);
  return <div></div>;
};

export default PlaylistPage;
