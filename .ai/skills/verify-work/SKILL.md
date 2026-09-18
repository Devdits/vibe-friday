---
name: verify-work
description: Verify a Vibe Friday change before review or completion.
---

# Verify work

Use this skill after implementation, during review, and before declaring a task
complete.

1. Ensure the development environment is healthy with `./vibe-friday start`.
2. Run `./vibe-friday verify` and preserve the final result as evidence.
3. Check the task's acceptance criteria through observable behaviour.
4. Inspect logs with `./vibe-friday logs` only when diagnosing a failure.
5. Report failures precisely; do not describe a check as passing unless it ran.

The verification command covers formatting, ESLint, TypeScript, unit tests,
agent-configuration symlinks, the Next.js build and the Playwright smoke test.
