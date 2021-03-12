// The only real purpose of this module is guarantee that dotenv is loaded before access to env.

// eslint-disable-next-line import/no-internal-modules
import "dotenv/config";

export const env = process.env;
