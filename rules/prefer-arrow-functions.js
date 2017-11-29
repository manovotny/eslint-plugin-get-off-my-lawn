const dotProp = require('dot-prop');

const message = 'Prefer using arrow function over traditional functions.';

module.exports = (context) => ({
    'FunctionDeclaration': (node) => {
        context.report({
            message,
            node
        });
    },
    'FunctionExpression': (node) => {
        const nodeParentType = dotProp.get(node, 'parent.parent.type', undefined);
        const isFunctionPartOfAClass = nodeParentType === 'ClassBody';

        if (!isFunctionPartOfAClass) {
            context.report({
                message,
                node
            });
        }
    }
});
