"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  rules: {
    "node/no-unpublished-require": ["error", { devDependencies: true }],
  },
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
