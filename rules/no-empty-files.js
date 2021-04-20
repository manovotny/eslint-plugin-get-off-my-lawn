var path = require('path');

const getDocumentationUrl = require('./utils/get-documentation-url');

const message = 'Disallow empty files.';

const create = (context) => ({
    Program: (node) => {
        const filename = context.getFilename();
        const extension = path.extname(filename);

        // Need to check for JSON files because it throws a false positives
        // if you're also using `eslint-plugin-json`. I don't know of a good
        // way to write a test for this...
        if (extension !== '.json' && !node.body.length) {
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
            description: message,
            recommended: true,
            url: getDocumentationUrl(__filename),
        },
        schema: [],
        type: 'layout',
    },
};
