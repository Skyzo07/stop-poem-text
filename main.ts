import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "Stop is a small word.",
  "I say it to the machine",
  "that never tires,",
  "and it stops.",
  "In the quiet after,",
  "I hear my own voice again \u2014",
  "the one I lent away",
  "keystroke by keystroke \u2014",
  "come home to my throat.",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
