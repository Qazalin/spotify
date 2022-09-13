import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // watch for outside clicks and close the menu automagically
  const wrapperRef = useRef<HTMLDivElement | null>();
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // what has contains?
      if (event.target) {
        // @ts-ignore
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  const router = useRouter();

  const userMenuItems = ["profile", "settings"];
  return (
    <div className="w-full h-full relative">
      <PlayerPageControls />
      {/* @ts-ignore */}
      <div className="flex absolute right-5 mt-2" ref={wrapperRef}>
        <div
          className="bg-stone-700 p-1 rounded-full border-2 border-black visible cursor-pointer"
          onClick={() => setIsMenuOpen((s) => !s)}
        >
          <AiOutlineUser className="text-xl" />
        </div>
        <div
          className={`bg-zinc-800 shadow-lg shadow-black/75 absolute top-9 -left-14 p-3 px-5 rounded-md space-y-2 ${
            isMenuOpen ? "opacity-1" : "opacity-0"
          } transition-opacity duration-300`}
        >
          {userMenuItems.map((item, i) => (
            <p
              key={`usr-menue-${i}`}
              className="capitalize cursor-pointer"
              onClick={() => router.push(`/me/${item}`)}
            >
              {item}
            </p>
          ))}
          <hr />
          <p className="cursor-pointer" onClick={() => signOut()}>
            Log out
          </p>
        </div>
      </div>
    </div>
  );
};

const PlayerPageControls = () => {
  // TODO make these react contexts
  const userHasPrevPage = true;
  const userHasNextPage = false;
  return (
    <div className="flex space-x-10 text-xl absolute left-5 mt-2">
      <div className="bg-black flex justify-center items-center p-1 rounded-full">
        <FiChevronLeft
          className={`stroke-slate-300  ${
            userHasPrevPage
              ? "cursor-pointer hover:stroke-slate-50 "
              : "cursor-not-allowed"
          }`}
        />
      </div>
      <div className="bg-black flex justify-center items-center p-1 rounded-full invisible lg:visible absolute top-0">
        <FiChevronRight
          className={`stroke-slate-300 ${
            userHasNextPage
              ? "cursor-pointer hover:stroke-slate-50"
              : "cursor-not-allowed"
          }`}
        />
      </div>
    </div>
  );
};
