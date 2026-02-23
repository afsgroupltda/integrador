// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import importZodPlugin from 'eslint-plugin-import-zod'
import globals from 'globals'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
      'import-zod': importZodPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'import-zod/prefer-zod-namespace': 'error',
      'typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'typescript-eslint/explicit-module-boundary-types': 'off',
      'typescript-eslint/no-explicit-any': 'warn',
    },
  },
)
