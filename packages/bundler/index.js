#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('@rollup/plugin-commonjs');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const currentWorkingPath = process.cwd();

const { src, name } = require(path.join(currentWorkingPath, 'package.json'));

const tsConfigPath = path.join(currentWorkingPath, 'tsconfig.json');
const inputPath = path.join(currentWorkingPath, src);
const fileName = name.replace('@artifak/', '');
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const styledComponentsTransformer = createStyledComponentsTransformer({
  getDisplayName(filename, bindingName) {
    return path.relative(__dirname, filename);
  }
});

const inputOptions = {
  input: inputPath,
  external: ['react', 'react-dom', 'styled-components', 'styled-system'],
  plugins: [
    resolve({
      extensions
    }),
    commonjs(),
    babel({
      extensions,
      exclude: ['node_modules/**', 'src/__mocks__/**', 'src/__tests__/**'],
      plugins: ['@babel/plugin-transform-runtime'],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ],
      babelHelpers: 'runtime'
    }),
    typescript({
      tsconfig: tsConfigPath,
      transformers: [
        () => ({
          before: [styledComponentsTransformer]
        })
      ]
    })
  ]
};

const baseOutputOptions = {
  name: `${fileName}`,
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'StyledComponents',
    'styled-system': 'StyledSystem'
  },
  sourcemap: true,
  exports: 'named'
};

const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: 'cjs',
    ...baseOutputOptions
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: 'esm',
    ...baseOutputOptions
  },
  {
    file: `dist/${fileName}.umd.js`,
    format: 'umd',
    esModule: false,
    ...baseOutputOptions
  }
];

async function build() {
  try {
    const bundle = await rollup.rollup(inputOptions);

    outputOptions.forEach(async options => {
      await bundle.write(options);
    });
  } catch (e) {
    throw new Error(e);
  }
}

build();
