import React from 'react';
import { render } from '@testing-library/react';
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
      const { asFragment } = render(<FlexRow>Flex Row</FlexRow>);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render row-reverse', () => {
      const { asFragment } = render(
        <FlexRow reverse={true}>Flex Row Reverse</FlexRow>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
