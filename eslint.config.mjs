import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import json from "@eslint/json";



/** @type {import('eslint').Linter.Config[]} */
export default [
  {plugins: {json,},},
  {files: ["**/*.json"],ignores: ["package-lock.json"],language: "json/json",rules: {"json/no-duplicate-keys": "error",},},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];