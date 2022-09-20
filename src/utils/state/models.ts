import { Action } from "easy-peasy";

// Models
export interface StoreSongModel {
  id: string;
  activePlaylistId: string;
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
  song?: StoreSongModel;
  setActiveSong: Action<ActiveSongModel, StoreSongModel>;
}
export interface IStore {
  activeSong: ActiveSongModel;
}
