import { createTypedHooks, createStore, action } from "easy-peasy";
import { IStore } from "./models";

export const store = createStore<IStore>({
  songs: {
    activeSongIdx: 0,
    isPlaying: false,

    setAllSongs: action((state, payload) => {
      state.allSongs = payload;
    }),
    setIsPlaying: action((state, payload) => {
      state.isPlaying = payload;
    }),
    setPlaylistId: action((state, payload) => {
      state.playlistId = payload;
    }),
    setActiveSongIdx: action((state, payload) => {
      state.activeSongIdx = payload;
    }),
  },
});

export const typedHooks = createTypedHooks<IStore>();
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
export const useStoreActions = typedHooks.useStoreActions;

export const useActiveSong = () => {
  const activeSongIdx = useStoreState((state) => state.songs.activeSongIdx);
  const allSongs = useStoreState((state) => state.songs.allSongs);

  return allSongs ? allSongs[activeSongIdx] : undefined;
};
