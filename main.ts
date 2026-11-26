// Your AI Therapist's Diagnosis — entry for
// https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41
// Writes one single-line diagnosis (1-200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Node 22, zero dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Revised diagnosis line: sharper end-turn — the needed tab gives up on its own.
const LINE =
  "Diagnosis: chronic tab-hoarding disorder — you have kept 47 tabs open since March, and the one you actually need closed itself out of embarrassment.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Gate: 1-200 chars, non-whitespace, exactly one line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outFile}`);
