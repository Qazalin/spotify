import { JSXElementConstructor, ReactNode } from "react";
import { BiNavigation, BiHomeAlt, BiLibrary } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

export const AppSidebar = () => {
  const sidebarOptions: {
    name: string;
    icon: JSXElementConstructor<{ className: string }>;
  }[] = [
    { name: "home", icon: BiHomeAlt },
    { name: "explore", icon: BiNavigation },
    { name: "library", icon: BiLibrary },
  ];

  const userActions: {
    name: string;
    icon: ReactNode;
  }[] = [
    {
      name: "create playlist",
      icon: (
        <div className="fill-zinc-700 text-md my-auto bg-slate-300 rounded-sm p-1">
          <IoMdAdd className="fill-inherit" />
        </div>
      ),
    },
    {
      name: "liked songs",
      icon: (
        <div className="bg-gradient-to-br from-indigo-500 to-slate-400 fill-slate-300 p-1 rounded flex justify-center items-center">
          <AiFillHeart className="fill-inherit" />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full p-5 space-y-3">
      {sidebarOptions.map((opt, i) => (
        <div
          key={`sidebar-${i}`}
          className="flex text-md space-x-4 fill-zinc-400 text-zinc-400"
        >
          <opt.icon className="fill-inherit text-xl my-auto" />
          <p className="capitalize">{opt.name}</p>
        </div>
      ))}
      <hr className="opacity-30" />
      {userActions.map((opt, i) => (
        <div
          key={`action-${i}`}
          className="flex text-md space-x-4 fill-zinc-400 text-zinc-400"
        >
          {opt.icon}
          <p className="capitalize">{opt.name}</p>
        </div>
      ))}
    </div>
  );
};
