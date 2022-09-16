import { Artist } from "@prisma/client";
import { PropsWithChildren, useEffect, useState } from "react";
import { SharedGridProps } from "types/props";
import { useTailwindScreen } from "utils/responsiveBreakpoints";
import { ArtistCard } from "./RecordCard";

export const ArtistGrid: React.FC<SharedGridProps<Artist>> = ({
  title,
  sectionId,
  data,
}) => {
  type GridSize = {
    cols: string;
    maxLen: number;
  };
  const [sizes, setSizes] = useState<GridSize>({
    cols: "grid-cols-9",
    maxLen: 9,
  });
  const dim = useTailwindScreen();

  useEffect(() => {
    console.log(dim);
    switch (dim) {
      case "sm":
        setSizes({ cols: "grid-cols-3", maxLen: 3 });
        break;
      case "md":
        setSizes({ cols: "grid-cols-3", maxLen: 3 });
        break;
      case "lg":
        setSizes({ cols: "grid-cols-5", maxLen: 5 });
        break;
      case "xl":
        setSizes({ cols: "grid-cols-6", maxLen: 6 });
        break;
      case "2xl":
        setSizes({ cols: "grid-cols-9", maxLen: 9 });
        break;
    }
  }, [dim]);

  // check the type of data
  // if it's an array of artists, then map over it and return the artist cardImage
  // if it's an array of albums, then map over it and return the album cardImage
  // if it's an array of playlists, then map over it and return the playlist cardImage
  // if it's an array of songs, then map over it and return the song cardImage

  return (
    <GridList
      title={title}
      sectionId={sectionId}
      gridCols={sizes.cols}
      hasMore={data.length > sizes.maxLen}
    >
      {data.slice(0, sizes.maxLen).map((a, i) => (
        <ArtistCard artist={a} key={`artist-${i}`} />
      ))}
    </GridList>
  );
};

const GridList: React.FC<
  PropsWithChildren<{
    title: string;
    sectionId: string;
    gridCols: string;
    hasMore: boolean;
  }>
> = ({ title, sectionId, children, gridCols, hasMore }) => {
  // TODO add a routing for sectionId
  return (
    <div className="mt-5 relative w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-md md:text-lg lg:text-xl font-semibold">
          <span className="capitalize"> {title.split(" ")[0]}</span>{" "}
          {title.split(" ").slice(1, title.length).join(" ")}
        </h1>
        {hasMore ? (
          <p className="text-xs text-zinc-400 font-bold cursor-pointer">
            Show all
          </p>
        ) : null}
      </div>
      <div className={`mt-3 grid ${gridCols} gap-2 w-full h-64`}>
        {children}
      </div>
    </div>
  );
};
