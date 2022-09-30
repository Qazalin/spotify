import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const FavoriteButton: React.FC<{
  isFavorite?: boolean;
  toggleFavorite: () => void;
}> = ({ isFavorite, toggleFavorite }) => {
  if (!isFavorite) {
    return (
      <AiOutlineHeart
        className={`w-full h-full text-zinc-400 hover:text-zinc-100 stroke-zinc-100`}
        onClick={() => toggleFavorite()}
      />
    );
  }
  return (
    <AiFillHeart
      className={`w-full h-full text-zinc-400 fill-green-400 my-auto`}
      onClick={() => toggleFavorite()}
    />
  );
};
