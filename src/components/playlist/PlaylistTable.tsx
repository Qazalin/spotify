import { PlaylistTableHeader } from "./PlaylistTableHeader";
import { SongRow } from "./PlaylistSongRow";
import { inferQueryOutput } from "@spotify/utils/trpc";
import { useActiveSong, useIsPlaying } from "@spotify/utils/state";

export const PlaylistTable: React.FC<{
  playlist: inferQueryOutput<"playlist.getPlaylistById">;
}> = ({ playlist }) => {
  const activeSong = useActiveSong();
  const isPlaying = useIsPlaying();

  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full relative">
        <PlaylistTableHeader />
        <hr className="absolute top-8 w-full opacity-20" />
        <div className="top-8 w-full absolute space-y-2 mt-2">
          {playlist?.songs.map((s, i) => (
            <SongRow
              key={`song-row-${i}`}
              idx={i}
              songId={s.id}
              albumId={s.Album.id}
              artistId={s.Album.Artist.id}
              songName={s.name}
              albumName={s.Album.name}
              artistName={s.Album.Artist.name}
              songDateAdded={s.createdAt}
              songDuration={s.duration}
              albumImage={s.Album.image}
              songUrl={s.url}
              playlistId={playlist.id}
              isActive={activeSong?.id === s.id}
              isPlaying={isPlaying}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
