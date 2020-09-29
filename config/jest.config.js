module.exports = {
  rootDir: '../',
  collectCoverageFrom: [
    'packages/**/*.{js,jsx,ts,tsx}',
    '!packages/**/dist/**/*.{js,jsx,ts,tsx}',
    '!packages/artifak/**/*.{js,jsx,ts,tsx}',
    '!packages/bundler/**/*.{js,jsx,ts,tsx}',
    '!packages/**/typings.{ts,tsx}',
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
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.(tsx|ts)?$': 'ts-jest'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/block/dist',
    '<rootDir>/packages/artifak/dist',
    '<rootDir>/packages/bundler/dist',
    '<rootDir>/packages/component-generator/dist',
    '<rootDir>/packages/grid/dist',
    '<rootDir>/packages/typography/dist'
  ],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  prettierPath: '<rootDir>/config/prettier.config.js'
};
