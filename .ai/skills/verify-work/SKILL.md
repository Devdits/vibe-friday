---
name: verify-work
description: Verify a Vibe Friday change before review or completion.
---

# Verify work

Use this skill after implementation and before completion.

1. Run `./vibe-friday verify`.
2. Check the acceptance criteria through observable behaviour.
3. Report what ran and its result; use `./vibe-friday logs` to diagnose failures.

The verification command covers formatting, ESLint, TypeScript, unit tests,
agent-configuration symlinks, the Next.js build and the Playwright smoke test.
