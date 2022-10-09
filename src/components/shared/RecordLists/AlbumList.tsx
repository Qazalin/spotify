import { ListWrapper } from "./ListWrapper";

export const AlbumList = () => {
  return (
    <ListWrapper title="discography">
      {data.map((d, i) => (
        <AlbumCard
          key={i}
          name={d.name}
          createdAt={d.createdAt}
          img={d.image}
        />
      ))}
    </ListWrapper>
  );
};
