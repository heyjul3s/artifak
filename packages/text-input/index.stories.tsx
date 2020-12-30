import React from 'react';
import { createTextInputs } from './src';

const inputs = {
  base: {
    styles: {
      width: '100%',
      border: '1px solid black',
      padding: ['1em']
    }
  },

  components: {
    InputSearch: {
      maxWidth: '300px',
      attrs: { type: 'search' }
    },

    InputUrl: {
      display: 'block',
      attrs: { type: 'url' }
    }
  }
};

const { Base: InputText, InputSearch, InputUrl } = createTextInputs<
  typeof inputs.components
>(inputs.base, inputs.components);

export function BasicUsage() {
  return (
    <>
      <InputText />
      <InputSearch />
      <InputUrl />
    </>
  );
}

export default {
  title: 'TextInput'
};
