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

type BasicUsageProps = {
  disabled?: boolean;
  placeholder?: string;
  onBlur?: () => void;
};

const { Base: InputText, InputSearch, InputUrl } = createTextInputs<
  typeof inputs.components,
  BasicUsageProps
>(inputs.base, inputs.components);

export function BasicUsage() {
  const onBlur = (text: string) => () => {
    console.log('Blur', text);
  };

  return (
    <>
      <InputText onBlur={onBlur('Hello')} />
      <InputSearch />
      <InputUrl />
    </>
  );
}

export default {
  title: 'TextInput'
};
