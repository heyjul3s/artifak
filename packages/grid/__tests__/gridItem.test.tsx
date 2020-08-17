import React from 'react';
import { StyledGridItem, GridItem } from '../GridItem';
import renderer from 'react-test-renderer';

describe('StyledGridItem', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<StyledGridItem>Hello World</StyledGridItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('GridItem', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<GridItem>Hello World</GridItem>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
