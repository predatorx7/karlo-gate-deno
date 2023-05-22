import { load } from "dotenv";

const env = await load();

const DEFAULT_PORT = 4000;

export default {
  PORT: +(env["PORT"] || DEFAULT_PORT),
};
