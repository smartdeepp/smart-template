// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import { globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  [
    globalIgnores(['dist']),
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommendedTypeChecked,
        tseslint.configs.stylisticTypeChecked,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
        pluginQuery.configs['flat/recommended'],
      ],

      languageOptions: {
        ecmaVersion: 2020,
        globals: {
          ...globals.browser,
          alert: 'off',
          prompt: 'off',
        },
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json', './tsconfig.storybook.json'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
      rules: {
        'react-refresh/only-export-components': 'off',
      },
    },
    {
      plugins: {
        'simple-import-sort': simpleImportSort,
        'unused-imports': unusedImports,
      },
      rules: {
        // 🔹 Auto-sort imports with custom grouping
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // 1. External libraries
              ['^react', '^@?\\w'],

              // 2. Project imports (components, hooks, store, etc.)
              ['^@app/component', '^@app/hooks', '^@app/store', '^@app'],

              // 3. CSS imports
              ['^.+\\.(css|scss|sass|less)$'],

              // 4. Type-only imports (always separate)
              ['^\\u0000?type\\b', '^.*\\btype\\b'],

              // 5. Relative imports (same folder and parent folders)
              ['^\\./', '^\\.\\./'],
            ],
          },
        ],

        'simple-import-sort/exports': 'error',

        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
  storybook.configs['flat/recommended'],
);
