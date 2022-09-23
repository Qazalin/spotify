import { typedHooks } from "./store";

export const useStoreState = typedHooks.useStoreState;

export const useActiveSong = () => {
  const activeSong = useStoreState((state) => state.activeSong.song);
  return activeSong;
};

export const useIsPlaying = () => {
  const activeSong = useStoreState((state) => state.activeSong.isPlaying);
  return activeSong;
};
