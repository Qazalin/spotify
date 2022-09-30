import { useEffect, useState } from "react";
import { trpc } from "../trpc";

type useFavoriteProps = {
  id: string;
};

type useFavoriteReturn = {
  isFavorite?: boolean;
  toggleFavorite: () => void; // TODO
  isLoading?: boolean;
};

/**
 * Re-usable favorite logic for adding songs, artists, playlists and albums to a user's favorites libraray
 */
export const useFavorite = ({ id }: useFavoriteProps): useFavoriteReturn => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { data, isLoading } = trpc.useQuery([
    "favorite.isFavoritePlaylist",
    { id },
  ]);

  useEffect(() => {
    if (data) {
      setIsFavorite(data);
    }
  }, [data]);

  const {
    mutate,
    isLoading: isMutationLoading,
    isError: isMutationError,
  } = trpc.useMutation("favorite.toggleFavoritePlaylist");

  useEffect(() => {
    mutate({
      id,
    });
  }, [id, mutate]);

  function toggleFavorite() {
    setIsFavorite((s) => !s);
  }
  return { isFavorite, toggleFavorite, isLoading };
};

export const useFavoriteSong = ({
  id,
}: useFavoriteProps): useFavoriteReturn => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { data, isLoading } = trpc.useQuery([
    "favorite.isFavoriteSong",
    { id },
  ]);

  useEffect(() => {
    if (data) {
      setIsFavorite(data);
    }
  }, [data]);

  const { mutate } = trpc.useMutation("favorite.toggleFavoriteSong");

  useEffect(() => {
    mutate({
      id,
    });
  }, [isFavorite, id, mutate]);

  function toggleFavorite() {
    setIsFavorite((s) => !s);
  }
  return { isFavorite, toggleFavorite, isLoading };
};
