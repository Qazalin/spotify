import { PropsWithLoading } from "@spotify/types/props";
import { RecordWrapper } from "../Wrappers/RecordWrapper";

type ArtistCardProps = PropsWithLoading<{
  name?: string;
  image?: string;
  id?: string;
}>;

export const ArtistCard: React.FC<ArtistCardProps> = ({
  name,
  image,
  id,
  isLoading,
}) => {
  function handleArtistPlay() {
    /// TODO: state change
  }
  return (
    <RecordWrapper
      isLoading={isLoading}
      title={name}
      subtitle="Artist"
      imgSrc={image}
      href={`app/artist/${id}`}
      onPlay={handleArtistPlay}
      rounded={true}
    />
  );
};
