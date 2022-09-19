import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsVolumeDownFill } from "react-icons/bs";
import { IoIosRepeat } from "react-icons/io";
import { PlayerSlider } from "./PlayerSlider";
export const PlayerLayout = () => {
  return (
    <div className="w-full h-full relative flex justify-between px-4">
      <PlayerLeft />
      <PlayerCenter />
      <PlayerRight />
    </div>
  );
};

const PlayerLeft = () => {
  return (
    <div className="flex space-x-6 h-full">
      <div className="my-auto ">
        <p className="text-sm">As it was</p>
        <p className="text-xs text-zinc-400">Harry Styles</p>
      </div>
      <div className="my-auto">
        <AiOutlineHeart className="fill-zinc-400 hover:fill-zinc-100 cursor-pointer" />
      </div>
    </div>
  );
};

const PlayerCenter = () => {
  return (
    <div className="flex w-72 h-full mr-20 flex-col">
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

const PlayerRight = () => {
  return (
    <div className="my-auto">
      <BsVolumeDownFill className="text-xl" />
    </div>
  );
};
