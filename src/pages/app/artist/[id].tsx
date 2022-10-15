import { AppLayout } from "@spotify/components/app";
import { ArtistDiscography } from "@spotify/components/artist/ArtistDiscography";
import { ArtistFeaturedIn } from "@spotify/components/artist/ArtistFeaturedIn";
import { ArtistHeader } from "@spotify/components/artist/ArtistHeader";
import { ArtistPopular } from "@spotify/components/artist/ArtistPopular";
import { ArtistSubheader } from "@spotify/components/artist/ArtistSubheader";
import { SimilarArtists } from "@spotify/components/artist/SimilarArtists";
import { useRouter } from "next/router";

const ArtistPage = () => {
  const router = useRouter();

  const { id } = router.query as { id: string }; // TODO

  return (
    <AppLayout>
      <ArtistHeader id={id} />
      <div className="mt-5 px-5">
        <ArtistSubheader />
        <ArtistPopular id={id} />
        <ArtistDiscography id={id} />
        <SimilarArtists id={id} />
        <ArtistFeaturedIn id={id} />
      </div>
    </AppLayout>
  );
};

export default ArtistPage;
