import { AppLayout } from "@spotify/components/app";
import { ArtistHeader } from "@spotify/components/artist/ArtistHeader";
import { LoadingScreen } from "@spotify/components/shared/LoadingScreen";
import { trpc } from "@spotify/utils";
import { useRouter } from "next/router";

const ArtistPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data: artist, isLoading: isArtistLoading } = trpc.useQuery([
    "artist.getArtistById",
    { id: id as string },
  ]);

  if (isArtistLoading) <LoadingScreen />;
  if (artist) {
    return (
      <AppLayout>
        <ArtistHeader artist={artist} />
      </AppLayout>
    );
  }
};

export default ArtistPage;
