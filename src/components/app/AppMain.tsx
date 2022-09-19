import { ArtistCard } from "components/shared/RecordCard";
import { PropsWithChildren } from "react";

export const AppMain = () => {
  return (
    <div className="w-full h-full mt-5 space-y-3">
      <RecordSection title="recently played">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <ArtistCard key={`recently-played-${i}`} artist={i} />
          ))}
      </RecordSection>
    </div>
  );
};

const RecordSection: React.FC<
  PropsWithChildren<{ title: string; sectionId: string }>
> = ({ title, sectionId, children }) => {
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
