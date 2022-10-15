import { ReactElement } from "react";

export const CardWrapper: React.FC<{
  title: string;
  cards: ReactElement[];
  loading?: boolean;
  roudedCards?: boolean;
}> = ({ title, cards, loading, roudedCards = false }) => {
  return (
    <div className="w-full mt-5">
      <h1 className="text-md md:text-lg lg:text-xl font-semibold mb-3">
        <span className="capitalize"> {title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1, title.length).join(" ")}
      </h1>
      <div className="flex space-x-3">
        {cards.map((C) => {
          return C;
        })}
      </div>
    </div>
  );
};
