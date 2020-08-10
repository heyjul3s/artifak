module.exports = {
  rootDir: '../',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx, js,jsx}',
    '!<rootDir>/.storybook/*',
    '!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  moduleDirectories: ['node_modules', 'bower_components'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx|ts|tsx)$',
  verbose: false,
};
