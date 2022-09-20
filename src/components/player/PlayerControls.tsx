import { AiFillPlayCircle } from "react-icons/ai";
import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
// import { BsVolumeDownFill } from "react-icons/bs";
import { IoIosRepeat } from "react-icons/io";
import { PlayerSlider } from "./PlayerSlider";

export const PlayerControls = () => {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex text-2xl justify-center mt-3 items-center space-x-2 text-zinc-400 [&>*]:cursor-pointer">
        <BiShuffle className="text-lg hover:fill-zinc-50" />
        <BiSkipPrevious className="hover:fill-zinc-50" />
        <AiFillPlayCircle className="text-3xl text-white hover:scale-105" />
        <BiSkipNext className="hover:fill-zinc-50" />
        <IoIosRepeat className="hover:fill-zinc-50" />
      </div>
      <PlayerSlider />
    </div>
  );
};
