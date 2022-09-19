export const SongInfo: React.FC<{
  songName: string;
  artistName: string;
  albumId: string;
  artistId: string;
}> = ({ artistId, artistName, songName, albumId }) => {
  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="space-y-2 flex flex-col">
        <a href={`/app/album/${albumId}`}>{songName}</a>
        <a href={`/app/artist/${artistId}`}>{artistName}</a>
      </div>
    </div>
  );
};
