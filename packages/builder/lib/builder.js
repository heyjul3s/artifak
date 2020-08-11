#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const typescript = require('rollup-plugin-typescript2');

const currentWorkingPath = process.cwd();

const {
  src,
  main: { pkgMain },
  module: { pkgModule },
  name,
} = require(path.join(currentWorkingPath, 'package.json'));

const tsConfigPath = path.join(currentWorkingPath, 'tsconfig.json');
const inputPath = path.join(currentWorkingPath, src);
const fileName = name.replace('@react-artifact/', '');

const inputOptions = {
  input: inputPath,
  external: ['react'],
  plugins: [
    resolve(),
    typescript({
      tsconfig: tsConfigPath,
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
  ],
};

const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: 'cjs',
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: 'esm',
  },
];

async function build() {
  const bundle = await rollup.rollup(inputOptions);

  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
