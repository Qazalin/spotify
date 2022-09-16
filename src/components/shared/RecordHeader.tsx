import { Playlist } from "@prisma/client";
import { PropsWithChildren } from "react";
import { UserProfileInfo } from "types/props";

export const UserProfileHeader: React.FC<{ user: UserProfileInfo }> = ({
  user,
}) => {
  return (
    <RecordHeader
      type="profile"
      heading={user.name}
      isRounded={true}
      imgSrc={user.image}
    >
      <div className="flex absolute bottom-2 items-center">
        <a
          className="text-sm capitalize text-zinc-300 hover:underline"
          href="https://open.spotify.com/user/31wsxmhc25wkyn7vftepkw4raw5e"
          target="_blank"
          rel="noreferrer"
        >
          {user.artists.length} following
        </a>
      </div>
    </RecordHeader>
  );
};

export const PlaylistHeader: React.FC<{ playlist: Playlist }> = ({
  playlist,
}) => {
  return (
    <RecordHeader
      type="playlist"
      heading={playlist.name}
      isRounded={true}
      imgSrc={playlist.image}
    >
      <div className="flex absolute bottom-2 items-center">
        <p className="text-sm capitalize text-zinc-300 hover:underline">
          {playlist.desc}
        </p>
      </div>
    </RecordHeader>
  );
};

const RecordHeader: React.FC<
  PropsWithChildren<{
    type: "profile" | "playlist";
    imgSrc: string;
    heading: string;
    isRounded: boolean;
  }>
> = ({ type, heading, isRounded, children, imgSrc }) => {
  return (
    <div className="w-full h-52 flex items-center px-3 space-x-4 relative">
      <img
        src={imgSrc}
        alt="user"
        className={`w-32 h-32 ${
          isRounded ? "rounded-full" : "rounded-none"
        } ml-5 shadow-2xl shadow-zinc-900`}
      />
      <div className="h-full">
        <p className="uppercase text-zinc-200 text-xs font-bold mb-10">
          {type}
        </p>
        <p className="text-8xl font-extrabold">{heading}</p>
        {children}
      </div>
    </div>
  );
};
