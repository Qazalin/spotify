import { PropsWithChildren, useEffect, useState } from "react";
import { AppNavbar } from "./AppNavbar";
import { AppSidebar } from "./AppSidebar";
import { PlayerLayout } from "@spotify/components/player/PlayerLayout";

export const AppLayout: React.FC<
  PropsWithChildren<Record<string, unknown>>
> = ({ children }) => {
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
    <main className="w-screen h-screen bg-zinc-900 relative">
      <div
        className={`h-3 w-[calc(100vw-13rem)] bg-black absolute right-0 ${
          isScrolled ? "bg-black" : "bg-transparent"
        } z-50`}
      >
        <AppNavbar />
      </div>
      <div className="w-[calc(100vw-13rem)] h-[calc(100vh-4rem)] absolute right-0 top-0 overflow-scroll">
        <div>{children}</div>
      </div>
      <div className="w-52 h-[calc(100vh-5rem)] bg-black absolute left-0">
        <AppSidebar />
      </div>
      <div className="w-full h-20 bg-zinc-900 border-t-2 border-t-zinc-500 border-opacity-20 absolute bottom-0 right-0">
        <PlayerLayout />
      </div>
    </main>
  );
};
