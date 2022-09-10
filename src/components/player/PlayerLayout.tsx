import { PlayerSidebar } from "./PlayerSidebar";

export const PlayerLayout = () => {
  return (
    <div className="w-full h-full bg-zinc-900">
      <div className="w-52 h-[calc(100vh-5rem)] bg-black absolute left-0">
        <PlayerSidebar />
      </div>
      <div className="w-full h-20 bg-zinc-900 border-t-2 border-t-zinc-500 border-opacity-20 absolute bottom-0 right-0 " />
    </div>
  );
};
