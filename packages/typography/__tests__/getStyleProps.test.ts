import { position } from 'styled-system';
import { getStyleProps } from '../src';

describe('getStyleProps', () => {
  it('should return a default base setting object', () => {
    expect(getStyleProps(void 0 as any)).toEqual({
      styleProps: []
    });
  });

  it('should return the base object with default styleProps if not declared', () => {
    expect(getStyleProps({ element: 'div' })).toEqual({
      element: 'div',
      styleProps: []
    });
  });

  it('should return the base object if it has styleProps defined', () => {
    expect(
      getStyleProps({
        element: 'div',
        styleProps: [position]
      })
    ).toEqual({
      element: 'div',
      styleProps: [position]
    });
  });
});
