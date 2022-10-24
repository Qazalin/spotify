import { PropsWithLoading } from "@spotify/types/props";
import { RecordWrapper } from "../Wrappers/RecordWrapper";

type PlaylistCardProps = PropsWithLoading<{
  name?: string;
  desc?: string;
  image?: string;
  id?: string;
}>;

export const PlaylistCard: React.FC<PlaylistCardProps> = ({
  isLoading,
  name,
  desc,
  image,
  id,
}) => {
  // TODO: Have playlist logic if the playlist img is === ""
  function handlePlay() {}
  return (
    <RecordWrapper
      isLoading={isLoading}
      title={name}
      subtitle={desc}
      imgSrc={image}
      href={`app/playlist/${id}`}
      onPlay={handlePlay}
      rounded={false}
    />
  );
};
