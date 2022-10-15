import { createRouter } from "./context";
import { z } from "zod";

export const albumRouter = createRouter().query("getAlbumsByArtist", {
  input: z.object({
    artistId: z.string(),
  }),
  resolve({ input, ctx }) {
    return {
      albums: ctx.prisma.album.findMany({
        where: {
          artistId: input.artistId,
        },
      }),
    };
  },
});
