# eslint-plugin-sort-array-values

Enforce array values to be sorted

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-sort-array-values`:

```sh
npm install eslint-plugin-sort-array-values --save-dev
```

## Usage

Add `sort-array-values` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["sort-array-values"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "sort-array-values/rule-name": 2
  }
}
```

## Rules

# Enforce array values to be sorted (`sort-array-values`)

Useful for large constant array to enforce sorting and avoid merging conflict

## Rule Details

Examples of **incorrect** code for this rule:

```js
// @sortable
const mySortableArray = ["x", "b", "a"];
```

Examples of **correct** code for this rule:

```js
// fill me in
const mySortableArray = ["a", "b", "x"];
```
