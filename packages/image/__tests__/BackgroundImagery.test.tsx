import React from 'react';
import { render } from '@testing-library/react';
import { BackgroundImagery } from '../BackgroundImagery';

describe('BackgroundImageryBase', () => {
  it('should render', () => {
    const { asFragment } = render(<BackgroundImagery />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
