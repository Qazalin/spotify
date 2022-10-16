import { Action } from "easy-peasy";

type PrimaryStates = {
  activeSong: SongModel;
  activeQueue: SongModel[];
  activeQueueId: string; // can be: playlistId, albumId, artistId
  activeQueueType: "playlist" | "album" | "artist";
};

type BooleanStates = {
  isPlayling: boolean;
  isShuffle: boolean;
  isRepeat: boolean;
};

type SpotifyStoreState = PrimaryStates & BooleanStates;

type PrimaryActions = {
  setActiveSong: Action<SpotifyStoreModel, SongModel>;
  setActiveQueue: Action<SpotifyStoreModel, SongModel[]>;
  setActiveQueueId: Action<SpotifyStoreModel, string>;
  setActiveQueueType: Action<
    SpotifyStoreModel,
    "playlist" | "album" | "artist"
  >;
};

type BooleanActions = {
  setIsPlaying: Action<SpotifyStoreModel, boolean>;
  setIsShuffle: Action<SpotifyStoreModel, boolean>;
  setIsRepeat: Action<SpotifyStoreModel, boolean>;
};

type SpotifyStoreActions = PrimaryActions & BooleanActions;

type SpotifyStoreModel = SpotifyStoreState & SpotifyStoreActions;

// TODO: This is bad
interface SongModel {
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
