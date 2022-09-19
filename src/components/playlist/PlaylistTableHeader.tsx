import { AiOutlineClockCircle } from "react-icons/ai";

export const PlaylistTableHeader = () => {
  return (
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
  );
};
