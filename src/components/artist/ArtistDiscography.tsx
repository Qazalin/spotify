import { trpc } from "@spotify/utils";
import { AlbumCard } from "../shared/RecordCard";
import { RecordsRowWrapper } from "../shared/RecordsRowWrapper";

export const ArtistDiscography: React.FC<{ id: string }> = ({ id }) => {
  const { data } = trpc.useQuery(["artist.getDiscography", { id }]);

  if (!data) return null;

  return (
    <RecordsRowWrapper title="discography">
      {data.map((d, i) => (
        <AlbumCard
          key={i}
          name={d.name}
          createdAt={d.createdAt}
          img={d.image}
        />
      ))}
    </RecordsRowWrapper>
  );
};
