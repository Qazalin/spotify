import { numberWithCommas, inferQueryOutput } from "@spotify/utils";
import { RecordHeader } from "@spotify/components/shared/RecordHeader";

export const PlaylistHeader: React.FC<{
  playlist: inferQueryOutput<"playlist.getPlaylistById">;
}> = ({ playlist }) => {
  if (!playlist) return null;
  return (
    <RecordHeader
      type="playlist"
      heading={playlist.name}
      isRounded={false}
      imgSrc={playlist.image}
    >
      <div className="flex justify-start items-center flex-col space-y-1">
        <p className="text-sm capitalize text-zinc-300 self-start">
          {playlist.desc}
        </p>
        <div className="flex space-x-1 font-light text-sm self-start">
          <a
            className="font-bold hover:underline"
            href={`/app/user/${playlist.User.id}`}
          >
            {playlist.User.name}
          </a>
          <span>·</span>
          <p>{numberWithCommas(playlist._count.favoritePlaylist)} likes</p>
          <span>·</span>
          <p>{playlist.songs.length} songs</p>
          <span>·</span>
          <p className="text-zinc-400">2:20 hours</p>
          <span>·</span>
        </div>
      </div>
    </RecordHeader>
  );
};
