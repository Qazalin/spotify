import { useEffect, useRef, useState } from "react";
import { BiShuffle, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { IoIosRepeat } from "react-icons/io";
import { PlayerSlider } from "./PlayerSlider";
import ReactHowler from "react-howler";
import { useStoreState, useStoreActions } from "@spotify/utils/state";

export const PlayerControls: React.FC<{
  songUrl: string;
  songDuration: number;
}> = ({ songUrl, songDuration }) => {
  // local state
  const [isSeeking, setIsSeeking] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  // global state
  const isPlaying = useStoreState((state) => state.songs.isPlaying);
  const activeSongIdx = useStoreState((state) => state.songs.activeSongIdx);
  const allSongs = useStoreState((state) => state.songs.allSongs);

  // global actions
  const setIsPlaying = useStoreActions((actions) => actions.songs.setIsPlaying);
  const setActiveSongIdx = useStoreActions(
    (actions) => actions.songs.setActiveSongIdx
  );

  const songRef = useRef<ReactHowler>(null);

  const onSeek = (e: number) => {
    setIsSeeking(true);
    setPlayedTime(e);
    songRef.current?.seek(e);
  };

  const onSongChange = (action: "next" | "prev") => {
    // when a song changes, a few things need to reset: 1- the played time needs to be reset to 0 TODO
    console.log("change of songs");
    setPlayedTime(0);
    if (action === "next") {
      if (allSongs && activeSongIdx === allSongs.length - 1) {
        setActiveSongIdx(0);
      }
      setActiveSongIdx(activeSongIdx + 1);
    } else {
      if (allSongs && activeSongIdx === 0) {
        setActiveSongIdx(allSongs.length - 1);
      }
      setActiveSongIdx(activeSongIdx - 1);
    }
  };

  useEffect(() => {
    let timerId: number;
    if (isPlaying && !isSeeking) {
      const timer = () => {
        const t = songRef.current?.seek(); // can possibly be undefined
        if (t) {
          setPlayedTime(t);
        }

        timerId = requestAnimationFrame(timer);
      };
      timerId = requestAnimationFrame(timer);
      return () => cancelAnimationFrame(timerId);
    }
  }, [isPlaying, isSeeking]);

  // because this component is always in the layout, we can listen to keys right here
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
      if (e.code === "ArrowLeft") {
        // go to the prev song
        e.preventDefault();
        setActiveSongIdx(activeSongIdx - 1);
      }
      if (e.code === "ArrowRight") {
        // go to the next song
        e.preventDefault();
        setActiveSongIdx(activeSongIdx + 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex text-2xl justify-center mt-3 items-center space-x-2 text-zinc-400 [&>*]:cursor-pointer">
        <BiShuffle className="text-lg hover:fill-zinc-50" />
        <BiSkipPrevious
          className="hover:fill-zinc-50"
          onClick={() => onSongChange("prev")}
        />
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
        <BiSkipNext
          className="hover:fill-zinc-50"
          onClick={() => onSongChange("next")}
        />
        <IoIosRepeat className="hover:fill-zinc-50" />
      </div>
      <ReactHowler
        src={songUrl}
        playing={isPlaying}
        ref={songRef}
        volume={isSeeking ? 0 : 1} // don't play a sound when seeking
        onEnd={() => onSongChange("next")}
      />
      <PlayerSlider
        value={playedTime}
        onChange={onSeek}
        onFinalChange={() => setIsSeeking(false)}
        duration={songDuration}
      />
    </div>
  );
};
