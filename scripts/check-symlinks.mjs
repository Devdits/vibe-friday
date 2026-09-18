import { lstat, realpath } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const agents = ["planner", "builder", "reviewer", "verifier"];
const links = ["CLAUDE.md", ".github/copilot-instructions.md"];

for (const toolDirectory of [".claude", ".github", ".opencode"]) {
  for (const agent of agents) {
    links.push(`${toolDirectory}/agents/${agent}.md`);
  }
  links.push(`${toolDirectory}/skills/verify-work`);
}

const failures = [];

for (const link of links) {
  const absolutePath = path.join(root, link);

  try {
    const stat = await lstat(absolutePath);
    if (!stat.isSymbolicLink()) {
      failures.push(`${link} is not a symbolic link`);
      continue;
    }

    await realpath(absolutePath);
  } catch (error) {
    failures.push(`${link} does not resolve: ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${links.length} agent configuration symlinks.`);
