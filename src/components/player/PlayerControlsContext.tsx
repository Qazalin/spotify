import { useStoreActions, useStoreState } from "@spotify/utils/state";
import { SongModel } from "@spotify/utils/state/stateModel";
import {
  Dispatch,
  SetStateAction,
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useRef,
} from "react";
import ReactHowler from "react-howler";
import {
  PlayerControlsContextProps,
  defaultCtxOptions,
  getActiveIdx,
} from "./utils";

export const PlayerControlsContext =
  createContext<PlayerControlsContextProps>(defaultCtxOptions);

export const PlayerControlsContextProvider: React.FC<
  PropsWithChildren<Record<string, unknown>>
> = ({ children }) => {
  const isPlaying = useStoreState((s) => s.isPlaying);
  const setIsPlaying = useStoreActions((a) => a.setIsPlaying);
  const isShuffle = useStoreState((s) => s.isShuffle);
  const setIsShuffle = useStoreActions((a) => a.setIsShuffle);
  const isRepeat = useStoreState((s) => s.isRepeat);
  const setIsRepeat = useStoreActions((a) => a.setIsRepeat);
  const activeSong = useStoreState((s) => s.activeSong);
  const activeQueue = useStoreState((s) => s.activeQueue);
  const activeSongIdx = getActiveIdx(activeSong, activeQueue);
  const setActiveSong = useStoreActions((a) => a.setActiveSong);

  const [playedTime, setPlayedTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const songRef = useRef<ReactHowler>(null);

  function onSongChange(type: "next" | "prev") {
    if (!activeQueue) return;
    let newIdx: number;
    if (type === "next") {
      newIdx = (activeSongIdx + 1) % activeQueue.length;
    } else {
      newIdx = (activeSongIdx - 1 + activeQueue.length) % activeQueue.length;
    }
    setActiveSong(activeQueue[newIdx]);
  }

  function onChange() {
    console.log("changed");
  }

  useEffect(() => {
    let timerId: number;

    if (!isPlaying && !isSeeking) return;

    const timer = () => {
      const t = songRef.current?.seek();
      if (t) {
        console.log("seeking to ", t);
        setPlayedTime(t);
      }

      timerId = requestAnimationFrame(timer);
    };
    timerId = requestAnimationFrame(timer);
    return () => cancelAnimationFrame(timerId);
  }, [isPlaying, isSeeking]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
      if (e.code === "ArrowLeft") {
        // go to the prev song
        e.preventDefault();
        // onSongChange("prev");
      }
      if (e.code === "ArrowRight") {
        // go to the next song
        e.preventDefault();
        // onSongChange("next");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  const contextValue: PlayerControlsContextProps = {
    activeSong,
    isPlaying,
    setIsPlaying,
    isShuffle,
    setIsShuffle,
    isRepeat,
    setIsRepeat,
    playedTime,
    setPlayedTime,
    onChange,
    isSeeking,
    setIsSeeking,
  };
  return (
    <PlayerControlsContext.Provider value={contextValue}>
      {children}
    </PlayerControlsContext.Provider>
  );
};
