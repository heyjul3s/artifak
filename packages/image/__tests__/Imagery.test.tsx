import React from 'react';
import { render } from '@testing-library/react';
import { Imagery } from '..';

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

  it('should render an img element with fallbackSrc value as src', () => {
    const { asFragment } = render(
      <Imagery
        src="./noImage.png"
        fallbackSrc="./__mocks__/test-image.svg"
        alt="test"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render an img element with fallbackSrc value as src', () => {
    const { asFragment } = render(
      <Imagery src="" alt="test" fallbackSrc="./__mocks__/test-image.svg" />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
