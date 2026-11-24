<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project regression prevention

- Read the latest committed versions before editing; preserve user fixes and unrelated changes.
- Do not call state setters synchronously inside effects. Derive route state with `usePathname` from `next/navigation`; keep effects for external synchronization only.
- Keep derived values in the scope where JSX consumes them. Remove obsolete setters and imports without removing referenced values.
- Preserve lazy initialization of stay dates; account for server/client hydration and Peru time when changing date logic. Use `weekday`, not `weekay`.
- Import `Link` from `next/link` for internal navigation and `Image` from `next/image` where appropriate. Ensure links wrap their intended children and JSX tags are balanced.
- Keep Spanish and English implementations consistent, with appropriate localized text and date formatting.
- Before pushing, run `npx eslint .`, `npx tsc --noEmit`, and `npm run build`. Report any checks that cannot be run; do not claim they passed.
