/**
 * @fileoverview Enforce array values to be sorted
 * @author pierre
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/sort-array-values"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});

ruleTester.run("sort-array-values", rule, {
  valid: [
    {
      code: "// @eslint-sort-array\n" + "const array = ['a', 'z']",
      parserOptions: { ecmaVersion: 6 },
    },
    {
      code: "// @eslint-sort-array\n" + "const array = ['a', 'Z']",
      parserOptions: { ecmaVersion: 6 },
    },
    {
      code: "// some comment\n" + "const array = ['z', 'a', 'z']",
      parserOptions: { ecmaVersion: 6 },
    },
  ],

  invalid: [
    {
      code: "// @eslint-sort-array\n" + "const array = ['z', 'a']",
      errors: [{ message: "Array values must be sorted", type: "Literal" }],
      parserOptions: { ecmaVersion: 6 },
      output: "// @eslint-sort-array\n" + "const array = ['a', 'z']",
    },
    {
      code:
        "// @eslint-sort-array\n" +
        "const array = ['a', 'b', 'c', 'd', 'z', 'a', 'zz'] as const;",
      errors: [{ message: "Array values must be sorted", type: "Literal" }],
      parserOptions: { ecmaVersion: 6 },
      output:
        "// @eslint-sort-array\n" +
        "const array = ['a', 'a', 'b', 'c', 'd', 'z', 'zz'] as const;",
    },
  ],
});
