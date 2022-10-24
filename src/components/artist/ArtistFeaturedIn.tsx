import { trpc } from "@spotify/utils";
import { PlaylistCard } from "../shared/Cards";
import { CardWrapper } from "../shared/CardWrapper";

export const ArtistFeaturedIn: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery(["artist.getFeaturedIn", { id }]);

  let cards;

  if (data) {
    cards = data.map((d, i) => (
      <PlaylistCard
        name={d?.name}
        key={i}
        image={d?.image}
        id={d?.id}
        isLoading={isLoading}
      />
    ));
  } else {
    cards = Array(4)
      .fill(0)
      .map((_, i) => <PlaylistCard isLoading={isLoading} key={i} />);
  }

  return <CardWrapper title="Featured in" cards={cards} />;
};
