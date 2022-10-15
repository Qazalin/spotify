import { trpc } from "@spotify/utils";
import { PlaylistCard } from "../shared/RecordCard";
import { RecordsRowWrapper } from "../shared/RecordsRowWrapper";
export const ArtistFeaturedIn: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery(["artist.getFeaturedIn", { id }]);
  if (data) {
    return (
      <RecordsRowWrapper title="featured in">
        {data.map((d, i) => (
          <PlaylistCard key={i} name={d.name} img={d.image} desc={d.desc} />
        ))}
      </RecordsRowWrapper>
    );
  }
  return null;
};
