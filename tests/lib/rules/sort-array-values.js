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

const ruleTester = new RuleTester();
ruleTester.run("sort-array-values", rule, {
  valid: [
    {
      code: "// @sortable\n" + "const array = ['a', 'z']",
      parserOptions: { ecmaVersion: 6 },
    },
    {
      code: "// @sortable\n" + "const array = ['a', 'Z']",
      parserOptions: { ecmaVersion: 6 },
    },
    {
      code: "// some comment\n" + "const array = ['z', 'a', 'z']",
      parserOptions: { ecmaVersion: 6 },
    },
  ],

  invalid: [
    {
      code: "// @sortable\n" + "const array = ['z', 'a']",
      errors: [{ message: "Array values must be sorted", type: "Literal" }],
      parserOptions: { ecmaVersion: 6 },
    },
  ],
});
