const {basename} = require('path');
const ruleId = basename(__filename, '.test.js');

const rule = require(`../${ruleId}`);
const getDocumentationUrl = require('../utils/get-documentation-url');

const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
    },
});
const message = 'Disallow empty file.';
const createInvalidTestCase = (code) => ({
    code,
    errors: [
        {
            message,
        },
    ],
});

ruleTester.run(ruleId, rule, {
    invalid: [
        createInvalidTestCase(''),
        createInvalidTestCase(' '),
        createInvalidTestCase('\n'),
        createInvalidTestCase('\r'),
        createInvalidTestCase('// comment'),
        createInvalidTestCase('/* comment */'),
    ],
    valid: ['x', '{}'],
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
