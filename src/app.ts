import { FastifyPluginAsync } from "fastify";

export const app: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", async (_request, _reply) => ({ root: true }));
};
