module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },  
  env: {
    browser: true,
    node: true,
    es6: true
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