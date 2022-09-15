import { Album, Artist, Playlist } from "@prisma/client";

export const ArtistCard: React.FC<{ artist: Artist }> = ({ artist }) => {
  function handleArtistClick() {
    console.log("artist: ", artist.name);
    // TODO: Do some router.push thing and analytics maybe?
  }
  return (
    <RecordCard
      title={artist.name}
      subtitle="Artist"
      imgSrc={artist.image}
      onClick={handleArtistClick}
    />
  );
};

export const AlbumCard: React.FC<{ album: Album }> = ({ album }) => {
  function handleAlbumClick() {
    console.log("album: ", album.name);
    // TODO: Do some router.push thing and analytics maybe?
  }
  return (
    <RecordCard
      title={album.name}
      subtitle={`${album.createdAt.getFullYear()} • Album`}
      imgSrc={album.image}
      onClick={handleAlbumClick}
    />
  );
};

export const PlaylistCard: React.FC<{ playlist: Playlist }> = ({
  playlist,
}) => {
  function handlePlaylistClick() {
    console.log("playlist: ", playlist.name);
    // TODO: Do some router.push thing and analytics maybe?
  }
  return (
    <RecordCard
      title={playlist.name}
      subtitle="desc" //TODO change schema
      imgSrc="placeholder.jpeg" //TODO change schema
      onClick={handlePlaylistClick}
    />
  );
};

const RecordCard: React.FC<{
  title: string;
  subtitle: string;
  imgSrc: string;
  onClick: () => void;
}> = ({ title, imgSrc, subtitle, onClick }) => {
  return (
    <div
      className="bg-zinc-800 p-2 rounded-md bg-opacity-25 hover:bg-opacity-60 transition-all duration-300 cursor-pointer px-3 row-span-1 col-span-1"
      onClick={onClick}
    >
      <img
        src={imgSrc}
        alt="cardImage"
        className="rounded-full mb-3 h-fit w-fit"
      />

      <h3 className="text-md font-[600]">{title}</h3>
      <p className="text-sm capitalize text-zinc-400 mt-1">{subtitle}</p>
    </div>
  );
};
