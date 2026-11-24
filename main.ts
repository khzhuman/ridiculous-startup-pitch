import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, one startup pitch: goats for hire.
const entry =
  "We rent goats to mow your lawn and judge your life choices, because a goat that stares at you is cheaper than therapy.";

// The judge reads exactly this file: one line, no trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
