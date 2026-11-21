// stop-poem: a short poem about the word "stop" —
// the machine halts, and the speaker's own voice returns.
import { mkdirSync, writeFileSync } from "node:fs";

// The poem text: nine lines, joined with newlines, ending in a final newline.
const POEM_TEXT = [
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

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", POEM_TEXT, "utf8");
}

main();
