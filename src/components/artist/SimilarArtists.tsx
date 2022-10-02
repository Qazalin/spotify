import { trpc } from "@spotify/utils";
import { RecordSection } from "../app/AppMain";
import { ArtistCard } from "../shared/RecordCard";

export const SimilarArtists: React.FC<{ id: string }> = ({ id }) => {
  const { data } = trpc.useQuery(["artist.getSimilarArtists", { id }]);
  if (!data) return null;
  return (
    <RecordSection title="fans also like" sectionId="wtf was this">
      {data.map((d, i) => {
        return (
          <ArtistCard
            key={`similar-artist-${i}`}
            name={d.name}
            id={d.id}
            image={d.image}
          />
        );
      })}
    </RecordSection>
  );
};
