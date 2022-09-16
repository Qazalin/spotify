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
          createdAt: s.createdAt,
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
