const RuleTester = require('eslint').RuleTester;

const rule = require('../prefer-arrow-functions');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6
    }
});
const message = 'Prefer using arrow function over traditional functions.';

ruleTester.run(
    'prefer-arrow-functions',
    rule,
    {
        invalid: [
            {
                code: 'function a() { return "a" }',
                errors: [{
                    column: 1,
                    line: 1,
                    message
                }]
            },
            {
                code: 'const a = function () { return "a" }',
                errors: [{
                    column: 11,
                    line: 1,
                    message
                }]
            }
        ],
        valid: [
            'const a = () => "a"',
            'class A extends React.Component { render() {} }'
        ]
    }
);
