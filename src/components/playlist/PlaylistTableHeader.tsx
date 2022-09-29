import { useTailwindScreen } from "@spotify/utils/responsiveBreakpoints";
import { useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export const PlaylistTableHeader = () => {
  const screen = useTailwindScreen();

  useEffect(() => {
    console.log(screen);
  }, [screen]);
  return (
    <div className="absolute top-0 w-full flex justify-between h-8 items-center fill-zinc-400 text-zinc-400 uppercase text-sm">
      <div className="h-full flex items-center w-1/12">#</div>
      <div className="h-full flex items-center w-3/4 md:w-1/2 lg:w-1/4">
        title
      </div>

      {screen !== "md" && screen !== "sm" && (
        <div className="h-full flex items-center invisible md:visible md:w-1/4">
          album
        </div>
      )}
      {screen !== "sm" && screen !== "md" && screen !== "lg" && (
        <div className="h-full flex items-center lg:w-1/4">date added</div>
      )}
      <div className="h-full flex items-center w-1/12"></div>
      <div className="h-full items-center w-1/12 flex justify-end">
        <AiOutlineClockCircle className="fill-inherit" />
      </div>
    </div>
  );
};
