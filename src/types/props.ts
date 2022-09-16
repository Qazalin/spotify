import { Artist, Playlist } from "@prisma/client";

export type PropsWithClassName<P> = P & { className?: string };
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
