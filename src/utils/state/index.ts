import { createTypedHooks, createStore, action } from "easy-peasy";
import { SpotifyStoreModel } from "./stateModel";

export const store = createStore<SpotifyStoreModel>({
  isPlayling: false,
  isShuffle: false,
  isRepeat: false,
  setActiveQueue: action((state, payload) => {
    state.activeQueue = payload;
  }),
  setActiveQueueId: action((state, payload) => {
    state.activeQueueId = payload;
  }),
  setActiveQueueType: action((state, payload) => {
    state.activeQueueType = payload;
  }),
  setActiveSong: action((state, payload) => {
    state.activeSong = payload;
  }),
  setIsPlaying: action((state, payload) => {
    state.isPlayling = payload;
  }),
  setIsRepeat: action((state, payload) => {
    state.isRepeat = payload;
  }),
  setIsShuffle: action((state, payload) => {
    state.isShuffle = payload;
  }),
});

export const typedHooks = createTypedHooks<SpotifyStoreModel>();
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
export const useStoreActions = typedHooks.useStoreActions;
