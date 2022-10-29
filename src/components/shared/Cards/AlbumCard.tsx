import { PropsWithLoading } from "@spotify/types/props";
import { trpc } from "@spotify/utils";
import { RecordWrapper } from "../Wrappers/RecordWrapper";

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
  // const {data, refetch} = trpc.useQuery(["albu"])
  return (
    <RecordWrapper
      isLoading={isLoading}
      title={name}
      subtitle={`${createdAt?.getFullYear()} • Album`}
      imgSrc={img}
      href={`/app/album/${id}`}
      // onPlay={handleAlbumPlay}
      rounded={false}
    />
  );
};
