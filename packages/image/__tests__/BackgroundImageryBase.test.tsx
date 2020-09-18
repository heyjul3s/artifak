import React from 'react';
import { render } from '@testing-library/react';
import { BackgroundImageryBase } from '../BackgroundImageryBase';

describe('BackgroundImageryBase', () => {
  it('should render', () => {
    const { asFragment } = render(<BackgroundImageryBase />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
