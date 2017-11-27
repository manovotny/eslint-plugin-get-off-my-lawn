const message = 'Prefer using arrow function over traditional functions.';

module.exports = (context) => ({
    'FunctionDeclaration': (node) => {
        context.report({
            message,
            node: node
        });
    },
    'FunctionExpression': (node) => {
        context.report({
            message,
            node: node
        });
    }
});
