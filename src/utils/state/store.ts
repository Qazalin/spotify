import { createTypedHooks, createStore, action } from "easy-peasy";
import { IStore } from "./models";

export const store = createStore<IStore>({
  activeSong: {
    setActiveSong: action((state, payload) => {
      state.song = payload;
    }),
    setIsPlaying: action((state, payload) => {
      state.isPlaying = payload;
    }),
    setPlaylistId: action((state, payload) => {
      state.playlistId = payload;
    }),
  },
});

export const typedHooks = createTypedHooks<IStore>();

export const useStoreDispatch = typedHooks.useStoreDispatch;
