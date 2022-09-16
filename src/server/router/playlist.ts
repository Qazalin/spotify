import { z } from "zod";
import { createRouter } from "./context";

export const playlistRouter = createRouter().query("getPlaylistById", {
  input: z.object({
    id: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      const playlist = await ctx.prisma.playlist.findUnique({
        where: {
          id: input.id,
        },
        select: {
          // playlist fields
          name: true,
          desc: true,
          image: true,
          // user fields
          user: {
            select: {
              name: true,
              id: true, // for a link to click on the user
            },
          },
          // song fields
          songs: {
            select: {
              id: true, // for a link to click on the song
              name: true,
              Album: {
                select: {
                  name: true,
                  image: true,
                  Artist: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      return playlist;
    } catch (err) {
      console.log(err);
    }
  },
});
