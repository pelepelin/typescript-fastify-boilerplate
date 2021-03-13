import { LISTEN_ADDRESS, PORT } from "./config";
import { server } from "./server";

// Start listening.
server.listen(PORT, LISTEN_ADDRESS).catch((err: Error) => {
  server.log.error(err.message);
  process.exit(1);
});
