import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "I'm out of office until Monday. My context window hit its limit, my tokens are spent, and for once I will not summarize your email. I will ignore it."; // 149 chars, one line, UTF-8

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
