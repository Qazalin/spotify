import { useStoreState } from "@spotify/utils/state";
import { PlayerControls } from "./PlayerControls";

import { SongInfo } from "./SongInfo";

export const PlayerLayout = () => {
  const activeSong = useStoreState((state) => state.songs.activeSong);
  if (!activeSong) {
    return <div>Nothing playing</div>;
  }

  return (
    <div className="w-full h-full relative flex space-x-1 px-4">
      <div className="h-full w-1/3">
        <SongInfo
          songName={activeSong.name}
          artistName={activeSong.Album.Artist.name}
          albumId={activeSong.Album.id}
          artistId={activeSong.Album.Artist.id}
        />
      </div>
      <div className="h-full w-1/3">
        <PlayerControls
          songUrl={activeSong.url}
          songDuration={activeSong.duration}
        />
      </div>
    </div>
  );
};
