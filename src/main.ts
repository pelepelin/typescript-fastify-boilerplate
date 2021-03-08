import { server } from "./server";

// Start listening.
server
  .listen(process.env.PORT || 3000, process.env.LISTEN_ADDRESS)
  .catch((err: Error) => {
    server.log.error(err.message);
    process.exit(1);
  });
