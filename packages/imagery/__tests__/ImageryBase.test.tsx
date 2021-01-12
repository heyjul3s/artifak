import React from 'react';
import { render } from '@testing-library/react';
import { ImageryBase } from '../src/ImageryBase';

describe('ImageryBase', () => {
  it('should render', () => {
    const { asFragment } = render(<ImageryBase />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render styles object-fit and object-position', () => {
    const { asFragment, container } = render(
      <ImageryBase objectFit="cover" objectPosition="center" />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
