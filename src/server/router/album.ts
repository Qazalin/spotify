import { createRouter } from "./context";
import { z } from "zod";

export const albumRouter = createRouter().query("getAlbumByArtist", {
  input: z.object({
    artistId: z.string(),
  }),
  resolve({ input, ctx }) {
    return {};
  },
});
