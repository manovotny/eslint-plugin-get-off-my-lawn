# Prefer length truthiness instead of explicitly checking for zero. (get-off-my-lawn/prefer-length-truthiness)

Enforce checking the truthiness of `length` in a condition, rather than explicitly checking the length value, and to enforce comparison style.

## Rule Details

The following patterns are considered warnings:

```js
if (array.length > 0) {}

if (array.length < 1) {}

if (array.length == 0) {}

if (array.length === 0) {}

array.length > 0 ? "" : ""

array.length < 1 ? "" : ""

array.length == 0 ? "" : ""

array.length === 0 ? "" : ""

if (1 > array.length) {}

if (0 == array.length) {}

if (0 === array.length) {}

if (1 > object.array.length) {}

if (0 == object.array.length) {}

if (0 === object.array.length) {}

1 > array.length ? "" : ""

0 == array.length ? "" : ""

0 === array.length ? "" : ""

1 > object.array.length ? "" : ""

0 == object.array.length ? "" : ""

0 === object.array.length ? "" : ""

const boolean = array.length === 0 ? "" : ""

() => { return array.length === 0 ? "" : "" }
```

These patterns would not be considered warnings:

```js
if (array.length) {}

if (!array.length) {}

if (array.length > 1) {}

if (array.length == 1) {}

if (array.length === 1) {}

array.length ? "" : ""

!array.length ? "" : ""

array.length > 1 ? "" : ""

array.length == 1 ? "" : ""

array.length === 1 ? "" : ""

if (1 < array.length) {}

if (1 == array.length) {}

if (1 === array.length) {}

1 < array.length ? "" : ""

1 == array.length ? "" : ""

1 === array.length ? "" : ""

const boolean = array.length === 0

() => { return array.length === 0 }
```

## When Not To Use It

If you don't want be notified about a length check style or you don't mind mixed usage of a length check styles within the same codebase, you can safely disable this rule.

Conversely, if you'd like to enforce explicit length checking, be sure and checkout the [unicorn/explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md) rule. It's essentially the opposite of this rule.
