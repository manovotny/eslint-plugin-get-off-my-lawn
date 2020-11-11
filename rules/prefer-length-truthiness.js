const dotProp = require('dot-prop');

const message = 'Prefer length truthiness instead of explicitly checking for zero.';

module.exports = (context) => ({
    BinaryExpression: (node) => {
        const leftPropertyName = dotProp.get(node, 'left.property.name', undefined);
        const operator = node.operator;
        const rightValue = dotProp.get(node, 'right.value', undefined);
        const lengthEqualsZero = leftPropertyName === 'length' && rightValue === 0;
        const lengthLessThanOne = leftPropertyName === 'length' && operator === '<' && rightValue === 1;

        if (lengthEqualsZero || lengthLessThanOne) {
            context.report({
                message,
                node,
            });
        }
    },
});
