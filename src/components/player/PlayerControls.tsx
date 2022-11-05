import { useContext } from "react";
import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IoIosRepeat } from "react-icons/io";
import { PlayerSlider } from "./PlayerSlider";
import { PlayerControlsContext } from "./PlayerControlsContext";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export const PlayerControls = () => {
  const {
    activeSong,
    setIsSeeking,
    playedTime,
    onSongChange,
    onSeek,
    isPlaying,
    setIsPlaying,
  } = useContext(PlayerControlsContext);

  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex text-2xl justify-center mt-3 items-center space-x-2 text-zinc-400 [&>*]:cursor-pointer">
        <BiShuffle className="text-lg hover:fill-zinc-50" />
        <BiSkipPrevious
          className="hover:fill-zinc-50"
          onClick={() => onSongChange("prev")}
        />
        <div
          className={
            "p-1 bg-white rounded-full flex justify-center items-center w-7 h-7"
          }
        >
          {isPlaying ? (
            <BsPauseFill
              className="text-base w-full h-full text-black hover:scale-105"
              onClick={() => setIsPlaying(false)}
            />
          ) : (
            <BsFillPlayFill
              className="text-base w-full h-full text-black hover:scale-105"
              onClick={() => setIsPlaying(true)}
            />
          )}
        </div>
        <BiSkipNext
          className="hover:fill-zinc-50"
          onClick={() => onSongChange("next")}
        />
        <IoIosRepeat className="hover:fill-zinc-50" />
      </div>
      {activeSong && (
        <PlayerSlider
          value={playedTime}
          onChange={onSeek}
          onFinalChange={() => setIsSeeking(false)}
          duration={activeSong?.duration ?? 0}
        />
      )}
    </div>
  );
};
