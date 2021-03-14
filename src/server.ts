import { fastify } from "fastify";
import { app } from "./app";
import { HTTPS_SERVER_OPTIONS } from "./config";

export const server = fastify({
  logger: true,
  ...{
    https: HTTPS_SERVER_OPTIONS,
  },
})
  // Register your application as a normal plugin.
  .register(app);
