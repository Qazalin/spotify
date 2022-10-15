import { RecordCard } from "./RecordCard";

export const AlbumCard: React.FC<{
  name: string;
  createdAt: Date;
  img: string;
  id: string;
}> = ({ name, createdAt, img, id }) => {
  function handleAlbumPlay() {
    // TODO: Do some router.push thing and analytics maybe?
  }
  return (
    <RecordCard
      title={name}
      subtitle={`${createdAt.getFullYear()} • Album`}
      imgSrc={img}
      href={`/app/album/${id}`}
      onPlay={handleAlbumPlay}
      rounded={false}
    />
  );
};
