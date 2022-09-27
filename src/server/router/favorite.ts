import { z } from "zod";
import { createProtectedRouter } from "./context";

// I'm very sorry about this, but it was at the cost of less client complexity
export const favoriteRouter = createProtectedRouter()
  .query("getFavorites", {
    input: z.object({
      type: z.enum(["song", "artist", "album", "playlist"]),
    }),
    async resolve({ input, ctx }) {
      const { type } = input;

      switch (
        type // just too long
      ) {
        case "song":
          return await ctx.prisma.favoriteSong.findFirst({
            where: {
              userId: ctx.session.user.id,
            },
          });
        case "artist":
          return await ctx.prisma.favoriteArtist.findFirst({
            where: {
              userId: ctx.session.user.id,
            },
          });
        case "album":
          return await ctx.prisma.favoriteAlbum.findFirst({
            where: {
              userId: ctx.session.user.id,
            },
          });
        case "playlist":
          return await ctx.prisma.favoritePlaylist.findFirst({
            where: {
              userId: ctx.session.user.id,
            },
          });
      }
    },
  })
  .query("isFavorite", {
    input: z.object({
      id: z.string(),
      type: z.enum(["song", "artist", "album", "playlist"]),
    }),
    async resolve({ ctx, input }) {
      const { id, type } = input;
      let foundRecord: unknown;
      switch (
        type // just too long
      ) {
        case "song":
          foundRecord = await ctx.prisma.favoriteSong.findFirst({
            where: {
              userId: ctx.session.user.id,
              songId: id,
            },
          });
        case "artist":
          foundRecord = await ctx.prisma.favoriteArtist.findFirst({
            where: {
              userId: ctx.session.user.id,
              artistId: id,
            },
          });
        case "album":
          foundRecord = await ctx.prisma.favoriteAlbum.findFirst({
            where: {
              userId: ctx.session.user.id,
              albumId: id,
            },
          });
        case "playlist":
          foundRecord = await ctx.prisma.favoritePlaylist.findFirst({
            where: {
              userId: ctx.session.user.id,
              playlistId: id,
            },
          });
      }
      return !!foundRecord;
    },
  })
  .mutation("addFavorite", {
    input: z.object({
      id: z.string(),
      type: z.enum(["song", "artist", "album", "playlist"]),
    }),
    async resolve({ ctx, input }) {
      const { type, id } = input;
      const favorite = await ctx.prisma.userFavorite.create({
        data: {
          userId: ctx.session.user.id,
          [type]: {
            connect: {
              id,
            },
          },
        },
      });
      return favorite;
    },
  })
  .mutation("removeFavorite", {
    input: z.object({
      id: z.string(),
      type: z.enum(["song", "artist", "album", "playlist"]),
    }),
    async resolve({ ctx, input }) {
      const { type, id } = input;
      await ctx.prisma.userFavorite.update({
        where: {
          userId: ctx.session.user.id,
        },
        data: {
          [type]: {
            disconnect: {
              id,
            },
          },
        },
      });
    },
  })
  .mutation("toggleFavorite", {
    input: z.object({
      id: z.string(),
      type: z.enum(["song", "artist", "album", "playlist"]),
    }),

    async resolve({ ctx, input }) {
      const { type, id } = input;
      const isFavorite = await ctx.prisma.userFavorite.findFirst({
        where: {
          userId: ctx.session.user.id,
          [type]: {
            some: {
              id,
            },
          },
        },
      });

      if (isFavorite) {
        await ctx.prisma.userFavorite.update({
          where: {
            userId: ctx.session.user.id,
          },
          data: {
            [type]: {
              disconnect: {
                id,
              },
            },
          },
        });
      } else {
        await ctx.prisma.userFavorite.create({
          data: {
            userId: ctx.session.user.id,
            [type]: {
              connect: {
                id,
              },
            },
          },
        });
      }
    },
  });
