import { createRouter } from "./context";
import { z } from "zod";

export const songRouter = createRouter().query("getSongsByAlbum", {
  input: z.object({
    albumId: z.string(),
  }),
  async resolve({ input, ctx }) {
    const songs = await ctx.prisma.song.findMany({
      where: {
        albumId: input.albumId,
      },
      include: {
        Album: {
          include: {
            Artist: true,
          },
        },
      },
    });
    return songs;
  },
});
