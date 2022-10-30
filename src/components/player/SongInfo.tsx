import { PlayerControlsContext } from "./PlayerControlsContext";
import { useContext } from "react";

export const SongInfo = () => {
  const { activeSong } = useContext(PlayerControlsContext);
  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="space-y-1 flex flex-col">
        <a
          href={`/app/album/${activeSong?.Album.id}`}
          className="text-md text-ellipsis"
        >
          {activeSong?.name}
        </a>
        <a
          href={`/app/artist/${activeSong?.Album.Artist.id}`}
          className="text-xs text-zinc-400 text-ellipsis"
        >
          {activeSong?.Album.Artist.name}
        </a>
      </div>
    </div>
  );
};
