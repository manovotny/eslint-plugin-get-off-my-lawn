module.exports = {
    coverageDirectory: '.jest-coverage',
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    testEnvironment: 'node',
};
