// Centralisation of access to `env` is required to guarantee that
// dotenv is loaded before reading config from env.
// eslint-disable-next-line import/no-internal-modules
import "dotenv/config";

import { env } from "process";

export const PORT = env.PORT ?? "3000";
export const LISTEN_ADDRESS = env.LISTEN_ADDRESS;
