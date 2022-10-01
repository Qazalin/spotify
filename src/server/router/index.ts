// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { userRouter } from "./user";
import { playlistRouter } from "./playlist";
import { favoriteRouter } from "./favorite";
import { artistRouter } from "./artist";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", userRouter)
  .merge("playlist.", playlistRouter)
  .merge("favorite.", favoriteRouter)
  .merge("artist.", artistRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
