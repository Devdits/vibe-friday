<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Vibe Friday agent instructions

This is a deliberately small, containerized Next.js playground for practising
prompting, skills, delegation and verification. The host should need only Git,
Docker and the Docker Compose plugin. Do not require host-installed Node.js,
pnpm or browser tooling.

## Essential commands

- `./vibe-friday start` — build and start the application.
- `./vibe-friday stop` — stop the application.
- `./vibe-friday verify` — run every required quality check.
- `./vibe-friday logs` — follow application logs.
- `./vibe-friday shell` — open a shell in the application container.

The application is available at `http://vibe-friday.localhost:8791` after startup.
Use the wrapper commands rather than host-side `node`, `npm`, `pnpm` or `npx`.

## Required workflow

For substantial product work, use the project agents in this order:

1. `planner` turns the request into a bounded plan and acceptance criteria.
2. `builder` implements the approved plan and runs `./vibe-friday verify`.
3. `reviewer` inspects the resulting diff for critical issues without editing.
4. If the reviewer returns `BLOCKED`, the builder fixes the findings and asks
   the reviewer to review again.
5. Only after the reviewer returns `APPROVED`, `verifier` independently checks
   the acceptance criteria and required commands.

Work is not complete until both reviewer and verifier approve it. Do not create
delegation overhead for trivial questions or tiny documentation-only changes.

## Project constraints

- Keep the starter simple; add architecture only when a feature requires it.
- The project is for local workshop use and will not be deployed.
- Preserve keyboard accessibility and semantic HTML.
- Treat `./vibe-friday verify` as the definition of technical completion.
- Never commit credentials, tokens, personal data or company information.
- Use synthetic content only.
- Do not edit generated dependency files manually; update them through pnpm in
  the container.

## Agent configuration

Canonical agents and skills live under `.ai/`. Tool-specific directories contain
relative symlinks only. Update the canonical source rather than replacing a
symlink with a copy. `./vibe-friday verify` validates this structure.
