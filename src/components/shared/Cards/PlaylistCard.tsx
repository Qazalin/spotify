import { RecordCard } from "./RecordCard";

export const PlaylistCard: React.FC<{
  name: string;
  desc: string;
  img: string;
  id: string;
}> = ({ name, desc, img, id }) => {
  // TODO: Have playlist logic if the playlist img is === ""
  function handlePlay() {}
  return (
    <RecordCard
      title={name}
      subtitle={desc}
      imgSrc={img}
      href={`app/playlist/${id}`}
      onPlay={handlePlay}
      rounded={false}
    />
  );
};
