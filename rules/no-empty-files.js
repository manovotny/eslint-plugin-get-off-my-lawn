const getDocsUrl = require('./utils/get-docs-url');

const message = 'Empty files are not allowed. Please remove it.';

const create = (context) => ({
    Program: (node) => {
        if (!node.body.length) {
            context.report({
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
            recommended: true,
            url: getDocsUrl(__filename),
        },
    },
};
