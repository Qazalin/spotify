import { PropsWithClassName } from "@spotify/types/props";
import { useStoreActions, useStoreState } from "@spotify/utils/state";
import { SongModel } from "@spotify/utils/state/stateModel";
import { useCallback, useContext, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { PlayerControlsContext } from "../player/PlayerControlsContext";
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
  const { isPlaying, setIsPlaying, activeSong } = useContext(
    PlayerControlsContext
  );
  const setActiveQueue = useStoreActions((actions) => actions.setActiveQueue);
  const setActiveSong = useStoreActions((actions) => actions.setActiveSong);
  const activeQueue = useStoreState((state) => state.activeQueue);

  const handlePlayPause = useCallback(() => {
    if (!newActiveQueue || newActiveQueue === null) return;

    console.log(
      "Callback: PlayPauseButton: Got a new active queue: ",
      newActiveQueue
    );

    setActiveQueue(newActiveQueue);
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
  }, [
    newActiveQueue,
    setActiveQueue,
    activeSong,
    setActiveSong,
    shouldChangeActiveSong,
  ]);

  useEffect(() => {
    handlePlayPause();
  }, [handlePlayPause]);

  function handleClickPlay() {
    console.log(
      "PlayPauseButton: Clicked play, the activeSong is: ",
      activeSong
    );
    setIsPlaying(true);
    if (newActiveQueue) {
      setActiveQueue(newActiveQueue);
      setActiveSong(newActiveQueue[0]);
    }
    onPlay && onPlay();
  }

  function getSvgIcon() {
    if (isPlaying && activeQueue === newActiveQueue) {
      return (
        <BsPauseFill
          className="text-base w-full h-full text-black hover:scale-105"
          onClick={() => setIsPlaying(false)}
        />
      );
    }
    if (isNewQueueLoading) {
      return (
        <div className="w-full h-full flex justify-center items-center cursor-not-allowed">
          <LoadingSpinner width={15} height={15} color="black" />
        </div>
      );
    }
    return (
      <BsFillPlayFill
        className="text-base w-full h-full text-black hover:scale-105"
        onClick={handleClickPlay}
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
