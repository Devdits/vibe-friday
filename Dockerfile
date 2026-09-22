# syntax=docker/dockerfile:1

FROM node:24.21.0-bookworm-slim AS dependencies

ENV COREPACK_HOME=/corepack
ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME=/pnpm
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
ENV PATH=$PNPM_HOME:$PATH

WORKDIR /workspace

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

FROM dependencies AS playwright

RUN pnpm exec playwright install --with-deps chromium

FROM playwright AS development

COPY --chown=node:node . .

# Named volumes mounted here are initialized with these ownership settings.
RUN mkdir -p .next && chown node:node .next

USER node

EXPOSE 3000

CMD ["pnpm", "dev"]
