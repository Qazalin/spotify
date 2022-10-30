import { useContext, useEffect, useRef } from "react";
import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IoIosRepeat } from "react-icons/io";
import { PlayerSlider } from "./PlayerSlider";
import ReactHowler from "react-howler";
import { PlayPauseButton } from "../shared";
import { PlayerControlsContext } from "./PlayerControlsContext";

export const PlayerControls = () => {
  const {
    activeSong,
    isPlaying,
    isSeeking,
    setIsSeeking,
    playedTime,
    onSongChange,
  } = useContext(PlayerControlsContext);

  const songRef = useRef(null);

  function onSeek() {}
  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex text-2xl justify-center mt-3 items-center space-x-2 text-zinc-400 [&>*]:cursor-pointer">
        <BiShuffle className="text-lg hover:fill-zinc-50" />
        <BiSkipPrevious
          className="hover:fill-zinc-50"
          onClick={() => onSongChange("prev")}
        />
        <PlayPauseButton className="w-7 h-7" />
        <BiSkipNext
          className="hover:fill-zinc-50"
          onClick={() => onSongChange("next")}
        />
        <IoIosRepeat className="hover:fill-zinc-50" />
      </div>
      {activeSong && (
        <>
          <ReactHowler
            src={activeSong.url}
            playing={isPlaying}
            ref={songRef}
            volume={isSeeking ? 0 : 0.1} // don't play a sound when seeking
            onEnd={() => onSongChange("next")}
          />
          <PlayerSlider
            value={playedTime}
            onChange={onSeek}
            onFinalChange={() => setIsSeeking(false)}
            duration={activeSong?.duration ?? 0}
          />
        </>
      )}
    </div>
  );
};

/*
 *
 */
