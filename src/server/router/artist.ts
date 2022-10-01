import { z } from "zod";
import { createRouter } from "./context";

export const artistRouter = createRouter().query("getArtistById", {
  input: z.object({
    id: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      const playlist = await ctx.prisma.artist.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          backgroundImage: true,
          isVerified: true,
          albums: {
            select: {
              id: true,
              name: true,
              image: true,
              createdAt: true,
              songs: {
                take: 1,
              },
            },
          },

          _count: {
            select: {
              favoriteArtist: true,
            },
          },
        },
      });
      return playlist;
    } catch (err) {
      console.log(err);
      throw new Error("Error getting artist");
    }
  },
});
