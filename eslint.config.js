import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default tseslint.config(
  // Global ignores
  {
    ignores: ["**/dist/", "**/node_modules/", "**/*.config.ts", "**/*.config.js"],
  },

  // Base config for all TS files
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React config for app, admin, ui
  {
    files: ["app/src/**/*.{ts,tsx}", "admin/src/**/*.{ts,tsx}", "ui/src/**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },

  // Backend config
  {
    files: ["backend/src/**/*.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },
);
