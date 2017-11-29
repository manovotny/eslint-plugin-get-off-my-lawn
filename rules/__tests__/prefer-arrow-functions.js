const RuleTester = require('eslint').RuleTester;
const rule = require('../prefer-arrow-functions');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6
    }
});
const expectedErrorMessage = 'Prefer using arrow function over traditional functions.';

ruleTester.run(
    'prefer-arrow-functions',
    rule,
    {
        valid: [
            'const a = () => "a"',
            'class A extends React.Component { render() {} }'
        ],
        invalid: [
            {
                code: 'function a() { return "a" }',
                errors: [{message: expectedErrorMessage, column: 1, line: 1}],
            },
            {
                code: 'const a = function () { return "a" }',
                errors: [{message: expectedErrorMessage, column: 11, line: 1}],
            }
        ],
    });
