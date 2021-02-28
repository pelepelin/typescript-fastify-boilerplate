module.exports = {
  env: {
    es2020: true,
    node: true,
    // TODO: move to overrides
    // jest: true,
  },
  extends: [
    "eslint:recommended",
    "google",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json'
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/require-await": 0
  },
  ignorePatterns: ["dist/", "coverage/"],
};
