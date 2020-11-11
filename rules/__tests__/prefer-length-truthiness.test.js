const RuleTester = require('eslint').RuleTester;

const rule = require('../prefer-length-truthiness');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
    },
});

const createInvalidTestCase = (code, column) => ({
    code,
    errors: [
        {
            column,
            line: 1,
            message: 'Prefer length truthiness instead of explicitly checking for zero.',
        },
    ],
});

ruleTester.run('prefer-length-truthiness', rule, {
    invalid: [
        // arrays
        createInvalidTestCase('if (array.length > 0) {}', 5),
        createInvalidTestCase('if (array.length < 1) {}', 5),
        createInvalidTestCase('if (array.length === 0) {}', 5),
        createInvalidTestCase('(array.length > 0)', 2),
        createInvalidTestCase('(array.length < 1)', 2),
        createInvalidTestCase('(array.length === 0)', 2),
        createInvalidTestCase('array.length > 0 ? "not empty" : "empty"', 1),
        createInvalidTestCase('array.length < 1 ? "empty" : "not empty"', 1),
        createInvalidTestCase('array.length === 0 ? "empty" : "not empty"', 1),

        // objects
        createInvalidTestCase('if (object.array.length > 0) {}', 5),
        createInvalidTestCase('if (object.array.length < 1) {}', 5),
        createInvalidTestCase('if (object.array.length === 0) {}', 5),
        createInvalidTestCase('(object.array.length > 0)', 2),
        createInvalidTestCase('(object.array.length < 1)', 2),
        createInvalidTestCase('(object.array.length === 0)', 2),
        createInvalidTestCase('object.array.length > 0 ? "not empty" : "empty"', 1),
        createInvalidTestCase('object.array.length < 1 ? "empty" : "not empty"', 1),
        createInvalidTestCase('object.array.length === 0 ? "empty" : "not empty"', 1),
    ],
    valid: [
        // arrays
        'if (array.length) {}',
        'if (!array.length) {}',
        '(array.length > 1)',
        '(array.length < 2)',
        '(array.length === 1)',
        'array.length ? "not empty" : "empty"',
        '!array.length ? "empty" : "not empty"',
        'array.length === 1 ? "explicit" : "not explicit"',

        // objects
        'if (object.array.length) {}',
        'if (!object.array.length) {}',
        '(object.array.length > 1)',
        '(object.array.length < 2)',
        '(object.array.length === 1)',
        'object.array.length ? "not empty" : "empty"',
        '!object.array.length ? "empty" : "not empty"',
        'object.array.length === 1 ? "explicit" : "not explicit"',
    ],
});
