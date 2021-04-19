const RuleTester = require('eslint').RuleTester;

const rule = require('../prefer-arrow-functions');
const getDocumentationUrl = require('../utils/get-documentation-url');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
    },
});
const message = 'Prefer using arrow function over traditional functions.';
const createInvalidTestCase = (code, column) => ({
    code,
    errors: [
        {
            column,
            line: 1,
            message: message,
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
    describe('docs', () => {
        test('description', () => {
            expect(rule.meta.docs.description).toBe(message);
        });

        test('recommended', () => {
            expect(rule.meta.docs.recommended).toBe(true);
        });

        test('url', () => {
            expect(rule.meta.docs.url).toBe(getDocumentationUrl(__filename.replace('.test.js', '.js')));
        });
    });

    test('schema', () => {
        expect(rule.meta.schema).toHaveLength(0);
    });

    test('type', () => {
        expect(rule.meta.type).toBe('layout');
    });
});
