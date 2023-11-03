const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    //'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    //'^.+\\.(css|sass|scss)$': '<rootDir>/src/__test__/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    //'^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/src/__test__/__mocks__/fileMock.js`,

    // Handle module aliases
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/public/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
