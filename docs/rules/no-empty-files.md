# get-off-my-lawn/no-empty-files

> Disallow empty files.

## Fail

Any file containing only whitespace or comments will fail.

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
