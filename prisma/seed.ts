import { PrismaClient } from "@prisma/client";
import { albums, artistsData, songsData } from "./songsData";

const prisma = new PrismaClient();

const run = async () => {
  // Create artists
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { id: artist.id },
        update: {},
        create: {
          name: artist.name,
          image: artist.image,
        },
      });
    })
  );

  // Create albums
  await Promise.all(
    albums.map(async (album) => {
      return prisma.album.upsert({
        where: { id: album.id },
        update: {},
        create: {
          name: album.name,
          image: album.image,
          artistId: album.artistId,
          createdAt: album.createdAt,
        },
      });
    })
  );

  // Create songs
  await Promise.all(
    songsData.map(async (s) => {
      return prisma.song.upsert({
        where: { id: s.id },
        update: {},
        create: {
          name: s.name,
          duration: s.duration,
          url: s.url,
          albumId: s.albumId,
          image: s.image,
          createdAt: s.createdAt,
        },
      });
    })
  );

  // Create me
  const user = await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      email: "qazal@dev.com",
      name: "Qazal",
      image:
        "https://i.pinimg.com/564x/4d/34/50/4d34507817d61cccd4d0d4da978972da.jpg",
    },
  });

  // Create playlists
  const songs = await prisma.song.findMany({});
  await Promise.all(
    new Array(10).fill(1).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `My playlist #${i + 1}`,
          desc: "",
          image: "",
          user: {
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({
              id: song.id,
            })),
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
