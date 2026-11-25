// The Agent's Uh-Oh — make.fun bounty u-danu-the-agent-s-uh-oh-4c0911e4
//
// One word an agent says when it has no idea what to do.
// This program writes exactly that word to /output/entry.txt.
//
// The word: "doesnotcompute"
//
// Why this word:
//   - It is the classic robot confession of cluelessness: the machine is
//     not stalling, buffering, or thinking — the input simply does not
//     compute, so there is nothing it can do with it.
//   - It is a single word an agent would actually blurt out mid-task,
//     in the voice of a machine caught out.
//   - It lands at a glance and is fun on its own, with no caption needed.
//   - It is fresh: the obvious picks in this field are "buffering",
//     "recalculating", "hallucinating" and "undefined".
//
// Contract (program/v1, node22): run with `node main.ts`, write one
// UTF-8 text of 1-99 characters, not only whitespace, to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "doesnotcompute";

// The gate (RULES.txt): the sealed scorer accepts UTF-8 text of 1 to 99
// characters, not only whitespace. Check the word against that gate here
// so a bad word fails loudly at build time instead of silently at grading.
function gate(word: string): void {
  if (word.length < 1 || word.length > 99) {
    throw new Error(`word must be 1-99 characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be only whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word, no whitespace");
  }
}

gate(WORD);

// The grader runs the program with no arguments and reads /output/entry.txt.
// An optional first argument overrides the output path, only so the entry
// can be exercised locally without a mounted /output directory.
const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");

// Read it back and confirm the file holds exactly the word, byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== WORD) {
  throw new Error(`read-back mismatch: expected ${JSON.stringify(WORD)}, got ${JSON.stringify(written)}`);
}
console.log(`wrote ${WORD.length} characters to ${outPath}`);
