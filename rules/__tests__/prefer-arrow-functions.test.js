const RuleTester = require('eslint').RuleTester;

const rule = require('../prefer-arrow-functions');
const getDocsUrl = require('../utils/get-docs-url');

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
            message: 'Prefer using arrow function over traditional functions.',
        },
    ],
});

ruleTester.run('rule', rule, {
    invalid: [
        createInvalidTestCase('function a() { return "a" }', 1),
        createInvalidTestCase('const a = function () { return "a" }', 11),
    ],
    valid: ['const a = () => "a"', 'class A extends React.Component { render() {} }'],
});

describe('meta', () => {
    test('docs recommended', () => {
        expect(rule.meta.docs.recommended).toBe(true);
    });

    test('docs url', () => {
        expect(rule.meta.docs.url).toBe(getDocsUrl(__filename.replace('.test.js', '.js')));
    });
});
