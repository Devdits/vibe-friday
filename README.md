# Vibe Friday

A small, containerized Next.js starter for an agent-focused web-development
workshop. Participants need Git, Docker and the Docker Compose plugin; Node.js,
pnpm and browser-test dependencies stay inside containers.

## Start

```bash
git clone https://github.com/Devdits/vibe-friday.git
cd vibe-friday
./vibe-friday start
```

Open [http://vibe-friday.localhost:8791](http://vibe-friday.localhost:8791).

## Commands

| Command                | Purpose                                                          |
| ---------------------- | ---------------------------------------------------------------- |
| `./vibe-friday start`  | Build and start the development environment                      |
| `./vibe-friday stop`   | Stop containers while preserving cached dependencies             |
| `./vibe-friday verify` | Run formatting, linting, type checks, tests and build validation |
| `./vibe-friday logs`   | Follow application logs                                          |
| `./vibe-friday shell`  | Open a shell inside the application container                    |

Run `./vibe-friday verify` before considering a change complete. The first run
downloads Chromium for the smoke test and will therefore take longer; Docker
caches it for later runs.

## Agent workflow

The repository includes shared definitions for Claude Code, GitHub Copilot and
OpenCode:

```text
planner → builder → reviewer → verifier
                    ↓
                builder fixes
```

The reviewer must return `APPROVED` before independent verification begins.
Canonical definitions live in `.ai/`; the supported tools discover them through
relative symlinks in their conventional directories.

## Technology

- Node.js 24 LTS
- Next.js with strict TypeScript
- pnpm
- ESLint and Prettier
- Vitest
- Playwright
- Docker Compose

This project intentionally contains no database or premature application
architecture. Agents should introduce infrastructure only when a workshop
requirement needs it.
