import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filename = join(__dirname, "test", "test.min.js");

const code = "export function double(a){return a+a;}\n";

await writeFile(filename, code, "utf8");
