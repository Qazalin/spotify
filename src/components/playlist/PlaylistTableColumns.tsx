import Image from "next/future/image";
import { BsPlayFill } from "react-icons/bs";

export const IDXColumn: React.FC<{
  idx: number;
  isHovered: boolean;
  isActive: boolean;
  handlePlay: () => void;
}> = ({ idx, isHovered, handlePlay, isActive }) => {
  return (
    <div className="flex w-5 justify-center items-center content-center text-center text-sm mr-2 self-center h-5">
      {isHovered ? (
        <BsPlayFill
          className="text-md text-zinc-50 text-lg"
          onClick={() => handlePlay()}
        />
      ) : (
        <p className={`${isActive ? "text-green-400" : "text-inherit"}`}>
          {idx}
        </p>
      )}
    </div>
  );
};

export const TrackInfoColumn: React.FC<{
  albumImage: string;
  songId: string;
  songName: string;
  artistName: string;
  artistId: string;
  isActive: boolean;
}> = (p) => (
  <div className="flex space-x-2 w-44 max-h-12 overflow-ellipsis whitespace-nowrap">
    <Image
      src={p.albumImage}
      className="self-center"
      height={40}
      width={40}
      alt="album"
    />
    <div className="h-full space-y-1 flex flex-col">
      <a
        className={`font-[400] text-zinc-50 ${
          p.isActive ? "text-green-400" : "text-inherit"
        } text-ellipsis whitespace-nowrap overflow-hidden`}
        href={`/track/${p.songId}`}
      >
        {p.songName}
      </a>
      <a className="text-xs text-ellipsis" href={`/app/artist/${p.artistId}`}>
        {p.artistName}
      </a>
    </div>
  </div>
);
