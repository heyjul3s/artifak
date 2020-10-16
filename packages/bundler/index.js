#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const currentWorkingPath = process.cwd();

const {
  src,
  main: { pkgMain },
  module: { pkgModule },
  name,
} = require(path.join(currentWorkingPath, 'package.json'));

const tsConfigPath = path.join(currentWorkingPath, 'tsconfig.json');
const inputPath = path.join(currentWorkingPath, src);
const fileName = name.replace('@artifak/', '');
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const inputOptions = {
  input: inputPath,
  output: {
    dir: "dist",
  },
  external: ['react', 'react-dom', 'styled-components', 'styled-system' ],
  plugins: [
    resolve({
      extensions,
    }),
    commonjs(),
    babel({
      extensions,
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            namespace: `artifak-${fileName}`,
            displayName: true,
          },
        ],
      ],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      babelHelpers: 'bundled',
    }),
    typescript({
      tsconfig: tsConfigPath,
    }),
  ],
};

const outputOptions = [
  {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
    exports: "named",
  },
  {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    exports: "named",
  },
];

async function build() {
  const bundle = await rollup.rollup(inputOptions);

  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
