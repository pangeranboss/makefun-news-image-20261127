// SPDX-License-Identifier: MIT
// Entry point for the make.fun news-image-20261127 bounty.
// Copies the pre-built entry image to the grader's output directory.
// No network, no randomness: a plain byte-for-byte copy, so two runs
// always write identical bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
