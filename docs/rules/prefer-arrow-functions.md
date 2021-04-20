# get-off-my-lawn/prefer-arrow-functions

> Prefer using arrow functions.

Arrow functions have a few benefits over their traditional function counterparts.

-   Scope safety (lexically scoped). When arrow functions are used consistently, everything is guaranteed to use the same `this` object as the root. If even a single standard function callback is mixed in with a bunch of arrow functions, there's a chance the scope will become messed up.
-   Definition safety. Creating arrow functions with `const` will ensure they are never able to be overridden.
-   Compactness. Arrow functions are typically easier to read and write and are less verbose. Arrow functions also allow for implicit returns.

This rule is also React friendly by default, which most other arrow function linters are not.

## Fail

```js
function a() {
    return 'a';
}
```

```js
const a = function () {
    return 'a';
};
```

## Pass

```js
const a = () => 'a';
```
