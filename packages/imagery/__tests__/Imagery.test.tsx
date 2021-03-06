import React from 'react';
import { render } from '@testing-library/react';
import { Imagery } from '../src';

describe('Img', () => {
  it('should render an img element with src and alt defined', () => {
    const { asFragment } = render(
      <Imagery
        src="https://source.unsplash.com/random/10x10"
        alt="hello world"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
