import React from 'react';
import { render } from '@testing-library/react';
import { ImageryBase } from '../ImageryBase';

describe('ImageryBase', () => {
  it('should render', () => {
    const { asFragment } = render(<ImageryBase />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
