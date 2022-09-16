// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { userRouter } from "./user";
import { playlistRouter } from "./playlist";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", userRouter)
  .merge("playlist.", playlistRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
