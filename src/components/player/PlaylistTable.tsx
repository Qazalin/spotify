import { AiOutlineClockCircle } from "react-icons/ai";

export const PlaylistTable = () => {
  return (
    <div className="w-full h-full px-10">
      <div className="w-full h-full bg-zinc-700 relative">
        <div className="absolute top-0 w-full flex justify-between h-8 items-center fill-zinc-400 text-zinc-400 uppercase text-sm">
          <div className="flex">
            <p className="mr-4">#</p>
            <p>title</p>
          </div>
          <p>album</p>
          <p>date added</p>
          <AiOutlineClockCircle className="fill-inherit" />
        </div>
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
    <div className="flex items-center">
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
    <p>Harry's House</p>
    <p>Jun 10, 2022</p>
    2:13
  </div>
);
