import { z } from "zod";
import { createProtectedRouter } from "./context";

export const userRouter = createProtectedRouter()
  .mutation("updateMe", {
    // the user can change their name or image
    input: z.object({
      name: z.string(),
      image: z.string(),
    }),
    async resolve({ ctx, input }) {
      try {
        await ctx.prisma.user.update({
          where: {
            id: ctx.session.user.id,
          },
          data: {
            name: input.name,
            image: input.image,
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  })
  .query("getMe", {
    async resolve({ ctx }) {
      return ctx.prisma.user.findUnique({
        where: {
          id: ctx.session.user.id,
        },
        select: {
          name: true,
          image: true,
          favoriteSongs: true,
          playlists: true,
        },
      });
    },
  });
