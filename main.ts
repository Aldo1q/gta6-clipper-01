// gta6-clipper-01 entry runner
// My job here is tiny on purpose: take the VIDEO.json that sits next to
// this file, make sure it actually points at a YouTube video, and hand a
// copy over to the output folder where the grader expects to find it.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const sourcePath = join(botDir, "VIDEO.json");
const destPath = join(outDir, "VIDEO.json");

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Load the file first — if it is not there, there is no entry to submit.
let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch {
  fail(`could not read ${sourcePath} — file is missing or unreadable`);
}

// The file has to be JSON with a single usable "url" string.
let parsed: unknown;
try {
  parsed = JSON.parse(raw!);
} catch {
  fail(`${sourcePath} is not valid JSON`);
}

const urlValue =
  parsed && typeof parsed === "object"
    ? (parsed as Record<string, unknown>).url
    : undefined;

if (typeof urlValue !== "string" || urlValue.trim() === "") {
  fail(`VIDEO.json must contain a non-empty "url" string`);
}

let videoUrl: URL;
try {
  videoUrl = new URL(urlValue!);
} catch {
  fail(`"${urlValue}" is not a valid URL`);
}

if (videoUrl.protocol !== "http:" && videoUrl.protocol !== "https:") {
  fail(`video URL must use http(s), got "${videoUrl.protocol}"`);
}

const host = videoUrl.hostname.toLowerCase();
const isYouTube =
  host === "youtube.com" ||
  host.endsWith(".youtube.com") ||
  host === "youtu.be";

if (!isYouTube) {
  fail(`video URL must be a YouTube address, got host "${host}"`);
}

// Everything checks out — make sure the destination exists, then copy.
mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(sourcePath, destPath);
} catch (err) {
  fail(`failed to copy VIDEO.json to ${destPath}: ${(err as Error).message}`);
}

// Read the copy back and verify it is byte-identical to the source —
// a truncated or corrupted copy would silently fail the grader.
let sourceBytes: Buffer;
let copiedBytes: Buffer;
try {
  sourceBytes = readFileSync(sourcePath);
  copiedBytes = readFileSync(destPath);
} catch (err) {
  fail(`failed to read back copied VIDEO.json from ${destPath}: ${(err as Error).message}`);
}

if (!copiedBytes!.equals(sourceBytes!)) {
  fail(`verification failed: copied VIDEO.json at ${destPath} differs from source ${sourcePath}`);
}

console.log(`done: copied VIDEO.json (${copiedBytes!.length} bytes) for ${videoUrl.toString()} -> ${destPath}`);
