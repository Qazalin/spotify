import { Action } from "easy-peasy";

// Models
export interface StoreSongModel {
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

interface SongsModel {
  allSongs?: StoreSongModel[];
  activeSongIdx: number; // always default to 0
  isPlaying: boolean; // always default to false
  playlistId?: string;

  setAllSongs: Action<SongsModel, StoreSongModel[]>;
  setIsPlaying: Action<SongsModel, boolean>;
  setPlaylistId: Action<SongsModel, string>;
  setActiveSongIdx: Action<SongsModel, number>;
}

export interface IStore {
  songs: SongsModel;
}
