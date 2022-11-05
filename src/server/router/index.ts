// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { userRouter } from "./user";
import { playlistRouter } from "./playlist";
import { favoriteRouter } from "./favorite";
import { artistRouter } from "./artist";
import { songRouter } from "./song";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", userRouter)
  .merge("playlist.", playlistRouter)
  .merge("favorite.", favoriteRouter)
  .merge("artist.", artistRouter)
  .merge("song.", songRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
