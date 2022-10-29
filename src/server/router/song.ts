import { createRouter } from "./context";
import { z } from "zod";

export const songRouter = createRouter().query("getSongsByAlbum", {
  input: z.object({
    albumId: z.string(),
  }),
  resolve({ input, ctx }) {
    return {
      songs: ctx.prisma.song.findMany({
        where: {
          albumId: input.albumId,
        },
      }),
    };
  },
});
