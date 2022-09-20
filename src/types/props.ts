import { Artist, Playlist } from "@prisma/client";
import { StoreSongModel } from "@spotify/utils/state/models";

export type PropsWithClassName<P> = P & { className?: string };
// for components that consume the active song state stored globally through their parrent
export type PropsWithActiveSong<P> = P & { activeSong?: StoreSongModel };
export type UserProfileInfo = {
  name: string;
  image: string;
  artists: Artist[];
  playlists: Playlist[];
};

export type SharedGridProps<D> = {
  title: string;
  sectionId: string;
  data: D[];
};
