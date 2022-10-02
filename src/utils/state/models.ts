import { Action } from "easy-peasy";

// Models
export interface StoreSongModel {
  id: string;
  name: string;
  duration: number;
  url: string;
  createdAt?: Date;
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

interface SongsModel {
  allSongs?: StoreSongModel[];
  activeSong?: StoreSongModel;
  isPlaying: boolean; // always default to false
  songClickLink?: string;

  setAllSongs: Action<SongsModel, StoreSongModel[]>;
  setIsPlaying: Action<SongsModel, boolean>;
  setSongClickLink: Action<SongsModel, string>;
  setActiveSong: Action<SongsModel, StoreSongModel>;
}

export interface IStore {
  songs: SongsModel;
}
