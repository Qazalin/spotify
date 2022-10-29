import { PropsWithClassName } from "@spotify/types/props";
import { useStoreActions, useStoreState } from "@spotify/utils/state";
import { SongModel } from "@spotify/utils/state/stateModel";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export type PlayPauseButtonProps = {
  newActiveQueue?: SongModel[];
  shouldChangeActiveSong: (
    activeSong: SongModel,
    newActiveQueue: SongModel[]
  ) => boolean;
  onPlay?: () => void;
};

export const PlayPauseButton: React.FC<
  PropsWithClassName<PlayPauseButtonProps>
> = ({ className, newActiveQueue, shouldChangeActiveSong, onPlay }) => {
  const isPlaying = useStoreState((state) => state.isPlaying);
  const setIsPlaying = useStoreActions((actions) => actions.setIsPlaying);
  const setActiveQueue = useStoreActions((actions) => actions.setActiveQueue);
  const setActiveSong = useStoreActions((actions) => actions.setActiveSong);
  const activeSong = useStoreState((state) => state.activeSong);

  if (activeSong && newActiveQueue) {
    if (shouldChangeActiveSong(activeSong, newActiveQueue)) {
      setActiveSong(activeSong);
    } else {
      setActiveSong(newActiveQueue[0]);
    }
  }

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
      ) : newActiveQueue ? (
        <BsFillPlayFill
          className="text-base w-full h-full text-black hover:scale-105"
          onClick={() => {
            setIsPlaying(true);
            onPlay && onPlay();
            setActiveQueue(newActiveQueue);
            setActiveSong(activeSong ?? newActiveQueue[0]);
          }}
        />
      ) : (
        <BsFillPlayFill
          className="text-base w-full h-full text-black hover:scale-105"
          onClick={onPlay}
        />
      )}
    </div>
  );
};
