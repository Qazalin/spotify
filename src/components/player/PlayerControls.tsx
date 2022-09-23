import { useEffect, useRef, useState } from "react";
import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { IoIosRepeat } from "react-icons/io";
import { PlayerSlider } from "./PlayerSlider";
import ReactHowler from "react-howler";
import { useIsPlaying, useStoreActions } from "@spotify/utils/state";

export const PlayerControls: React.FC<{ songUrl: string }> = ({ songUrl }) => {
  const isPlaying = useIsPlaying();
  const [isSeeking, setIsSeeking] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const songRef = useRef(null);

  useEffect(() => {
    let timerId: number;
    if (isPlaying && !isSeeking) {
      const timer = () => {
        // setPlayedTime(songRef.current.seek());
        timerId = requestAnimationFrame(timer);
      };
      timerId = requestAnimationFrame(timer);
      return () => cancelAnimationFrame(timerId);
    }
  }, [isPlaying, isSeeking]);

  const setIsPlaying = useStoreActions(
    (actions) => actions.activeSong.setIsPlaying
  );

  const onSeek = (e) => {
    console.log("seeked: ", e);
    setIsSeeking(true);
    setPlayedTime(parseFloat(e[0]));
  };

  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex text-2xl justify-center mt-3 items-center space-x-2 text-zinc-400 [&>*]:cursor-pointer">
        <BiShuffle className="text-lg hover:fill-zinc-50" />
        <BiSkipPrevious className="hover:fill-zinc-50" />
        <div className="w-7 h-7 p-1 bg-white rounded-full flex justify-center items-center">
          {isPlaying ? (
            <BsPauseFill
              className="text-2xl text-black hover:scale-105"
              onClick={() => setIsPlaying(false)}
            />
          ) : (
            <BsFillPlayFill
              className="text-2xl text-black hover:scale-105"
              onClick={() => setIsPlaying(true)}
            />
          )}
        </div>
        <BiSkipNext className="hover:fill-zinc-50" />
        <IoIosRepeat className="hover:fill-zinc-50" />
      </div>
      <ReactHowler src={songUrl} playing={isPlaying} />
      <PlayerSlider value={playedTime} onChange={(val) => setPlayedTime(val)} />
    </div>
  );
};
