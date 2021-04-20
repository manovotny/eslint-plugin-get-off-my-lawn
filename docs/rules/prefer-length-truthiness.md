# get-off-my-lawn/prefer-length-truthiness

> Prefer length truthiness instead of explicitly checking for zero.

Enforce checking the truthiness of `length` in a condition, rather than explicitly checking the length value, to enforce comparison style.

This rule is fixable. 🛠

## Fail

```js
if (array.length > 0) {
}
```

```js
if (array.length < 1) {
}
```

````js
if (array.length == 0) {}

```js
if (array.length === 0) {}
````

```js
array.length > 0 ? '' : '';
```

```js
array.length < 1 ? '' : '';
```

```js
array.length == 0 ? '' : '';
```

```js
array.length === 0 ? '' : '';
```

```js
if (1 > array.length) {
}
```

```js
if (0 == array.length) {
}
```

```js
if (0 === array.length) {
}
```

```js
if (1 > object.array.length) {
}
```

```js
if (0 == object.array.length) {
}
```

```js
if (0 === object.array.length) {
}
```

```js
1 > array.length ? '' : '';
```

```js
0 == array.length ? '' : '';
```

```js
0 === array.length ? '' : '';
```

```js
1 > object.array.length ? '' : '';
```

```js
0 == object.array.length ? '' : '';
```

```js
0 === object.array.length ? '' : '';
```

```js
const boolean = array.length === 0 ? '' : '';
```

```js
() => {
    return array.length === 0 ? '' : '';
};
```

## Pass

```js
if (array.length) {
}
```

```js
if (!array.length) {
}
```

```js
if (array.length > 1) {
}
```

```js
if (array.length == 1) {
}
```

```js
if (array.length === 1) {
}
```

```js
array.length ? '' : '';
```

```js
!array.length ? '' : '';
```

```js
array.length > 1 ? '' : '';
```

```js
array.length == 1 ? '' : '';
```

```js
array.length === 1 ? '' : '';
```

```js
if (1 < array.length) {
}
```

```js
if (1 == array.length) {
}
```

```js
if (1 === array.length) {
}
```

```js
1 < array.length ? '' : '';
```

```js
1 == array.length ? '' : '';
```

```js
1 === array.length ? '' : '';
```

```js
const boolean = array.length === 0;
```

```js
() => {
    return array.length === 0;
};
```

## Tips

Conversely, if you'd like to enforce explicit length checking, use the [unicorn/explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md) rule instead. It's essentially the opposite of this rule.
