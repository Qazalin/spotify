import { PropsWithLoading } from "@spotify/types/props";
import { RecordWrapper } from "../Wrappers/RecordWrapper";
import { RecordCard } from "./RecordCard";

type AlbumCardProps = PropsWithLoading<{
  name?: string;
  createdAt?: Date;
  img?: string;
  id?: string;
}>;

export const AlbumCard: React.FC<AlbumCardProps> = ({
  name,
  createdAt,
  img,
  id,
  isLoading,
}) => {
  function handleAlbumPlay() {
    // TODO: Do some router.push thing and analytics maybe?
  }
  return (
    <RecordWrapper
      isLoading={isLoading}
      title={name}
      subtitle={`${createdAt?.getFullYear()} • Album`}
      imgSrc={img}
      href={`/app/album/${id}`}
      onPlay={handleAlbumPlay}
      rounded={false}
    />
  );
};
