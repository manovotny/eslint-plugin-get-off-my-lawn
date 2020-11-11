const RuleTester = require('eslint').RuleTester;

const rule = require('../prefer-length-truthiness');
const getDocsUrl = require('../utils/get-docs-url');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
    },
});

const createInvalidTestCase = (code, column, output) => ({
    code,
    errors: [
        {
            column,
            line: 1,
            message: 'Prefer length truthiness instead of explicitly checking for zero.',
        },
    ],
    output,
});

ruleTester.run('prefer-length-truthiness', rule, {
    invalid: [
        // arrays
        createInvalidTestCase('if (array.length > 0) {}', 5, 'if (array.length) {}'),
        createInvalidTestCase('if (array.length < 1) {}', 5, 'if (array.length) {}'),
        createInvalidTestCase('if (array.length === 0) {}', 5, 'if (array.length) {}'),
        createInvalidTestCase('(array.length > 0)', 2, '(array.length)'),
        createInvalidTestCase('(array.length < 1)', 2, '(array.length)'),
        createInvalidTestCase('(array.length === 0)', 2, '(array.length)'),
        createInvalidTestCase('array.length > 0 ? "not empty" : "empty"', 1, 'array.length ? "not empty" : "empty"'),
        createInvalidTestCase('array.length < 1 ? "empty" : "not empty"', 1, 'array.length ? "empty" : "not empty"'),
        createInvalidTestCase('array.length === 0 ? "empty" : "not empty"', 1, 'array.length ? "empty" : "not empty"'),

        // objects
        createInvalidTestCase('if (object.array.length > 0) {}', 5, 'if (object.array.length) {}'),
        createInvalidTestCase('if (object.array.length < 1) {}', 5, 'if (object.array.length) {}'),
        createInvalidTestCase('if (object.array.length === 0) {}', 5, 'if (object.array.length) {}'),
        createInvalidTestCase('(object.array.length > 0)', 2, '(object.array.length)'),
        createInvalidTestCase('(object.array.length < 1)', 2, '(object.array.length)'),
        createInvalidTestCase('(object.array.length === 0)', 2, '(object.array.length)'),
        createInvalidTestCase(
            'object.array.length > 0 ? "not empty" : "empty"',
            1,
            'object.array.length ? "not empty" : "empty"'
        ),
        createInvalidTestCase(
            'object.array.length < 1 ? "empty" : "not empty"',
            1,
            'object.array.length ? "empty" : "not empty"'
        ),
        createInvalidTestCase(
            'object.array.length === 0 ? "empty" : "not empty"',
            1,
            'object.array.length ? "empty" : "not empty"'
        ),
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

describe('meta', () => {
    test('docs url', () => {
        expect(rule.meta.docs.url).toBe(getDocsUrl(__filename.replace('.test.js', '.js')));
    });

    test('fixable', () => {
        expect(rule.meta.fixable).toBe('code');
    });
});
