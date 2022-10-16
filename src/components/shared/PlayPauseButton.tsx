import { useStoreActions, useStoreState } from "@spotify/utils/state";
import { SongModel } from "@spotify/utils/state/stateModel";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export const PlayPauseButton: React.FC<{
  className?: string;
  newActiveQueue: SongModel[];
}> = ({ className, newActiveQueue }) => {
  const isPlaying = useStoreState((state) => state.isPlaying);
  const setIsPlaying = useStoreActions((actions) => actions.setIsPlaying);
  const setActiveQueue = useStoreActions((actions) => actions.setActiveQueue);
  const setActiveSong = useStoreActions((actions) => actions.setActiveSong);

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
          onClick={() => {
            setIsPlaying(true);
            setActiveQueue(newActiveQueue);
            setActiveSong(newActiveQueue[0]);
          }}
        />
      )}
    </div>
  );
};
