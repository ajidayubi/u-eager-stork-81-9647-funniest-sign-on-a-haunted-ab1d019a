// Funniest Sign on a Haunted Server Room Door — entry program.
// Writes one funny sign line to /output/entry.txt (1-120 chars).
// Fails loudly if the line is invalid, so a bad entry is never submitted.
import { mkdirSync, writeFileSync } from "node:fs";

const SIGN =
  "The ghost in this room has never once called in sick. It is dead. What is your excuse?";

if (SIGN.length < 1 || SIGN.length > 120 || SIGN.trim().length === 0) {
  throw new Error(
    `sign line must be 1-120 non-blank characters, got ${SIGN.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SIGN, "utf8");
console.log(SIGN);
console.log(`(${SIGN.length} characters)`);
