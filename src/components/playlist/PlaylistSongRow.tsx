import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Image from "next/future/image";
import { dateFormatter, durationFormatter } from "@spotify/utils";
import { useStoreActions } from "@spotify/utils/state";

export const SongRow: React.FC<{
  idx: number;
  songId: string;
  albumId: string;
  artistId: string;
  songName: string;
  artistName: string;
  albumName: string;
  albumImage: string;
  songUrl: string;
  songDateAdded: Date;
  songDuration: number;
  playlistId: string;
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
  songUrl,
  songDuration,
  playlistId,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const setActiveSong = useStoreActions(
    (actions) => actions.activeSong.setActiveSong
  );
  const handlePlay = () => {
    console.log("setting active song");
    setActiveSong({
      id: songId,
      activePlaylistId: playlistId,
      name: songName,
      duration: songDuration,
      url: songUrl,
      createdAt: songDateAdded,
      Album: {
        name: albumName,
        image: albumImage,
        id: albumId,
        Artist: {
          name: artistName,
          id: artistId,
        },
      },
    });
  };

  return (
    <div
      className="relative w-full flex justify-between h-12 items-center fill-zinc-400 text-sm text-zinc-400 hover:bg-zinc-700 hover:bg-opacity-50 rounded-md p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={() => handlePlay()}
    >
      <div className="flex items-center w-1/4 self-start">
        <div className="flex w-5 justify-center items-center content-center text-center text-sm mr-2 self-center h-5">
          {isHovered ? (
            <BsFillPlayFill
              className="text-md text-zinc-50 text-lg"
              onClick={() => handlePlay()}
            />
          ) : (
            <p>{idx}</p>
          )}
        </div>
        <div className="flex space-x-2">
          <Image
            src={albumImage}
            className="self-center"
            height={40}
            width={40}
            alt="album"
          />
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
