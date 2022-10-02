import { trpc } from "@spotify/utils";
import { RecordSection } from "../app/AppMain";
import { AlbumCard } from "../shared/RecordCard";

export const ArtistDiscography: React.FC<{ id: string }> = ({ id }) => {
  const { data } = trpc.useQuery(["artist.getDiscography", { id }]);

  if (!data) return null;

  return (
    <RecordSection title="discography" sectionId="124">
      {data.map((d, i) => {
        return (
          <AlbumCard
            key={`discography-${i}`}
            name={d.name}
            img={d.image}
            createdAt={d.createdAt}
          />
        );
      })}
    </RecordSection>
  );
};
