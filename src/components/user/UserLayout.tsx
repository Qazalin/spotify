import { Artist, Playlist } from "@prisma/client";
import { AppLayout } from "components/player/AppLayout";

type UserProfileInfo = {
  name: string;
  image: string;
  artists: Artist[];
  playlists: Playlist[];
};

export const UserLayout: React.FC<{ user: UserProfileInfo }> = ({ user }) => {
  return (
    <AppLayout>
      <div className="w-full h-full bg-zinc-900"></div>
    </AppLayout>
  );
};
