import { useTailwindScreen } from "@spotify/utils/responsiveBreakpoints";
import { useEffect, useState } from "react";
import { dateFormatter, durationFormatter } from "@spotify/utils";
import { useStoreState, useStoreActions } from "@spotify/utils/state";
import { SongRowProps } from "@spotify/types/props";
import { IDXColumn, TrackInfoColumn } from "./PlaylistTableColumns";
import { useFavoriteSong } from "@spotify/utils/hooks/useFavorite";
import { FavoriteButton } from "../shared/FavoriteButton";

export const SongRow: React.FC<SongRowProps> = (p) => {
  // state
  const [isHovered, setIsHovered] = useState(false);
  const { isFavorite, toggleFavorite } = useFavoriteSong({
    id: p.songId,
  });
  const screen = useTailwindScreen();

  // setters and hanlers
  const setActiveSong = useStoreActions(
    (actions) => actions.songs.setActiveSong
  );
  const setSongClickLink = useStoreActions(
    (actions) => actions.songs.setSongClickLink
  );
  const isPlaying = useStoreState((state) => state.songs.isPlaying);
  const setIsPlaying = useStoreActions((actions) => actions.songs.setIsPlaying);

  // main handler
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    setActiveSong({
      id: p.songId,
      name: p.songName,
      duration: p.songDuration,
      url: p.songUrl,
      Album: {
        name: p?.albumName || "",
        image: p.albumImage,
        id: p?.albumId || "",
        Artist: {
          name: p.artistName,
          id: p.artistId,
        },
      },
    });
    setSongClickLink(p.clickLink);
  };

  const activeSong = useStoreState((state) => state.songs.activeSong);

  useEffect(() => console.log("active: ", activeSong), [activeSong]);
  return (
    <div
      className="relative w-full flex justify-between h-12 items-center fill-zinc-400 text-sm text-zinc-400 hover:bg-zinc-700 hover:bg-opacity-50 rounded-md flex-wrap px-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={() => handlePlay()}
    >
      <div className="h-full items-center w-[2%]">
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

      {screen !== "md" && screen !== "sm" && p.variant === "full" && (
        <div className="h-full flex items-center invisible md:visible md:w-1/4">
          <a href={`app/album/${p.albumId}`} className="truncate">
            {" "}
            {p.albumName}
          </a>
        </div>
      )}
      {screen !== "sm" &&
        screen !== "md" &&
        screen !== "lg" &&
        p.variant === "full" && (
          <div className="h-full flex items-center lg:w-1/4">
            <p className="truncate">
              {dateFormatter(p.songDateAdded || new Date())}
            </p>
          </div>
        )}
      <div className="h-full flex items-center w-1/12 p-4">
        {isFavorite ? (
          <FavoriteButton
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ) : (
          <FavoriteButton
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        )}
      </div>
      <div className="h-full items-center w-1/12 flex justify-end">
        <p>{durationFormatter(p.songDuration)}</p>
      </div>
    </div>
  );
};
