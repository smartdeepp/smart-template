# Smart Vite Template

A modern, opinionated Vite + React 19 template with TypeScript, Tailwind CSS, Shadcn UI, Zustand, React Router v7, React Query, Zod, and more.  
Includes best practices for code quality, formatting, and commit conventions.

## Features

- ⚡️ Vite for fast development and builds
- 🦄 React 19 with TypeScript
- 🎨 Tailwind CSS 4 + Prettier plugin
- 🧩 Shadcn UI
- 🗂️ File-based routing with React Router v7
- 🗃️ Zustand for state management
- 🔥 React Query for data fetching
- ✅ Zod for schema validation
- 🧹 ESLint, Prettier, lint-staged, Husky, Commitlint
- 🏗️ Opinionated project structure

## Usage with Vite

You can quickly scaffold a new project using this template with the following command:

```bash
pnpm dlx degit smartdeepp/smart-template <app_name>
cd my-app
pnpm install
pnpm dev
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 recommended)
- [pnpm](https://pnpm.io/) (recommended)

### Setup

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Start the development server**

   ```bash
   pnpm dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

3. **Format and lint code**

   ```bash
   pnpm format
   pnpm lint
   ```

4. **Prepare git hooks (optional, but recommended)**

   This project uses Husky and Commitlint for commit message linting and pre-commit checks.

   ```bash
   pnpm prepare
   ```

5. **Build for production**

   ```bash
   pnpm build
   ```

6. **Preview the production build**

   ```bash
   pnpm preview
   ```

## Project Structure

- `src/` — Main source code
- `src/routes/` — App routes and route guards
- `src/components/` — Reusable UI components
- `src/store/` — Zustand stores
- `src/lib/` — Utilities and helpers
- `src/constants/` — App-wide constants

## Notes

- Route guard example code is provided in `src/routes/RouteGuard.tsx` (commented out).
- Update `src/routes/routes.config.tsx` to add your routes.
- Commit messages are linted using [Conventional Commits](https://www.conventionalcommits.org/).
