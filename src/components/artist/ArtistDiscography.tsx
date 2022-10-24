import { trpc } from "@spotify/utils";
import { CardWrapper } from "../shared/CardWrapper";
import { AlbumCard } from "@spotify/components/shared/Cards";
import { RecordWrapper } from "../shared/Wrappers/RecordWrapper";

export const ArtistDiscography: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery(["artist.getDiscography", { id }]);

  const components = data.map((d, i) => (
    <RecordWrapper key={i} isLoading={true} />
  ));

  return <CardWrapper title="Discography" cards={components} />;
};

/*
 *    <AlbumCard
      key={i}
      name={d.name}
      createdAt={d.createdAt}
      img={d.image}
      id={d.id}
    />

    */
