import React from 'react';
import renderer from 'react-test-renderer';
import { FlexRow, setFlexDirection } from '../FlexRow';

describe('FlexRow', () => {
  describe('setFlexDirection', () => {
    it('should return flex-direction of "row" if passed a boolean value of FALSE', () => {
      const expected = 'row';
      expect(setFlexDirection(false)).toEqual(expected);
    });

    it('should return flex-direction of "row-reverse" if passed a boolean value of TRUE', () => {
      const expected = 'row-reverse';
      expect(setFlexDirection(true)).toEqual(expected);
    });
  });

  describe('FlexRow component', () => {
    it('should render', () => {
      const tree = renderer.create(<FlexRow>Test</FlexRow>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render row-reverse', () => {
      const tree = renderer
        .create(<FlexRow reverse={true}>Test</FlexRow>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
