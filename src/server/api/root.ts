import { createTRPCRouter } from "~/server/api/trpc";
import { projectRouter } from "~/server/api/routers/util";

export const appRouter = createTRPCRouter({
  project: projectRouter,
});

export type AppRouter = typeof appRouter;
