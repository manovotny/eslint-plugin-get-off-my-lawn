'use strict';

const preferArrowFunctions = require('./rules/prefer-arrow-functions');

module.exports = {
    configs: {
        recommended: {
            rules: {
                'prefer-arrow-functions/prefer-arrow-functions': 'error'
            }
        }
    },
    environments: {
        globals: {
            globals: {
                afterAll: false,
                afterEach: false,
                beforeAll: false,
                beforeEach: false,
                describe: false,
                expect: false,
                fit: false,
                it: false,
                jasmine: false,
                jest: false,
                pending: false,
                pit: false,
                require: false,
                test: false,
                xdescribe: false,
                xit: false,
                xtest: false,
            },
        },
    },
    rules: {
        'prefer-arrow-functions': preferArrowFunctions
    },
};
