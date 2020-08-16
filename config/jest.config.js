module.exports = {
  rootDir: '../',
  collectCoverageFrom: [
    'packages/**/*.{js,jsx,ts,tsx}',
    '!packages/**/*.d.{ts,tsx}',
    '!packages/**/*.stories.{js,jsx,ts,tsx}'
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  modulePathIgnorePatterns: ['<rootDir>packages/dist'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.(tsx|ts)?$': 'ts-jest'
  },
  // TODO: setup linting
  // projects: [
  //   {
  //     displayName: 'test'
  //   },
  //   {
  //     displayName: 'lint',
  //     runner: 'jest-runner-eslint',
  //     testMatch: ['<rootDir>/**/*.{js, jsx, ts, tsx}']
  //   }
  // ],
  prettierPath: '<rootDir>/config/prettier.config.js'
};
