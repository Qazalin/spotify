import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { dateFormatter, durationFormatter } from "utils/formatters";
import { inferQueryOutput } from "utils/trpc";

export const PlaylistTable: React.FC<{
  playlist: inferQueryOutput<"playlist.getPlaylistById">;
}> = ({ playlist }) => {
  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full relative">
        <div className="absolute top-0 w-full flex justify-between h-8 items-center fill-zinc-400 text-zinc-400 uppercase text-sm p-2">
          <div className="flex w-1/4">
            <p className="mr-4">#</p>
            <p>title</p>
          </div>
          <div className="w-1/4">
            <p>album</p>
          </div>
          <p className="w-1/4">date added</p>
          <div className="w-1/12 flex justify-end">
            <AiOutlineClockCircle className="fill-inherit" />
          </div>
        </div>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SongRow: React.FC<{
  idx: number;
  songId: string;
  albumId: string;
  artistId: string;
  songName: string;
  artistName: string;
  albumName: string;
  albumImage: string;
  songDateAdded: Date;
  songDuration: number;
}> = ({
  idx,
  songId,
  albumId,
  artistId,
  artistName,
  songName,
  albumName,
  albumImage,
  songDateAdded,
  songDuration,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-full flex justify-between h-12 items-center fill-zinc-400 text-sm text-zinc-400 hover:bg-zinc-700 hover:bg-opacity-50 rounded-md p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center w-1/4 self-start">
        <div className="flex w-5 justify-center items-center content-center text-center text-sm mr-2 self-center h-5">
          {isHovered ? (
            <BsFillPlayFill className="text-md text-zinc-50 text-lg" />
          ) : (
            <p>{idx}</p>
          )}
        </div>
        <div className="flex space-x-2">
          <img src={albumImage} className="h-10 w-10 self-center" />
          <div className="h-full space-y-1 flex flex-col">
            <a className="font-[400] text-zinc-50" href={`/track/${songId}`}>
              {songName}
            </a>
            <a className="text-xs" href={`/app/artist/${artistId}`}>
              {artistName}
            </a>
          </div>
        </div>
      </div>
      <a className="w-1/4" href={`app/album/${albumId}`}>
        {albumName}
      </a>
      <p className="w-1/4">{dateFormatter(songDateAdded)}</p>
      <p className="w-1/12 text-end">{durationFormatter(songDuration)}</p>
    </div>
  );
};
