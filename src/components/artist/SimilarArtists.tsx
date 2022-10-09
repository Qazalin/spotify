import { trpc } from "@spotify/utils";
import {
  BreakpointPrefix,
  useTailwindScreen,
} from "@spotify/utils/responsiveBreakpoints";
import { ArtistCard } from "../shared/RecordCard";
import { RecordsRowWrapper } from "../shared/RecordsRowWrapper";

export const SimilarArtists: React.FC<{ id: string }> = ({ id }) => {
  const { data } = trpc.useQuery(["artist.getSimilarArtists", { id }]);
  const width = useTailwindScreen();
  const RECORD_LIMITS: Record<BreakpointPrefix, number> = {
    sm: 2,
    md: 4,
    lg: 6,
    xl: 7,
    "2xl": 8,
  };
  console.log(width);

  if (!data) return null;

  return (
    <RecordsRowWrapper title="fans also like">
      {data.slice(0, RECORD_LIMITS[width]).map((d, i) => {
        return (
          <ArtistCard
            key={`similar-artist-${i}`}
            name={d.name}
            id={d.id}
            image={d.image}
          />
        );
      })}
    </RecordsRowWrapper>
  );
};
