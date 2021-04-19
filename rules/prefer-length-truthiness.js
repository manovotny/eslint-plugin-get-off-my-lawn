const getDocumentationUrl = require('./utils/get-documentation-url');

const message = 'Prefer length truthiness instead of explicitly checking for zero.';

const ifLengthGreaterThanZeroSelector = [
    ':matches(IfStatement, ConditionalExpression) > ',
    'BinaryExpression',
    '[left.type="MemberExpression"]',
    '[left.property.name="length"]',
    '[operator=">"]',
    '[right.type="Literal"]',
    '[right.value=0]',
].join('');

const ifOneGreaterThanLengthSelector = [
    ':matches(IfStatement, ConditionalExpression) > ',
    'BinaryExpression',
    '[left.type="Literal"]',
    '[left.value=1]',
    '[operator=">"]',
    '[right.type="MemberExpression"]',
    '[right.property.name="length"]',
].join('');

const ifLengthLessThanOneSelector = [
    ':matches(IfStatement, ConditionalExpression) > ',
    'BinaryExpression',
    '[left.type="MemberExpression"]',
    '[left.property.name="length"]',
    '[operator="<"]',
    '[right.type="Literal"]',
    '[right.value=1]',
].join('');

const ifLengthEqualsZeroSelector = [
    ':matches(IfStatement, ConditionalExpression) > ',
    'BinaryExpression',
    '[left.type="MemberExpression"]',
    '[left.property.name="length"]',
    '[operator=/==/]',
    '[right.type="Literal"]',
    '[right.value=0]',
].join('');

const ifZeroEqualsLengthSelector = [
    ':matches(IfStatement, ConditionalExpression) > ',
    'BinaryExpression',
    '[left.type="Literal"]',
    '[left.value=0]',
    '[operator=/==/]',
    '[right.type="MemberExpression"]',
    '[right.property.name="length"]',
].join('');

const removeRightSideOfBinaryExpression = (context, node, addLogicalNot) => {
    context.report({
        fix: (fixer) => {
            const start = node.left.range[1];
            const end = node.right.range[1];
            const operatorAndLiteralRangeFixer = fixer.removeRange([start, end]);
            const logicalNotFixer = fixer.insertTextBefore(node, '!');

            if (addLogicalNot) {
                return [logicalNotFixer, operatorAndLiteralRangeFixer];
            }

            return operatorAndLiteralRangeFixer;
        },
        message,
        node,
    });
};

const removeLeftSideOfBinaryExpression = (context, node, addLogicalNot) => {
    context.report({
        fix: (fixer) => {
            const start = node.left.range[0];
            const end = node.right.range[0];
            const operatorAndLiteralRangeFixer = fixer.removeRange([start, end]);
            const logicalNotFixer = fixer.insertTextBefore(node, '!');

            if (addLogicalNot) {
                return [logicalNotFixer, operatorAndLiteralRangeFixer];
            }

            return operatorAndLiteralRangeFixer;
        },
        message,
        node,
    });
};

const create = (context) => ({
    [ifLengthGreaterThanZeroSelector]: (node) => {
        removeRightSideOfBinaryExpression(context, node);
    },
    [ifLengthLessThanOneSelector]: (node) => {
        removeRightSideOfBinaryExpression(context, node, true);
    },
    [ifLengthEqualsZeroSelector]: (node) => {
        removeRightSideOfBinaryExpression(context, node, true);
    },
    [ifOneGreaterThanLengthSelector]: (node) => {
        removeLeftSideOfBinaryExpression(context, node);
    },
    [ifZeroEqualsLengthSelector]: (node) => {
        removeLeftSideOfBinaryExpression(context, node, true);
    },
});

module.exports = {
    create,
    meta: {
        docs: {
            description: message,
            url: getDocumentationUrl(__filename),
        },
        fixable: 'code',
        schema: [],
        type: 'layout',
    },
};
