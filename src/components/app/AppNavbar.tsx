import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { MenuDropdown } from "components/shared/MenuDropdown";

export const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // watch for outside clicks and close the menu automagically
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const userMenuItems = ["profile", "settings"];
  return (
    <div className="w-full h-full relative">
      <PlayerPageControls />
      <div className="flex absolute right-5 mt-2" ref={wrapperRef}>
        <div
          className="bg-stone-700 p-1 rounded-full border-2 border-black visible cursor-pointer"
          onClick={() => setIsMenuOpen((s) => !s)}
        >
          <AiOutlineUser className="text-xl" />
        </div>
        <MenuDropdown
          wrapperRef={wrapperRef}
          options={userMenuItems}
          onOptionClick={(o) => router.push(`/app/user/${o}`)}
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
        >
          <hr />
          <p className="cursor-pointer" onClick={() => signOut()}>
            Log out
          </p>
        </MenuDropdown>
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
