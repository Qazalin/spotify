import { PlayPauseButton } from "../shared";

export const ArtistSubheader = () => {
  return (
    <div className="flex space-x-5 mb-5">
      <PlayPauseButton className="w-10 h-10 bg-green-400 p-2" />
      <button className="text-[0.6rem] leading-[0.3rem] uppercase p-1 px-3 border-2 border-zinc-400 rounded-sm tracking-widest font-bold text-zinc-200 h-6 self-center">
        following
      </button>
    </div>
  );
};
