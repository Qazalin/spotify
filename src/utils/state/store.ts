import { createTypedHooks, createStore, action } from "easy-peasy";
import { IStore } from "./models";

export const store = createStore<IStore>({
  activeSong: {
    setActiveSong: action((state, payload) => {
      state.song = payload;
    }),
  },
});

export const typedHooks = createTypedHooks<IStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
