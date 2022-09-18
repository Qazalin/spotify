import { PropsWithChildren } from "react";
import { UserProfileInfo } from "types/props";
import { inferQueryOutput } from "utils/trpc";
import { numberWithCommas } from "utils/formatters";

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
          className="text-sm capitalize text-zinc-300"
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

export const PlaylistHeader: React.FC<{
  playlist: inferQueryOutput<"playlist.getPlaylistById">;
}> = ({ playlist }) => {
  if (!playlist) return null;
  return (
    <RecordHeader
      type="playlist"
      heading={playlist.name}
      isRounded={false}
      imgSrc={playlist.image}
    >
      <div className="flex justify-start items-center flex-col space-y-1">
        <p className="text-sm capitalize text-zinc-300 self-start">
          {playlist.desc}
        </p>
        <div className="flex space-x-1 font-light text-sm self-start">
          <a
            className="font-bold hover:underline"
            href={`/app/user/${playlist.User.id}`}
          >
            {playlist.User.name}
          </a>
          <span>·</span>
          <p>{numberWithCommas(playlist._count.favorites)} likes</p>
          <span>·</span>
          <p>{playlist.songs.length} songs</p>
          <span>·</span>
          <p className="text-zinc-400">2:20 hours</p>
          <span>·</span>
        </div>
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
    <div className="w-full h-56 px-3 bg-gradient-to-b from-zinc-600 to-zinc-800 flex justify-start items-center pt-8 relative">
      <div className="flex items-center space-x-4 relative h-full">
        <img
          src={imgSrc}
          alt={type}
          className={`w-32 h-32 lg:w-40 lg:h-40 ${
            isRounded ? "rounded-full" : "rounded-none"
          } ml-5 shadow-2xl shadow-zinc-900`}
        />
        <div className="space-y-4">
          <p className="uppercase text-zinc-200 text-xs font-bold">{type}</p>
          <p className="text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold">
            {heading}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};
