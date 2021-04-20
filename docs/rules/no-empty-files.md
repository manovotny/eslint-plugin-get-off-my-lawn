# get-off-my-lawn/no-empty-files

> Disallow empty files.

Disallow any file containing absolutely nothing, only whitespace, or only comments.

## Fail

```js

```

```
\n
```

```
\r
```

```js
// comment
```

```js
/* comment */
```

## Pass

```js
var x;
```
