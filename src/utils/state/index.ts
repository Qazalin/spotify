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
