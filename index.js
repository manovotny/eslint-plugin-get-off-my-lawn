const path = require('path');

const importModules = require('import-modules');

module.exports = {
    configs: {
        recommended: {
            env: {
                es6: true,
            },
            plugins: ['get-off-my-lawn'],
            rules: {
                'get-off-my-lawn/prefer-arrow-functions': 'error',
            },
        },
    },
    rules: importModules(path.resolve(__dirname, 'rules'), {camelize: false}),
};
