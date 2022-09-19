export const AppWelcome = () => {
  // what time is it?
  const time = new Date().getHours();
  let msg;
  if (time >= 6 && time < 12) {
    msg = "Good morning";
  }
  if (time >= 12 && time < 18) {
    msg = "Good afternoon";
  }
  if (time >= 18 && time < 23) {
    msg = "Good evening";
  }

  return (
    <>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">{msg}</h1>
      <div className="grid grid-cols-2 w-full h-52 grid-rows-3 gap-2 mt-3">
        <SongCard
          coverImage="https://i.scdn.co/image/8cdae1f5da8a3282eba1f09bed715380e217164c"
          title="Vitalik: Ethereum, Part 2"
        />
        <SongCard
          coverImage="https://i.scdn.co/image/8cdae1f5da8a3282eba1f09bed715380e217164c"
          title="Vitalik: Ethereum, Part 2"
        />
        <SongCard
          coverImage="https://i.scdn.co/image/8cdae1f5da8a3282eba1f09bed715380e217164c"
          title="Vitalik: Ethereum, Part 2"
        />
        <SongCard
          coverImage="https://i.scdn.co/image/8cdae1f5da8a3282eba1f09bed715380e217164c"
          title="Vitalik: Ethereum, Part 2"
        />
        <SongCard
          coverImage="https://i.scdn.co/image/8cdae1f5da8a3282eba1f09bed715380e217164c"
          title="Vitalik: Ethereum, Part 2"
        />
      </div>
    </>
  );
};
const SongCard: React.FC<{
  coverImage: string;
  title: string;
  slug: string;
}> = ({ coverImage, title, slug }) => {
  return (
    <div className="bg-zinc-400 rounded-sm bg-opacity-20 hover:bg-opacity-30 cursor-pointer transition-all duration-500 flex space-x-2 items-center">
      <img src={coverImage} alt="song-cover" className="h-full rounded-l-sm" />
      <p className="font-[450]">{title}</p>
    </div>
  );
};
