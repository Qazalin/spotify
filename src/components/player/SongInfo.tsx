export const SongInfo: React.FC<{
  songName: string;
  artistName: string;
  albumId: string;
  artistId: string;
}> = ({ artistId, artistName, songName, albumId }) => {
  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="space-y-2 flex flex-col">
        <a href={`/app/album/${albumId}`} className="text-sm md:text-md">
          {songName}
        </a>
        <a
          href={`/app/artist/${artistId}`}
          className="text-xs md:text-sm text-zinc-400"
        >
          {artistName}
        </a>
      </div>
    </div>
  );
};
