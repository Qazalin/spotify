import { PropsWithClassName } from "@spotify/types/props";
import { useStoreActions, useStoreState } from "@spotify/utils/state";
import { SongModel } from "@spotify/utils/state/stateModel";
import { useCallback, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { LoadingSpinner } from "./Utils/LoadingSpinner";

export type PlayPauseButtonProps = {
  newActiveQueue?: SongModel[];
  shouldChangeActiveSong?: (
    activeSong: SongModel,
    newActiveQueue: SongModel[]
  ) => boolean;
  onPlay?: () => void;
  isNewQueueLoading?: boolean;
};

export const PlayPauseButton: React.FC<
  PropsWithClassName<PlayPauseButtonProps>
> = ({
  className,
  newActiveQueue,
  shouldChangeActiveSong,
  onPlay,
  isNewQueueLoading,
}) => {
  const isPlaying = useStoreState((state) => state.isPlaying);
  const setIsPlaying = useStoreActions((actions) => actions.setIsPlaying);
  const setActiveQueue = useStoreActions((actions) => actions.setActiveQueue);
  const setActiveSong = useStoreActions((actions) => actions.setActiveSong);
  const activeSong = useStoreState((state) => state.activeSong);

  const handlePlayPause = useCallback(() => {
    console.log(
      "Callback: PlayPauseButton: Got a new active queue: ",
      newActiveQueue
    );
    if (newActiveQueue && newActiveQueue !== null) {
      setActiveQueue(newActiveQueue);
    }
  }, [newActiveQueue, setActiveQueue]);

  useEffect(() => {
    handlePlayPause();
  }, [handlePlayPause]);

  /*
  if (newActiveQueue) {
    if (!activeSong) {
      console.log(
        "PlayPauseButtonProps: No active song, setting the first song of this new queue"
      );
      setActiveSong(newActiveQueue[0]);
    } else {
      if (
        shouldChangeActiveSong &&
        shouldChangeActiveSong(activeSong, newActiveQueue)
      ) {
        setActiveSong(newActiveQueue[0]);
      }
    }
  }
  */

  function getSvgIcon() {
    if (isPlaying) {
      return (
        <BsPauseFill
          className="text-base w-full h-full text-black hover:scale-105"
          onClick={() => setIsPlaying(false)}
        />
      );
    }
    if (isNewQueueLoading) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <LoadingSpinner width={4} height={4} />
        </div>
      );
    } else if (newActiveQueue) {
      return (
        <BsFillPlayFill
          className="text-base w-full h-full text-black hover:scale-105"
          onClick={() => {
            setIsPlaying(true);
            onPlay && onPlay();
            setActiveQueue(newActiveQueue);
            setActiveSong(activeSong ?? newActiveQueue[0]);
          }}
        />
      );
    }

    return (
      <BsFillPlayFill
        className="text-base w-full h-full text-black hover:scale-105"
        onClick={onPlay}
      />
    );
  }

  return (
    <div
      className={
        "p-1 bg-white rounded-full flex justify-center items-center " +
        className
      }
    >
      {getSvgIcon()}
    </div>
  );
};
