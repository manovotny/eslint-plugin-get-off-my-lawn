const path = require('path');
const pkg = require('../../package');

module.exports = (filename) => {
    const ruleName = path.basename(filename, '.js');

    return `https://github.com/manovotny/eslint-plugin-get-off-my-lawn/blob/v${pkg.version}/docs/rules/${ruleName}.md`;
};
