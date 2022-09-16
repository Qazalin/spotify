import { AppLayout } from "components/player/AppLayout";
import { PlaylistHeader } from "components/shared/RecordHeader";

const PlaylistPage = () => {
  return (
    <AppLayout>
      <div className="bg-zinc-800 pt-12">
        <PlaylistHeader
          playlist={{
            name: "Playlist Name",
            desc: "Playlist Description",
            image:
              "https://i.scdn.co/image/ab67706f00000003a0b2b2b2b2b2b2b2b2b2b2b2",
          }}
        />
      </div>
    </AppLayout>
  );
};

export default PlaylistPage;
