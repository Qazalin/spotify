import { trpc } from "@spotify/utils";
import { CardWrapper } from "../shared/CardWrapper";
import { AlbumCard } from "@spotify/components/shared/Cards";
import { RecordsRowWrapper } from "../shared/RecordsRowWrapper";

export const ArtistDiscography: React.FC<{ id: string }> = ({ id }) => {
  const { data } = trpc.useQuery(["artist.getDiscography", { id }]);

  if (!data) return null;

  const components = data.map((d, i) => (
    <AlbumCard
      key={i}
      name={d.name}
      createdAt={d.createdAt}
      img={d.image}
      id={d.id}
    />
  ));

  return <CardWrapper title="Discography" cards={components} />;
};
