import { PropsWithChildren } from "react";
import { UserProfileInfo } from "types/props";
import Image from "next/image";
import { Verified } from "../icons/Verified";

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

export const RecordHeader: React.FC<
  PropsWithChildren<{
    type: "profile" | "playlist" | "artist";
    imgSrc: string;
    heading: string;
    isRounded: boolean;
    verifiedArtist?: boolean;
  }>
> = ({ type, heading, isRounded, children, imgSrc, verifiedArtist }) => {
  return (
    <div
      className={`bg-opacity-5 w-full h-64 px-3 flex justify-start items-center pt-8 relative bg-gradient-to-b from-zinc-700 to-transparent`}
    >
      <div className="flex items-center space-x-4 relative h-full w-full">
        <Image
          src={imgSrc}
          width={200}
          height={200}
          alt="cardImage"
          className={`${
            isRounded ? "rounded-full" : "rounded-none"
          } mb-3 object-cover shadow-2xl show-black`}
        />
        <div className="space-y-4">
          {type !== "artist" ? (
            <p className="uppercase text-zinc-200 text-xs font-bold">{type}</p>
          ) : verifiedArtist ? (
            <div className="flex items-center space-x-1">
              <Verified className="w-5 h-5 fill-blue-500" />
              <p className="font-light text-sm">Verified Artist</p>
            </div>
          ) : (
            <p className="font-light text-sm">Artist</p>
          )}
          <p className="text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold">
            {heading}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};
