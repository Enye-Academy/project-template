const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
    collectCoverage: true,
    globals: {
        jest: {
            useBabelrc: true,
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|jpg|png|scss|less|sass)$': '<rootDir>/empty.js',
    },
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    testRegex: TEST_REGEX,
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};

