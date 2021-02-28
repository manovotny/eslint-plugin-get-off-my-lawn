const RuleTester = require('eslint').RuleTester;

const rule = require('../no-empty-files');
const getDocsUrl = require('../utils/get-docs-url');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
    },
});

const createInvalidTestCase = (code) => ({
    code,
    errors: [
        {
            column: 1,
            line: 1,
            message: 'Empty files are not allowed. Please remove it.',
        },
    ],
});

ruleTester.run('rule', rule, {
    invalid: [createInvalidTestCase(''), createInvalidTestCase(' '), createInvalidTestCase('\n')],
    valid: ['x'],
});

describe('meta', () => {
    test('docs recommended', () => {
        expect(rule.meta.docs.recommended).toBe(true);
    });

    test('docs url', () => {
        expect(rule.meta.docs.url).toBe(getDocsUrl(__filename.replace('.test.js', '.js')));
    });
});
