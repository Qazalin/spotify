import { albums } from "@spotify/../prisma/songsData";
import { AppLayout } from "@spotify/components/app";
import { ArtistHeader } from "@spotify/components/artist/ArtistHeader";
import { PlayPauseButton } from "@spotify/components/shared";
import { LoadingScreen } from "@spotify/components/shared/LoadingScreen";
import { durationFormatter, trpc } from "@spotify/utils";
import Image from "next/image";
import { useRouter } from "next/router";

const ArtistPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data: artist, isLoading: isArtistLoading } = trpc.useQuery([
    "artist.getArtistById",
    { id: id as string },
  ]);

  if (isArtistLoading) <LoadingScreen />;
  if (artist) {
    const songs = artist.albums.map((a) => a.songs).flat();
    return (
      <AppLayout>
        <ArtistHeader artist={artist} />
        <div className="mt-5 px-5">
          <div className="flex space-x-5 mb-5">
            <PlayPauseButton className="w-10 h-10 bg-green-400 p-2" />
            <button className="text-[0.6rem] leading-[0.3rem] uppercase p-1 px-3 border-2 border-zinc-400 rounded-sm tracking-widest font-bold text-zinc-200 h-6 self-center">
              following
            </button>
          </div>
          <div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold mb-5">
              Popular
            </p>
            <div className="flex flex-col space-y-2">
              {songs.map((song, i) => {
                const img =
                  albums.find((a) => a.id === song.albumId)?.image || "";
                return (
                  <div
                    key={song.id}
                    className="flex w-full hover:bg-zinc-700 hover:bg-opacity-50 p-2 rounded-md items-center justify-between max-w-5xl"
                  >
                    <div className="flex items-center">
                      <p className="text-zinc-300 mr-4">{i + 1}</p>
                      <Image src={img} width={40} height={40} alt={song.name} />
                      <p className="ml-4">{song.name}</p>
                    </div>

                    <p className="self-end my-auto text-zinc-200">
                      {durationFormatter(song.duration)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
};

export default ArtistPage;
