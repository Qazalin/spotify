import { JSXElementConstructor } from "react";

// WIP
export const ListWrapper: React.FC<{
  title: string;
  cards: JSXElementConstructor<unknown>[];
}> = ({ title, cards }) => {
  return (
    <div className="w-full mt-5">
      <h1 className="text-md md:text-lg lg:text-xl font-semibold mb-3">
        <span className="capitalize"> {title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1, title.length).join(" ")}
      </h1>
      <div className="flex space-x-3">
        {cards.map((C, i) => (
          <C key={i} />
        ))}
      </div>
    </div>
  );
};
