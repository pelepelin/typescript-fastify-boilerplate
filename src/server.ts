import { fastify } from "fastify";
import { app } from "./app";

export const server = fastify({
  logger: true,
})
  // Register your application as a normal plugin.
  .register(app);
