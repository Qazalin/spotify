import { useStoreState } from "@spotify/utils";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsVolumeDownFill } from "react-icons/bs";
import { IoIosRepeat } from "react-icons/io";
import { PlayerSlider } from "./PlayerSlider";
import { SongInfo } from "./SongInfo";

export const PlayerLayout = () => {
  const activeSong = useStoreState((state) => state.activeSong.song);
  if (!activeSong) {
    return <div>Nothing playing</div>;
  }
  return (
    <div className="w-full h-full relative flex space-x-1 px-4">
      <div className="h-full w-1/3">
        <SongInfo
          songName={activeSong.name}
          artistName={activeSong.Album.Artist.name}
          albumId={activeSong.Album.id}
          artistId={activeSong.Album.Artist.id}
        />
      </div>
      <div className="h-full w-1/3 bg-zinc-800" />
      <div className="h-full w-1/3 bg-zinc-800" />
    </div>
  );
};
