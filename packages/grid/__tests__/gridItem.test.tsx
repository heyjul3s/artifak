import React from 'react';
import { GridItem } from '../src/GridItem';
import { GridItemBase } from '../src/GridItemBase';
import { render } from '@testing-library/react';

describe('GridItemBase', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GridItemBase>Grid Item Base</GridItemBase>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('GridItem', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GridItem>Grid Item</GridItem>);
    expect(asFragment()).toMatchSnapshot();
  });
});
