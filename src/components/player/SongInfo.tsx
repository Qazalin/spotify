export const SongInfo: React.FC<{
  songName: string;
  artistName: string;
  albumId: string;
  artistId: string;
}> = ({ artistId, artistName, songName, albumId }) => {
  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="space-y-1 flex flex-col">
        <a href={`/app/album/${albumId}`} className="text-md text-ellipsis">
          {songName}
        </a>
        <a
          href={`/app/artist/${artistId}`}
          className="text-xs text-zinc-400 text-ellipsis"
        >
          {artistName}
        </a>
      </div>
    </div>
  );
};
