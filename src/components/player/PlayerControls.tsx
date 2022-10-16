import { useEffect, useRef, useState } from "react";
import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IoIosRepeat } from "react-icons/io";
import { PlayerSlider } from "./PlayerSlider";
import ReactHowler from "react-howler";
import { useStoreState, useStoreActions } from "@spotify/utils/state";
import { PlayPauseButton } from "../shared";

export const PlayerControls: React.FC<{
  songUrl: string;
  songDuration: number;
}> = ({ songUrl, songDuration }) => {
  // local state
  const [isSeeking, setIsSeeking] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  // TODO: these are global now? should they be?
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  // global state
  const isPlaying = useStoreState((state) => state.isPlaying);
  const activeSong = useStoreState((state) => state.activeSong);
  const activeQueue = useStoreState((state) => state.activeQueue);

  const activeSongIdx =
    activeQueue?.findIndex((song) => song.id === activeSong?.id) || 0;

  // global actions
  const setIsPlaying = useStoreActions((actions) => actions.setIsPlaying);
  const setActiveSong = useStoreActions((actions) => actions.setActiveSong);

  const songRef = useRef<ReactHowler>(null);

  const onSeek = (e: number) => {
    setIsSeeking(true);
    setPlayedTime(e);
    songRef.current?.seek(e);
  };

  const onSongChange = (action: "next" | "prev") => {
    setPlayedTime(0);
    if (activeQueue) {
      if (action === "next") {
        if (activeSongIdx === activeQueue.length - 1) {
          setActiveSong(activeQueue[0]);
        } else {
          setActiveSong(activeQueue[activeSongIdx + 1]);
        }
      } else {
        if (activeSongIdx === 0) {
          setActiveSong(activeQueue[activeQueue.length - 1]);
        } else {
          setActiveSong(activeQueue[activeSongIdx - 1]);
        }
      }
    }
  };

  useEffect(() => {
    let timerId: number;
    if (isPlaying && !isSeeking) {
      const timer = () => {
        const t = songRef.current?.seek(); // can possibly be undefined
        if (t) {
          setPlayedTime(t);
        }

        timerId = requestAnimationFrame(timer);
      };
      timerId = requestAnimationFrame(timer);
      return () => cancelAnimationFrame(timerId);
    }
  }, [isPlaying, isSeeking]);

  // because this component is always in the layout, we can listen to keys right here
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
      if (e.code === "ArrowLeft") {
        // go to the prev song
        e.preventDefault();
        onSongChange("prev");
      }
      if (e.code === "ArrowRight") {
        // go to the next song
        e.preventDefault();
        onSongChange("next");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex text-2xl justify-center mt-3 items-center space-x-2 text-zinc-400 [&>*]:cursor-pointer">
        <BiShuffle className="text-lg hover:fill-zinc-50" />
        <BiSkipPrevious
          className="hover:fill-zinc-50"
          onClick={() => onSongChange("prev")}
        />
        <PlayPauseButton className="w-7 h-7" />
        <BiSkipNext
          className="hover:fill-zinc-50"
          onClick={() => onSongChange("next")}
        />
        <IoIosRepeat className="hover:fill-zinc-50" />
      </div>
      <ReactHowler
        src={songUrl}
        playing={isPlaying}
        ref={songRef}
        volume={isSeeking ? 0 : 1} // don't play a sound when seeking
        onEnd={() => onSongChange("next")}
      />
      <PlayerSlider
        value={playedTime}
        onChange={onSeek}
        onFinalChange={() => setIsSeeking(false)}
        duration={songDuration}
      />
    </div>
  );
};
