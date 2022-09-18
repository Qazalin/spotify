import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

export const PlaylistTable = () => {
  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full relative">
        <div className="absolute top-0 w-full flex justify-between h-8 items-center fill-zinc-400 text-zinc-400 uppercase text-sm p-2">
          <div className="flex w-1/4">
            <p className="mr-4">#</p>
            <p>title</p>
          </div>
          <div className="w-1/4">
            <p>album</p>
          </div>
          <p className="w-1/4">date added</p>
          <div className="w-1/12 flex justify-end">
            <AiOutlineClockCircle className="fill-inherit" />
          </div>
        </div>
        <hr className="absolute top-8 w-full opacity-20" />
        <div className="top-8 w-full absolute space-y-2 mt-2">
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
};

const Row = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-full flex justify-between h-12 items-center fill-zinc-400 text-sm text-zinc-400 hover:bg-zinc-700 hover:bg-opacity-50 rounded-md p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center w-1/4 self-start">
        <div className="flex w-5 justify-center items-center content-center text-center text-sm mr-2 self-center h-5">
          {isHovered ? (
            <BsFillPlayFill className="text-md text-zinc-50 text-lg" />
          ) : (
            <p> 1</p>
          )}
        </div>
        <div className="flex space-x-2">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022e8ed79e177ff6011076f5f0"
            className="h-10 w-10 self-center"
          />
          <div className="h-full space-y-1 flex flex-col">
            <a
              className="font-[400] text-zinc-50"
              href="/track/6kxaaIeowajN7w21PfMLbu"
            >
              Matilda
            </a>
            <a className="text-xs" href="/artist/2445">
              Harry Styles
            </a>
          </div>
        </div>
      </div>
      <a className="w-1/4" href="/album/234">
        Harry&apos;s House
      </a>
      <p className="w-1/4">Jun 10, 2022</p>
      <p className="w-1/12 text-end">2:13</p>
    </div>
  );
};
