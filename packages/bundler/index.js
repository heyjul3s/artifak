#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('rollup-plugin-terser').terser;
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const currentWorkingPath = process.cwd();

const { src, name } = require(path.join(currentWorkingPath, 'package.json'));

const tsConfigPath = path.join(currentWorkingPath, 'tsconfig.json');
const inputPath = path.join(currentWorkingPath, src);
const fileName = name.replace('@artifak/', '');
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const styledComponentsTransformer = createStyledComponentsTransformer();

const inputOptions = {
  input: inputPath,
  external: ['react', 'react-dom', 'styled-components', 'styled-system'],
  plugins: [
    resolve({
      extensions
    }),
    commonjs(),
    typescript({
      tsconfig: tsConfigPath,
      transformers: [
        () => ({
          before: [styledComponentsTransformer]
        })
      ],
      clean: true
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

const formatOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: 'cjs'
  },
  {
    file: `dist/${fileName}.cjs.min.js`,
    format: 'cjs'
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: 'esm',
    esModule: true
  },
  {
    file: `dist/${fileName}.umd.js`,
    format: 'umd',
    esModule: false
  },
  {
    file: `dist/${fileName}.umd.min.js`,
    format: 'umd',
    esModule: false
  }
];

const outputOptions = formatOptions.map(opt => {
  const options = {
    ...opt,
    ...baseOutputOptions
  };

  const minifyPlugin = {
    plugins: [
      terser({
        output: { comments: false },
        compress: {
          drop_console: true
        }
      })
    ]
  };

  return opt.file.includes('min') ? { ...options, ...minifyPlugin } : options;
});

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
