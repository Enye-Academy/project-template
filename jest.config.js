const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    globals: {
        jest: {
            useBabelrc: true,
        },
    },
    testRegex: TEST_REGEX,
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverage: true,
    moduleNameMapper: {
        '\\.(css|jpg|png|scss|less|sass)$': '<rootDir>/empty.js',
    },
};


