import { useState } from "react";
import { dateFormatter, durationFormatter } from "@spotify/utils";
import { useStoreActions } from "@spotify/utils/state";
import { SongRowProps } from "@spotify/types/props";
import { useTailwindBreakpoint } from "@spotify/utils/responsiveBreakpoints";
import { IDXColumn, TrackInfoColumn } from "./PlaylistTableColumns";

export const SongRow: React.FC<SongRowProps> = (p) => {
  // state
  const [isHovered, setIsHovered] = useState(false);
  const isLg = useTailwindBreakpoint("lg");

  // setters and hanlers
  const setActiveSong = useStoreActions(
    (actions) => actions.activeSong.setActiveSong
  );
  const setPlaylistId = useStoreActions(
    (actions) => actions.activeSong.setPlaylistId
  );
  const setIsPlaying = useStoreActions(
    (actions) => actions.activeSong.setIsPlaying
  );

  // main handler
  const handlePlay = () => {
    if (p.isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
    setActiveSong({
      id: p.songId,
      name: p.songName,
      duration: p.songDuration,
      url: p.songUrl,
      createdAt: p.songDateAdded,
      Album: {
        name: p.albumName,
        image: p.albumImage,
        id: p.albumId,
        Artist: {
          name: p.artistName,
          id: p.artistId,
        },
      },
    });
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
      <div className="invisible md:visible md:w-1/3 lg:w-1/4 overflow-ellipsis whitespace-nowrap block">
        <a href={`app/album/${p.albumId}`}>{p.albumName}</a>
      </div>
      <div className="invisible lg:visible lg:w-1/4">
        <p>{dateFormatter(p.songDateAdded)}</p>
      </div>
      <div className="w-1/12 text-end">
        <p>{durationFormatter(p.songDuration)}</p>
      </div>
    </div>
  );
};
