import { useEffect, useState } from "react";
import { PlayerMain } from "./PlayerMain";
import { PlayerNavbar } from "./PlayerNavbar";
import { PlayerSidebar } from "./PlayerSidebar";
import { PlayerWelcome } from "./PlayerWelcome";

export const PlayerLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full bg-zinc-900 relative">
      <div
        className={`h-12 w-[calc(100vw-13rem)] bg-black absolute right-0 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <PlayerNavbar />
      </div>
      <div className="w-[calc(100vw-13rem)] h-[calc(100vh-8rem)] absolute right-0 top-12 px-3 md:px-4 lg:px-5">
        <PlayerWelcome />
        <PlayerMain />
      </div>
      <div className="w-52 h-[calc(100vh-5rem)] bg-black absolute left-0">
        <PlayerSidebar />
      </div>
      <div className="w-full h-20 bg-zinc-900 border-t-2 border-t-zinc-500 border-opacity-20 absolute bottom-0 right-0" />
    </div>
  );
};
