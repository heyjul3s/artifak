import React from 'react';
import { GridItem } from '../GridItem';
import { GridItemBase } from '../GridItemBase';
import renderer from 'react-test-renderer';

describe('GridItemBase', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<GridItemBase>Hello World</GridItemBase>)
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
