import { lstat, realpath } from "node:fs/promises";
import { resolve } from "node:path";

const agentNames = ["planner", "builder", "reviewer", "verifier", "run-logger"];
const links = ["CLAUDE.md", ".github/copilot-instructions.md"];

for (const directory of [".claude", ".github", ".opencode"]) {
  for (const agentName of agentNames) {
    links.push(`${directory}/agents/${agentName}.md`);
  }

  links.push(`${directory}/skills/verify-work`);
}

const failures = [];

for (const link of links) {
  const path = resolve(link);

  try {
    const stats = await lstat(path);
    if (!stats.isSymbolicLink()) {
      failures.push(`${link} is not a symbolic link`);
      continue;
    }

    await realpath(path);
  } catch (error) {
    failures.push(`${link} does not resolve: ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${links.length} agent configuration symlinks.`);
