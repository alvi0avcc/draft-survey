import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier"

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "build/**",
      "dist/**",
      "public/**",
      ".env",
      "**/*.config.js",
      "**/*.config.ts",
      ".cache/**",
      "coverage/**",
      ".git/**",
      ".react-router/**",
    ],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, prettier: prettierPlugin },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "no-empty-pattern": "warn",
    },
  },

  tseslint.configs.recommended,

  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  pluginReact.configs.flat['jsx-runtime'],

  prettierConfig,

]);
