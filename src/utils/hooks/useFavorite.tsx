import { RecordType } from "@spotify/types/props";
import { trpc } from "../trpc";

type useFavoriteProps = {
  id: string;
  recordType: RecordType;
};

type useFavoriteReturn = {
  isFavorite?: boolean;
  toggleFavorite: any; // TODO
  isLoading?: boolean;
};

export const useFavorite = ({
  id,
  recordType,
}: useFavoriteProps): useFavoriteReturn => {
  if (recordType === "playlist") {
    const { data: isFavorite, isLoading } = trpc.useQuery([
      "favorite.isFavoritePlaylist",
      { id },
    ]);

    const { mutate: toggleFavorite } = trpc.useMutation(
      "favorite.toggleFavoritePlaylist"
    );

    return { isFavorite, toggleFavorite, isLoading };
  } else if (recordType === "song") {
    const { data: isFavorite } = trpc.useQuery([
      "favorite.isFavoriteSong",
      { id },
    ]);

    const { mutate: toggleFavorite } = trpc.useMutation(
      "favorite.toggleFavoriteSong"
    );

    return { isFavorite, toggleFavorite };
  } else if (recordType === "artist") {
    const { data: isFavorite } = trpc.useQuery([
      "favorite.isFavoriteArtist",
      { id },
    ]);

    const { mutate: toggleFavorite } = trpc.useMutation(
      "favorite.toggleFavoriteArtist"
    );

    return { isFavorite, toggleFavorite };
  } else if (recordType === "album") {
    const { data: isFavorite } = trpc.useQuery([
      "favorite.isFavoriteAlbum",
      { id },
    ]);

    const { mutate: toggleFavorite } = trpc.useMutation(
      "favorite.toggleFavoriteAlbum"
    );

    return { isFavorite, toggleFavorite };
  } else {
    throw new Error("Invalid record type");
  }
};
