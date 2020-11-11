const dotProp = require('dot-prop');

const getDocsUrl = require('./utils/get-docs-url');

const message = 'Prefer length truthiness instead of explicitly checking for zero.';

const create = (context) => ({
    BinaryExpression: (node) => {
        const leftPropertyName = dotProp.get(node, 'left.property.name', undefined);
        const operator = node.operator;
        const rightValue = dotProp.get(node, 'right.value', undefined);
        const lengthEqualsZero = leftPropertyName === 'length' && rightValue === 0;
        const lengthLessThanOne = leftPropertyName === 'length' && operator === '<' && rightValue === 1;

        if (lengthEqualsZero || lengthLessThanOne) {
            context.report({
                fix: (fixer) => {
                    const start = node.left.range[1];
                    const end = node.right.range[1];

                    return fixer.removeRange([start, end]);
                },
                message,
                node,
            });
        }
    },
});

module.exports = {
    create,
    meta: {
        docs: {
            url: getDocsUrl(__filename),
        },
        fixable: 'code',
    },
};
