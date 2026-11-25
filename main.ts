// Robot Romance: one-line pickup line for an AI.
// The judge duels lines head to head: the line must be a pickup line aimed
// at a robot or an AI, with setup and punch inside the one line, and the laugh
// has to come from the machine premise itself — not a generic compliment.
// Fresh angle: the context window. An AI sheds old turns as the chat grows,
// so the sweet talk doubles as a true description of how the machine thinks.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you my context window? Because the longer I talk to you, the more I forget everything else.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length}-char entry to ${join(outDir, "entry.txt")}`);
