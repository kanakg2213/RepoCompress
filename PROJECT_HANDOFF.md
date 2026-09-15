# Repomix Project Handoff

Use `project-context-compact.xml` as the primary context bundle for this project. It contains the core source, tests, website server, website client components/theme, English documentation, configuration, and project instructions.

`project-context.xml` is the broader full bundle. It contains 914 files and approximately 1,014,033 tokens, so use it only when the receiving agent supports a very large context window.

## Project

Repomix is a TypeScript/Node.js CLI and web application that packs repository contents into AI-friendly XML, Markdown, JSON, or plain text output. The repository includes:

- `src/`: CLI, configuration, packaging, file processing, metrics, security, token counting, Tree-sitter, and shared utilities.
- `tests/`: unit and integration tests mirroring the source structure.
- `website/client/`: VitePress documentation site and Vue components.
- `website/server/`: Hono-based API for browser packing requests.
- `lib/`: generated TypeScript build output.

## Current Work Completed

- Added a Repomix-specific visual system to the VitePress site: paper grid, ink/orange palette, authored homepage hero, command-panel visual, feature cards, buttons, navigation, and badges.
- Added dark mode tokens and dark surfaces in `website/client/.vitepress/theme/style.css` and `website/client/.vitepress/theme/custom.css`.
- Imported the shared theme stylesheet from `website/client/.vitepress/theme/index.ts`.
- Added an IPv4/IPv6-compatible local API bind in `website/server/src/index.ts` using `HOST` when provided and `::` by default. This fixes `localhost:8080` failures on macOS while preserving deployment overrides.
- The local API health endpoint returns `OK` on both `http://localhost:8080/health` and `http://127.0.0.1:8080/health`.

## Local Development

Start the packing API:

```bash
npm --prefix website/server run dev
```

The API listens on port `8080`.

Start the documentation/frontend site in another terminal:

```bash
npm --prefix website/client run docs:dev -- --host 127.0.0.1
```

The frontend listens on `http://127.0.0.1:5173/` and uses `http://localhost:8080` as its development API base URL unless `VITE_API_BASE_URL` is set.

## Validation

Website validation:

```bash
npm --prefix website/client run lint
npm --prefix website/client run docs:build
```

Server validation:

```bash
npm --prefix website/server run lint
```

Root validation normally uses:

```bash
npm run lint
npm run test
```

## Important Rules

- Follow `AGENTS.md` and `.github/instructions/base.instructions.md`.
- Do not manually edit generated schemas under `website/client/src/public/schemas/`.
- Website changes should be checked with `npm run docs:build` from `website/client`.
- User-facing documentation changes may need updates in all 15 language directories.
- Keep GitHub Actions pinned to full commit SHAs with version comments.
- Use dependency injection through `deps` objects where practical.
- Do not commit secrets or `.env` files.

## Receiving-Agent Prompt

Read `PROJECT_HANDOFF.md` first, then read `project-context-compact.xml`. Treat the files in the workspace as authoritative over this note. Continue from the current implementation instead of recreating the project. Preserve the existing Repomix visual language, dark mode, and local API/frontend startup behavior. Before changing code, inspect the nearest owning abstraction and run a focused validation after each substantive edit.

## Repomix Security Scanner Note

Repomix excluded some files after flagging possible secrets. In this repository many are false positives caused by URLs, test fixtures, token-count examples, or security-related code. The compact and full bundle summaries report the excluded paths. If a missing file is needed, read it directly from the workspace rather than assuming it was intentionally removed.
