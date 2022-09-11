import { PropsWithChildren } from "react";

export const AppMain = () => {
  return (
    <div className="w-full h-full mt-5 space-y-3">
      <RecordSection title="recently played">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <ArtistCard
              key={`recently-played-${i}`}
              coverImage="https://i.scdn.co/image/ab6761610000f178b5f9e28219c169fd4b9e8379"
              name="The Weeknd"
              slug="idk"
            />
          ))}
      </RecordSection>
    </div>
  );
};
const RecordSection: React.FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <div>
      <h1 className="text-md md:text-lg lg:text-xl font-semibold">
        <span className="capitalize"> {title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1, title.length).join(" ")}
      </h1>
      <div className="mt-3 grid grid-cols-9 gap-2 w-full h-64">{children}</div>
    </div>
  );
};

const ArtistCard: React.FC<{
  name: string;
  coverImage: string;
  slug: string;
}> = ({ name, coverImage }) => {
  return (
    <div className="bg-zinc-800 h-full w-full p-2 rounded-md bg-opacity-25 hover:bg-opacity-60 transition-all duration-300 cursor-pointer px-3">
      <img
        src={coverImage}
        alt="artist-cover"
        className="rounded-full w-full mb-3"
      />

      <h3 className="text-md font-[600]">{name}</h3>
      <p className="text-sm capitalize text-zinc-400 mt-1">artist</p>
    </div>
  );
};
