import { Artist, Playlist } from "@prisma/client";
import { AppLayout } from "components/player/AppLayout";
import { GridList } from "components/shared/GridList";
import { ArtistCard } from "components/shared/RecordCard";

type UserProfileInfo = {
  name: string;
  image: string;
  artists: Artist[];
  playlists: Playlist[];
};

export const UserLayout: React.FC<{ user: UserProfileInfo }> = ({ user }) => {
  return (
    <AppLayout>
      <UserProfileHeader user={user} />
      <GridList title="following" sectionId="blah">
        {user.artists.map((a, i) => (
          <ArtistCard artist={a} key={`artist-${i}`} />
        ))}
      </GridList>
    </AppLayout>
  );
};

const UserProfileHeader: React.FC<{ user: UserProfileInfo }> = ({ user }) => {
  return (
    <div className="w-full h-40 bg-zinc-800 flex items-center px-3 space-x-4 relative">
      <img src={user.image} alt="user" className="w-30 h-30 rounded-full" />
      <div className="">
        <p className="uppercase text-zinc-200 text-xs font-bold">profile</p>
        <p className="text-5xl font-bold">{user.name}</p>
        <p className="absolute bottom-2 text-sm capitalize text-zinc-300 font-semibold">
          {user.artists.length} following
        </p>
      </div>
    </div>
  );
};
