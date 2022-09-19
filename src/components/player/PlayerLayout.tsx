import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsVolumeDownFill } from "react-icons/bs";
import { IoIosRepeat } from "react-icons/io";
import { PlayerSlider } from "./PlayerSlider";

export const PlayerLayout = () => {
  return (
    <div className="w-full h-full relative flex space-x-1 px-4">
      <div className="h-full w-1/3 bg-zinc-800" />
      <div className="h-full w-1/3 bg-zinc-800" />
      <div className="h-full w-1/3 bg-zinc-800" />
    </div>
  );
};
