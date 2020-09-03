module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-styled-components',
      {
        namespace: 'artifak',
        fileName: false,
        displayName: true,
      },
    ],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
