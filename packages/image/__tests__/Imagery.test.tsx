import React from 'react';
import { render } from '@testing-library/react';
import { Imagery } from '../Imagery';

describe('Imagery', () => {
  const mockOnload = jest.fn();
  const mockOnerror = jest.fn();

  it('should render', () => {
    const { asFragment } = render(
      <Imagery onImageLoad={mockOnload} onImageError={mockOnerror} />,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
