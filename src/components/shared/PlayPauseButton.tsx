import { useStoreActions, useStoreState } from "@spotify/utils/state";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export const PlayPauseButton: React.FC<{
  className?: string;
}> = ({ className }) => {
  const isPlaying = useStoreState((state) => state.songs.isPlaying);
  const setIsPlaying = useStoreActions((actions) => actions.songs.setIsPlaying);

  return (
    <div
      className={
        "p-1 bg-white rounded-full flex justify-center items-center " +
        className
      }
    >
      {isPlaying ? (
        <BsPauseFill
          className="text-base w-full h-full text-black hover:scale-105"
          onClick={() => setIsPlaying(false)}
        />
      ) : (
        <BsFillPlayFill
          className="text-base w-full h-full text-black hover:scale-105"
          onClick={() => setIsPlaying(true)}
        />
      )}
    </div>
  );
};
