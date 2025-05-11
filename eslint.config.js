// eslint.config.js
import js from "@eslint/js"
import prettier from "eslint-plugin-prettier"
import nuxt from "eslint-plugin-nuxt"

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: [".nuxt", "node_modules", ".output", "dist", "public"],
  },
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier,
      nuxt,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...nuxt.configs.recommended.rules,
      "prettier/prettier": "warn",
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-unused-vars": "warn",
    },
  },
]
