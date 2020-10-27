module.exports = {
  rootDir: '.',
  roots: [
    '<rootDir>/packages/artifak/src',
    '<rootDir>/packages/block/src',
    '<rootDir>/packages/component-generator/src',
    '<rootDir>/packages/flex/src',
    '<rootDir>/packages/grid/src',
    '<rootDir>/packages/imagery/src',
    '<rootDir>/packages/typography/src'
  ],
  collectCoverageFrom: [
    'packages/**/src/*.{js,jsx,ts,tsx}',
    '!packages/**/src/typings.{ts,tsx}',
    '!packages/**/src/*.d.{ts,tsx}',
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
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.(tsx|ts)?$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  prettierPath: '<rootDir>/prettier.config.js'
};
