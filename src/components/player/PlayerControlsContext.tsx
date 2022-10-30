import { useStoreActions, useStoreState } from "@spotify/utils/state";
import { SongModel } from "@spotify/utils/state/stateModel";
import {
  Dispatch,
  SetStateAction,
  createContext,
  PropsWithChildren,
  useState,
} from "react";

export interface PlayerControlsContextProps {
  isShuffle: boolean;
  setIsShuffle: (isShuffle: boolean) => void;
  isRepeat: boolean;
  setIsRepeat: (isRepeat: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  onChange: (type: "next" | "prev") => void;
  playedTime: number;
  activeSong?: SongModel;
  setPlayedTime: Dispatch<SetStateAction<number>>;
  setIsSeeking: Dispatch<SetStateAction<boolean>>;
  isSeeking?: boolean;
}

const defaultOptions: PlayerControlsContextProps = {
  isShuffle: false,
  setIsShuffle: () => undefined,
  isRepeat: false,
  setIsRepeat: () => undefined,
  isPlaying: false,
  setIsPlaying: () => undefined,
  onChange: () => undefined,
  playedTime: 0,
  setPlayedTime: () => undefined,
  setIsSeeking: () => undefined,
};
export const PlayerControlsContext =
  createContext<PlayerControlsContextProps>(defaultOptions);

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

  const [playedTime, setPlayedTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  function onChange() {
    console.log("changed");
  }

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
