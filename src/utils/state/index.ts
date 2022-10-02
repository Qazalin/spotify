import { createTypedHooks, createStore, action } from "easy-peasy";
import { IStore } from "./models";

export const store = createStore<IStore>({
  songs: {
    isPlaying: false,

    setAllSongs: action((state, payload) => {
      state.allSongs = payload;
    }),
    setIsPlaying: action((state, payload) => {
      state.isPlaying = payload;
    }),
    setSongClickLink: action((state, payload) => {
      state.songClickLink = payload;
    }),
    setActiveSong: action((state, payload) => {
      state.activeSong = payload;
    }),
  },
});

export const typedHooks = createTypedHooks<IStore>();
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
export const useStoreActions = typedHooks.useStoreActions;
