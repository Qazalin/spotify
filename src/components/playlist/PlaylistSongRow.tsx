import { useTailwindScreen } from "@spotify/utils/responsiveBreakpoints";
import { useState } from "react";
import { dateFormatter, durationFormatter } from "@spotify/utils";
import { useStoreState, useStoreActions } from "@spotify/utils/state";
import { SongRowProps } from "@spotify/types/props";
import { IDXColumn, TrackInfoColumn } from "./PlaylistTableColumns";
import { AiOutlineHeart } from "react-icons/ai";
import { isMobile } from "react-device-detect"; // if the user is using a mobile device, the song row will always show the heart icon

export const SongRow: React.FC<SongRowProps> = (p) => {
  // state
  const [isHovered, setIsHovered] = useState(false);
  const [isFavoriteSong, setIsFavoriteSong] = useState(false);
  const screen = useTailwindScreen();

  // setters and hanlers
  const setActiveSongIdx = useStoreActions(
    (actions) => actions.songs.setActiveSongIdx
  );
  const setPlaylistId = useStoreActions(
    (actions) => actions.songs.setPlaylistId
  );
  const isPlaying = useStoreState((state) => state.songs.isPlaying);
  const setIsPlaying = useStoreActions((actions) => actions.songs.setIsPlaying);

  // main handler
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    setActiveSongIdx(p.idx);
    setPlaylistId(p.playlistId);
  };

  return (
    <div
      className="relative w-full flex justify-between h-12 items-center fill-zinc-400 text-sm text-zinc-400 hover:bg-zinc-700 hover:bg-opacity-50 rounded-md flex-wrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={() => handlePlay()}
    >
      <div className="h-full items-center w-1/12">
        <IDXColumn
          idx={p.idx}
          isHovered={isHovered}
          isActive={p.isActive}
          handlePlay={handlePlay}
        />
      </div>
      <div className="h-full flex items-center sm:w-3/4 md:w-1/2 lg:w-1/4">
        <TrackInfoColumn
          songName={p.songName}
          artistName={p.artistName}
          isActive={p.isActive}
          songId={p.songId}
          artistId={p.artistId}
          albumImage={p.albumImage}
        />
      </div>

      {screen !== "md" && screen !== "sm" && (
        <div className="h-full flex items-center invisible md:visible md:w-1/4">
          <a href={`app/album/${p.albumId}`} className="truncate">
            {" "}
            {p.albumName}
          </a>
        </div>
      )}
      {screen !== "sm" && screen !== "md" && screen !== "lg" && (
        <div className="h-full flex items-center lg:w-1/4">
          <p className="truncate">{dateFormatter(p.songDateAdded)}</p>
        </div>
      )}
      <div className="h-full flex items-center w-1/12">
        {isMobile ||
          (isHovered && (
            <AiOutlineHeart
              className={`w-5 h-5 text-zinc-400 hover:text-zinc-100 stroke-zinc-100`}
              onClick={() => setIsFavoriteSong((s) => !s)}
            />
          ))}
      </div>
      <div className="h-full items-center w-1/12 flex justify-end">
        <p>{durationFormatter(p.songDuration)}</p>
      </div>
    </div>
  );
};
