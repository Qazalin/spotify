import { SongRowProps } from "@spotify/types/props";
import { useTailwindScreen } from "@spotify/utils/responsiveBreakpoints";
import { LoaderSkeleton } from "../Utils";
import { useEffect, useState } from "react";
import { dateFormatter, durationFormatter } from "@spotify/utils";
import { useStoreState, useStoreActions } from "@spotify/utils/state";
import {
  IDXColumn,
  TrackInfoColumn,
} from "@spotify/components/playlist/PlaylistTableColumns";
import { useFavoriteSong } from "@spotify/utils/hooks/useFavorite";
import { FavoriteButton } from "@spotify/components/shared/FavoriteButton";

export const SongRowWrapper: React.FC<
  SongRowProps & { isLoading?: boolean }
> = ({ isLoading, ...props }) => {
  return (
    <div
      className={`relative w-full flex justify-between h-12 items-center fill-zinc-400 text-sm text-zinc-400 rounded-md flex-wrap px-2 ${
        isLoading && "hover:bg-zinc-700 hover:bg-opacity-50 "
      }`}
    >
      {isLoading ? (
        <SongRowWrapperLoading />
      ) : (
        <SongRowWrapperContent {...props} />
      )}
    </div>
  );
};

const SongRowWrapperLoading = () => (
  <>
    <LoaderSkeleton className="h-full sm:w-3/4 md:w-1/2 lg:w-1/4" />
    <LoaderSkeleton className="w-1/12 h-full" />
  </>
);

const SongRowWrapperContent: React.FC<SongRowProps> = (p) => {
  // state
  const [isHovered, setIsHovered] = useState(false);
  const screen = useTailwindScreen();

  // setters and hanlers
  const setActiveSong = useStoreActions((actions) => actions.setActiveSong);
  const setSongClickLink = useStoreActions((actions) => actions.setSongHref);
  const isPlaying = useStoreState((state) => state.isPlaying);
  const setIsPlaying = useStoreActions((actions) => actions.setIsPlaying);

  // main handler

  const {
    songId,
    artistId,
    songUrl,
    songName,
    artistName,
    songDuration,
    clickLink,
  } = p;
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (
      songId &&
      songName &&
      songDuration &&
      artistId &&
      artistName &&
      songUrl &&
      clickLink
    ) {
      setActiveSong({
        id: songId,
        name: songName,
        duration: songDuration,
        url: songUrl,
        Album: {
          name: p.albumName || "",
          image: p.albumImage || "",
          id: p.albumId || "",
          Artist: {
            name: artistName,
            id: artistId,
          },
        },
      });
      setSongClickLink(clickLink);
    }
  };

  const activeSong = useStoreState((state) => state.activeSong);

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

      <div className="h-full items-center w-1/12 flex justify-end">
        <p>{durationFormatter(p?.songDuration || 0)}</p>
      </div>
    </div>
  );
};
