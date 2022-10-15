import { RecordCard } from "./RecordCard";

export const ArtistCard: React.FC<{
  name: string;
  image: string;
  id: string;
}> = ({ name, image, id }) => {
  function handleArtistPlay() {
    /// TODO: state change
  }
  return (
    <RecordCard
      title={name}
      subtitle="Artist"
      imgSrc={image}
      href={`app/artist/${id}`}
      onPlay={handleArtistPlay}
      rounded={true}
    />
  );
};
