import { createBlockComponents, Block } from '../';
import { mockBlockStyles } from '../__mocks__/block.mock';

describe('@react-artifact/block', () => {
  describe('createBlockComponents - generates Block React components based on styles object argument provided', () => {
    it('should return the base Typography system component when provided with an invalid argument', () => {
      const expected = Block;
      expect(createBlockComponents({} as any)).toEqual(expected);
      expect(createBlockComponents(null as any)).toEqual(expected);
      expect(createBlockComponents(false as any)).toEqual(expected);
      expect(createBlockComponents(0 as any)).toEqual(expected);
      expect(createBlockComponents(void 0 as any)).toEqual(expected);
    });

    it('should create React components', () => {
      expect(createBlockComponents(mockBlockStyles)).toBeDefined();
    });
  });
});
