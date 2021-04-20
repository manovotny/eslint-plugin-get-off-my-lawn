# no-empty-files

Disallow empty files.

## Fail

Any file containing only whitespace or comments will fail.

```js

```

```js
\n;
```

```js
\r;
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
