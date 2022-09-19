import { createTypedHooks, createStore, action, Action } from "easy-peasy";

// Models
interface Song {
  id: string;
  name: string;
  duration: number;
  url: string;
  createdAt: Date;
  Album: {
    name: string;
    image: string;
    id: string;
    Artist: {
      name: string;
      id: string;
    };
  };
}

interface ActiveSongModel {
  song?: Song;
  setActiveSong: Action<ActiveSongModel, Song>;
}
interface IStore {
  activeSong: ActiveSongModel;
}

export const store = createStore<IStore>({
  activeSong: {
    setActiveSong: action((state, payload) => {
      state.song = payload;
    }),
  },
});

const typedHooks = createTypedHooks<IStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
export const useStoreDispatch = typedHooks.useStoreDispatch;
