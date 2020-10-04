module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
