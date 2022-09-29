import { useState } from "react";
import { dateFormatter, durationFormatter } from "@spotify/utils";
import { useStoreState, useStoreActions } from "@spotify/utils/state";
import { SongRowProps } from "@spotify/types/props";
import { IDXColumn, TrackInfoColumn } from "./PlaylistTableColumns";
import { AiOutlineHeart } from "react-icons/ai";

export const SongRow: React.FC<SongRowProps> = (p) => {
  // state
  const [isHovered, setIsHovered] = useState(false);
  const [isFavoriteSong, setIsFavoriteSong] = useState(false);

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
      className="relative w-full flex justify-between h-12 items-center fill-zinc-400 text-sm text-zinc-400 hover:bg-zinc-700 hover:bg-opacity-50 rounded-md p-2 flex-wrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={() => handlePlay()}
    >
      <div className="flex items-center w-1/2 md:w-1/3 lg:w-1/4 self-start">
        <IDXColumn
          idx={p.idx}
          isHovered={isHovered}
          isActive={p.isActive}
          handlePlay={handlePlay}
        />
        <TrackInfoColumn
          songName={p.songName}
          artistName={p.artistName}
          isActive={p.isActive}
          songId={p.songId}
          artistId={p.artistId}
          albumImage={p.albumImage}
        />
      </div>
      <div className="invisible md:visible md:w-1/3 lg:w-1/4 overflow-ellipsis whitespace-nowrap block h-full">
        <a href={`app/album/${p.albumId}`}>{p.albumName}</a>
      </div>
      <div className="invisible lg:visible lg:w-1/4 h-full">
        <p>{dateFormatter(p.songDateAdded)}</p>
      </div>

      <div className="h-full p-4 elf-end my-auto absolute right-24">
        <AiOutlineHeart
          className={`w-full h-full text-zinc-400 hover:text-zinc-100 stroke-zinc-100`}
          onClick={() => setIsFavoriteSong((s) => !s)}
        />
      </div>
      <div className="flex text-end w-1/12">
        <p>{durationFormatter(p.songDuration)}</p>
      </div>
    </div>
  );
};
