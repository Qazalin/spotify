import { SongModel } from "@spotify/utils/state/stateModel";
import { Dispatch, SetStateAction } from "react";

export interface PlayerControlsContextProps {
  isShuffle: boolean;
  setIsShuffle: (isShuffle: boolean) => void;
  isRepeat: boolean;
  setIsRepeat: (isRepeat: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  onSongChange: (type: "next" | "prev") => void;
  playedTime: number;
  activeSong?: SongModel;
  setPlayedTime: Dispatch<SetStateAction<number>>;
  setIsSeeking: Dispatch<SetStateAction<boolean>>;
  isSeeking?: boolean;
}

export const defaultCtxOptions: PlayerControlsContextProps = {
  isShuffle: false,
  setIsShuffle: () => undefined,
  isRepeat: false,
  setIsRepeat: () => undefined,
  isPlaying: false,
  setIsPlaying: () => undefined,
  onSongChange: () => undefined,
  playedTime: 0,
  setPlayedTime: () => undefined,
  setIsSeeking: () => undefined,
};

export function getActiveIdx(
  activeSong?: SongModel,
  activeQueue?: SongModel[]
) {
  return activeQueue?.findIndex((song) => song.id === activeSong?.id) || 0;
}
