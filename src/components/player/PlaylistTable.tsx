import { AiOutlineClockCircle } from "react-icons/ai";

export const PlaylistTable = () => {
  return (
    <div className="w-full h-full px-10">
      <div className="w-full h-full relative">
        <div className="absolute top-0 w-full flex justify-between h-8 items-center fill-zinc-400 text-zinc-400 uppercase text-sm">
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
        <div className="top-8 w-full absolute space-y-4 mt-2">
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
};

const Row = () => (
  <div className="relative w-full flex justify-between h-10 items-center fill-zinc-400 text-sm text-zinc-400">
    <div className="flex items-center w-1/4">
      <p className="mr-4">1</p>
      <div className="flex space-x-2">
        <img
          src="https://i.scdn.co/image/ab67616d00001e022e8ed79e177ff6011076f5f0"
          className="h-10 w-10"
        />
        <div className="h-full space-y-1">
          <p className="font-[400] text-zinc-50">Matilda</p>
          <p className="text-xs">Harry Styles</p>
        </div>
      </div>
    </div>
    <p className="w-1/4">Harry's House</p>
    <p className="w-1/4">Jun 10, 2022</p>
    <p className="w-1/12 text-end">2:13</p>
  </div>
);
