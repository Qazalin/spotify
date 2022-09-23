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

interface ActiveSongModel {
  song?: StoreSongModel;
  isPlaying?: boolean;
  playlistId?: string;
  setActiveSong: Action<ActiveSongModel, StoreSongModel>;
  setIsPlaying: Action<ActiveSongModel, boolean>;
  setPlaylistId: Action<ActiveSongModel, string>;
}
export interface IStore {
  activeSong: ActiveSongModel;
}
