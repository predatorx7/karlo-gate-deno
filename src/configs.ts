import { load } from "dotenv";

const env = await load();

export const PORT = env["PORT"];
