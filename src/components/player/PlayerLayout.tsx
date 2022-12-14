import { PlayerControls } from "./PlayerControls";
import { SongInfo } from "./SongInfo";

export const PlayerLayout = () => {
  return (
    <>
      <div className="w-full h-full relative flex space-x-1 px-4">
        <div className="h-full w-1/3">
          <SongInfo />
        </div>
        <div className="h-full w-1/3">
          <PlayerControls />
        </div>
      </div>
    </>
  );
};
