// Centralisation of access to `env` is required to guarantee that
// dotenv is loaded before reading config from env.
// eslint-disable-next-line import/no-internal-modules
import "dotenv/config";

import { ServerOptions } from "https";
import { env } from "process";

export const envBoolean = (s: string | undefined): boolean =>
  s === "true" || s === "1";

export const base64decode = (s: string | undefined): Buffer | undefined =>
  s ? Buffer.from(s, "base64") : undefined;

export const PORT = env.PORT ?? "3000";
export const LISTEN_ADDRESS = env.LISTEN_ADDRESS;

export const HTTPS_SERVER_OPTIONS: ServerOptions | undefined = envBoolean(
  env.SERVER_HTTPS
)
  ? {
      cert: base64decode(env.SERVER_CERT),
      key: base64decode(env.SERVER_KEY),
      pfx: base64decode(env.SERVER_PFX),
      ca: base64decode(env.SERVER_CA),
      passphrase: env.SERVER_PASSPHRASE,
    }
  : undefined;
