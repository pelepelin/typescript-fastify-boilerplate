import { env } from "./env";
import { server } from "./server";

// Start listening.
server.listen(env.PORT ?? "3000", env.LISTEN_ADDRESS).catch((err: Error) => {
  server.log.error(err.message);
  process.exit(1);
});
