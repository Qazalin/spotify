import { trpc } from "@spotify/utils";
import { CardWrapper } from "../shared/CardWrapper";
import { AlbumCard } from "@spotify/components/shared/Cards";

export const ArtistDiscography: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery(["artist.getDiscography", { id }]);
  let components;

  if (data) {
    components = data.map((d, i) => (
      <AlbumCard
        key={i}
        name={d?.name}
        createdAt={d?.createdAt}
        img={d?.image}
        id={d?.id}
        isLoading={isLoading}
      />
    ));
  } else {
    components = Array(4)
      .fill(0)
      .map((_, i) => {
        return <AlbumCard key={i} isLoading={isLoading} />;
      });
  }
  return <CardWrapper title="Discography" cards={components} />;
};
