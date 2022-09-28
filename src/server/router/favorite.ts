import { z } from "zod";
import { createProtectedRouter } from "./context";

// Every one of the 4 records have 2 operations: isFavorite, toggleFavorite
export const favoriteRouter = createProtectedRouter()
  /////////////////////////////////////// Song ///////////////////////////////////////
  .query("isFavoriteSong", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input: { id }, ctx }) {
      const favorite = await ctx.prisma.favoriteSong.findFirst({
        where: {
          songId: id,
          userId: ctx.session.user.id,
        },
      });
      return favorite !== null;
    },
  })
  .mutation("toggleFavoriteSong", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input: { id }, ctx }) {
      const favorite = await ctx.prisma.favoriteSong.findFirst({
        where: {
          songId: id,
          userId: ctx.session.user.id,
        },
      });
      if (favorite) {
        await ctx.prisma.favoriteSong.delete({
          where: {
            id: favorite.id,
          },
        });
      } else {
        await ctx.prisma.favoriteSong.create({
          data: {
            songId: id,
            userId: ctx.session.user.id,
          },
        });
      }
      return true;
    },
  })
  /////////////////////////////////////// Playlist ///////////////////////////////////////
  .query("isFavoritePlaylist", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input: { id }, ctx }) {
      const favorite = await ctx.prisma.favoritePlaylist.findFirst({
        where: {
          playlistId: id,
          userId: ctx.session.user.id,
        },
      });
      return favorite !== null;
    },
  })
  .mutation("toggleFavoritePlaylist", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input: { id }, ctx }) {
      const favorite = await ctx.prisma.favoritePlaylist.findFirst({
        where: {
          playlistId: id,
          userId: ctx.session.user.id,
        },
      });
      if (favorite) {
        await ctx.prisma.favoritePlaylist.delete({
          where: {
            id: favorite.id,
          },
        });
      } else {
        await ctx.prisma.favoritePlaylist.create({
          data: {
            playlistId: id,
            userId: ctx.session.user.id,
          },
        });
      }
      return true;
    },
  })
  /////////////////////////////////////// Album ///////////////////////////////////////
  .query("isFavoriteAlbum", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input: { id }, ctx }) {
      const favorite = await ctx.prisma.favoriteAlbum.findFirst({
        where: {
          albumId: id,
          userId: ctx.session.user.id,
        },
      });
      return favorite !== null;
    },
  })
  .mutation("toggleFavoriteAlbum", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input: { id }, ctx }) {
      const favorite = await ctx.prisma.favoriteAlbum.findFirst({
        where: {
          albumId: id,
          userId: ctx.session.user.id,
        },
      });
      if (favorite) {
        await ctx.prisma.favoriteAlbum.delete({
          where: {
            id: favorite.id,
          },
        });
      } else {
        await ctx.prisma.favoriteAlbum.create({
          data: {
            albumId: id,
            userId: ctx.session.user.id,
          },
        });
      }
      return true;
    },
  })
  /////////////////////////////////////// Artist ///////////////////////////////////////
  .query("isFavoriteArtist", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input: { id }, ctx }) {
      const favorite = await ctx.prisma.favoriteArtist.findFirst({
        where: {
          artistId: id,
          userId: ctx.session.user.id,
        },
      });
      return favorite !== null;
    },
  })
  .mutation("toggleFavoriteArtist", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input: { id }, ctx }) {
      const favorite = await ctx.prisma.favoriteArtist.findFirst({
        where: {
          artistId: id,
          userId: ctx.session.user.id,
        },
      });
      if (favorite) {
        await ctx.prisma.favoriteArtist.delete({
          where: {
            id: favorite.id,
          },
        });
      } else {
        await ctx.prisma.favoriteArtist.create({
          data: {
            artistId: id,
            userId: ctx.session.user.id,
          },
        });
      }
      return true;
    },
  });
