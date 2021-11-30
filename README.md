# eslint-plugin-get-off-my-lawn

> Highly opinionated, [ESLint plugin](https://eslint.org/docs/developer-guide/working-with-plugins) with custom rules to produce beautiful, readable JavaScript.

![eslint-plugin-get-off-my-lawn](.github/logo.jpg)

## Install

### NPM

```
$ npm i eslint eslint-plugin-get-off-my-lawn --save-dev
```

### Yarn

```
$ yarn add eslint eslint-plugin-get-off-my-lawn --dev
```

## Usage

Create an ESLint config in your `package.json` or `.eslintrc.js` file.

This plugin exports a [`recommended` config](index.js) that enforces good practices. You can optionally enable it or explicitly add rules yourself.

### package.json

```json
{
    "name": "my-awesome-project",
    "eslintConfig": {
        "extends": ["plugin:get-off-my-lawn/recommended"], // (optional)
        "plugins": ["get-off-my-lawn"],
        "rules": {
            // enable additional rules, override rule options, or disable rules
        }
    }
}
```

### .eslintrc.js

```js
module.exports = {
    extends: ['plugin:get-off-my-lawn/recommended'], // (optional)
    plugins: ['get-off-my-lawn']
    rules: {
        // enable additional rules, override rule options, or disable rules
    },
};
```

## Rules

| Name                                                                               | Description                                                       | Recommended | Fixable |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------- | ------- |
| [get-off-my-lawn/prefer-arrow-functions](docs/rules/prefer-arrow-functions.md)     | Prefer using arrow function over traditional functions.           | ✅          | ❌      |
| [get-off-my-lawn/prefer-length-truthiness](docs/rules/prefer-length-truthiness.md) | Prefer length truthiness instead of explicitly checking for zero. | ❌          | ✅      |

## Related

-   [eslint-config-get-off-my-lawn](https://www.npmjs.com/package/eslint-config-get-off-my-lawn) - A highly opinionated, [sharable config](http://eslint.org/docs/developer-guide/shareable-configs.html) of [ESLint](http://eslint.org) rules to produce beautiful, readable JavaScript.
-   [prettier-config-get-off-my-lawn](https://www.npmjs.com/package/prettier-config-get-off-my-lawn) - A highly opinionated, [sharable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) of Prettier rules to produce beautiful, readable code.
-   [stylelint-config-get-off-my-lawn](https://www.npmjs.com/package/stylelint-config-get-off-my-lawn) - A highly opinionated, [sharable config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) of [stylelint](http://stylelint.io) rules to produce beautiful, readable CSS and Sass.

## License

MIT © [Michael Novotny](https://manovotny.com)
