# get-off-my-lawn/no-empty-files

> Disallow empty files.

Any file containing only whitespace or comments will fail.

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
