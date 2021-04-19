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
const message = 'Prefer length truthiness instead of explicitly checking for zero.';
const createInvalidTestCase = (code, output) => ({
    code,
    errors: [
        {
            message,
        },
    ],
    output,
});

ruleTester.run(ruleId, rule, {
    invalid: [
        createInvalidTestCase('if (array.length > 0) {}', 'if (array.length) {}'),
        createInvalidTestCase('if (array.length < 1) {}', 'if (!array.length) {}'),
        createInvalidTestCase('if (array.length == 0) {}', 'if (!array.length) {}'),
        createInvalidTestCase('if (array.length === 0) {}', 'if (!array.length) {}'),
        createInvalidTestCase('if (object.array.length > 0) {}', 'if (object.array.length) {}'),
        createInvalidTestCase('if (object.array.length < 1) {}', 'if (!object.array.length) {}'),
        createInvalidTestCase('if (object.array.length == 0) {}', 'if (!object.array.length) {}'),
        createInvalidTestCase('if (object.array.length === 0) {}', 'if (!object.array.length) {}'),
        createInvalidTestCase('array.length > 0 ? "" : ""', 'array.length ? "" : ""'),
        createInvalidTestCase('array.length < 1 ? "" : ""', '!array.length ? "" : ""'),
        createInvalidTestCase('array.length == 0 ? "" : ""', '!array.length ? "" : ""'),
        createInvalidTestCase('array.length === 0 ? "" : ""', '!array.length ? "" : ""'),
        createInvalidTestCase('object.array.length > 0 ? "" : ""', 'object.array.length ? "" : ""'),
        createInvalidTestCase('object.array.length < 1 ? "" : ""', '!object.array.length ? "" : ""'),
        createInvalidTestCase('object.array.length == 0 ? "" : ""', '!object.array.length ? "" : ""'),
        createInvalidTestCase('object.array.length === 0 ? "" : ""', '!object.array.length ? "" : ""'),
        createInvalidTestCase('if (1 > array.length) {}', 'if (array.length) {}'),
        createInvalidTestCase('if (0 == array.length) {}', 'if (!array.length) {}'),
        createInvalidTestCase('if (0 === array.length) {}', 'if (!array.length) {}'),
        createInvalidTestCase('if (1 > object.array.length) {}', 'if (object.array.length) {}'),
        createInvalidTestCase('if (0 == object.array.length) {}', 'if (!object.array.length) {}'),
        createInvalidTestCase('if (0 === object.array.length) {}', 'if (!object.array.length) {}'),
        createInvalidTestCase('1 > array.length ? "" : ""', 'array.length ? "" : ""'),
        createInvalidTestCase('0 == array.length ? "" : ""', '!array.length ? "" : ""'),
        createInvalidTestCase('0 === array.length ? "" : ""', '!array.length ? "" : ""'),
        createInvalidTestCase('1 > object.array.length ? "" : ""', 'object.array.length ? "" : ""'),
        createInvalidTestCase('0 == object.array.length ? "" : ""', '!object.array.length ? "" : ""'),
        createInvalidTestCase('0 === object.array.length ? "" : ""', '!object.array.length ? "" : ""'),
        createInvalidTestCase(
            'const boolean = array.length === 0 ? "" : ""',
            'const boolean = !array.length ? "" : ""'
        ),
        createInvalidTestCase(
            '() => { return array.length === 0 ? "" : "" }',
            '() => { return !array.length ? "" : "" }'
        ),
    ],
    valid: [
        'if (array.length) {}',
        'if (!array.length) {}',
        'if (array.length > 1) {}',
        'if (array.length == 1) {}',
        'if (array.length === 1) {}',
        'if (object.array.length) {}',
        'if (!object.array.length) {}',
        'if (object.array.length > 1) {}',
        'if (object.array.length == 1) {}',
        'if (object.array.length === 1) {}',
        'array.length ? "" : ""',
        '!array.length ? "" : ""',
        'array.length > 1 ? "" : ""',
        'array.length == 1 ? "" : ""',
        'array.length === 1 ? "" : ""',
        'object.array.length ? "" : ""',
        '!object.array.length ? "" : ""',
        'object.array.length > 1 ? "" : ""',
        'object.array.length == 1 ? "" : ""',
        'object.array.length === 1 ? "" : ""',
        'if (1 < array.length) {}',
        'if (1 == array.length) {}',
        'if (1 === array.length) {}',
        'if (1 < object.array.length) {}',
        'if (1 == object.array.length) {}',
        'if (1 === object.array.length) {}',
        '1 < array.length ? "" : ""',
        '1 == array.length ? "" : ""',
        '1 === array.length ? "" : ""',
        '1 < object.array.length ? "" : ""',
        '1 == object.array.length ? "" : ""',
        '1 === object.array.length ? "" : ""',
        'const boolean = array.length === 0',
        '() => { return array.length === 0 }',
    ],
});

describe('meta', () => {
    describe('docs', () => {
        test('description', () => {
            expect(rule.meta.docs.description).toBe(message);
        });

        test('url', () => {
            expect(rule.meta.docs.url).toBe(getDocumentationUrl(__filename.replace('.test.js', '.js')));
        });
    });

    test('fixable', () => {
        expect(rule.meta.fixable).toBe('code');
    });

    test('schema', () => {
        expect(rule.meta.schema).toHaveLength(0);
    });

    test('type', () => {
        expect(rule.meta.type).toBe('layout');
    });
});
