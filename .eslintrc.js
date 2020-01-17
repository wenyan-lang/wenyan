module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "jest",
  ],
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    /* disbale rules temporary, before the codebase refactored with module system */
    // "eslint:recommended",
    "prettier",
    "prettier/babel"
  ],
  plugins: [
    "html"
  ]
}