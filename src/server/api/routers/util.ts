import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  title: privateProcedure.query(async ({ ctx }) => {
    const project = await ctx.prisma.project.findUnique({
      where: {
        userId: ctx.userId,
      },
    });
    return {
      title: project?.title,
    };
  }),
});
