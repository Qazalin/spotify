import { trpc } from "@spotify/utils";
import { ArtistCard } from "@spotify/components/shared/Cards";
import { CardWrapper } from "../shared/CardWrapper";

export const SimilarArtists: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery([
    "artist.getSimilarArtists",
    { id },
  ]);

  let cards;

  if (data) {
    cards = data.map((d, i) => (
      <ArtistCard
        key={i}
        name={d?.name}
        image={d?.image}
        id={d?.id}
        isLoading={isLoading}
      />
    ));
  } else {
    cards = Array(4)
      .fill(0)
      .map((_, i) => <ArtistCard isLoading={isLoading} key={i} />);
  }

  return <CardWrapper title="Fans also like" cards={cards} />;
};
