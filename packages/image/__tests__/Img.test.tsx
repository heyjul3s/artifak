import React from 'react';
import { render } from '@testing-library/react';
import { Img } from '../';

describe('Img', () => {
  it('should render an img element with src and alt defined', () => {
    const { asFragment } = render(
      <Img src="https://source.unsplash.com/random/10x10" alt="hello world" />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render an img element with fallbackSrc value as src', () => {
    const { asFragment } = render(
      <Img
        src="https://sourcelaopj.com/random/10x10"
        fallbackSrc="https://source.unsplash.com/random/10x10"
      />,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
