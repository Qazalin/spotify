import { z } from "zod";
import { createRouter } from "./context";

export const artistRouter = createRouter()
  .query("getInfo", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      const info = await ctx.prisma.artist.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          backgroundImage: true,
          isVerified: true,
          _count: {
            select: {
              favoriteArtist: true,
            },
          },
        },
      });
      return info;
    },
  })
  .query("getTopSongs", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      const artistSongs = await ctx.prisma.artist.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          albums: {
            take: 5, // "top 5 songs"
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
      return artistSongs;
    },
  })
  .query("getDiscography", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const discography = await ctx.prisma.album.findMany({
        where: {
          artistId: input.id,
        },
        take: 9,
        select: {
          id: true,
          image: true,
          name: true,
          createdAt: true,
        },
      });
      return discography;
    },
  })
  .query("getSimilarArtists", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const artists = await ctx.prisma.artist.findMany({
        where: {
          id: {
            not: input.id,
          },
        },
        take: 9,
        select: {
          id: true,
          name: true,
          image: true,
        },
      });
      return artists;
    },
  });
