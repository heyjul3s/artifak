#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('@rollup/plugin-commonjs');
const bundleSize = require('rollup-plugin-bundle-size');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;

const currentWorkingPath = process.cwd();

const styledComponentsTransformer = createStyledComponentsTransformer({
  getDisplayName(filename, bindingName) {
    return path.relative(__dirname, filename);
  },
});

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
  external: ['react'],
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
      transformers: [
        () => ({
          before: [styledComponentsTransformer],
        }),
      ],
    }),
    bundleSize(),
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
