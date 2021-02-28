import { fastify } from "fastify";
import { app } from "./app";

const server = fastify({
  logger: true,
});

// Register your application as a normal plugin.
void server.register(app);

// Start listening.
server
  .listen(process.env.PORT || 3000, process.env.LISTEN_ADDRESS)
  .catch((err: Error) => {
    server.log.error(err.message);
    process.exit(1);
  });
