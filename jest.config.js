module.exports = {
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!<rootDir>/__test__/**/*.(spec|test).{js,jsx}',
        '!**/dist/**',
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        '<rootDir>/src/serviceWorker.js',
        '<rootDir>/node_modules',
        '<rootDir>/dist/',
        '<rootDir>/src/utils',
        '<rootDir>/src/components/icons',
        '<rootDir>/src/index.js',
        '<rootDir>/src/store/index.js',
        '<rootDir>/src/config/',
    ],
    moduleNameMapper: {
        '.+\\.(css|scss)$': 'identity-obj-proxy',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],

    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
};
