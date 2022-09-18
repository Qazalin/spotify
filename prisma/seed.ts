import { PrismaClient } from "@prisma/client";
import { albums, artistsData, songsData } from "./songsData";

const prisma = new PrismaClient();

const run = async () => {
  await prisma.artist.createMany({
    data: artistsData,
    skipDuplicates: true,
  });

  await prisma.album.createMany({
    data: albums,
    skipDuplicates: true,
  });

  await prisma.song.createMany({
    data: songsData,
    skipDuplicates: true,
  });
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
