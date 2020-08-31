import { createBaseComponents } from '../';
import { mockBlockStyles } from '../__mocks__/block.mock';

describe('@artifak/block', () => {
  describe('createBlockComponents - generates Block React components based on styles object argument provided', () => {
    it('should return the base Typography system component when provided with an invalid argument', () => {
      const expected = {};
      expect(createBaseComponents({} as any)).toEqual(expected);
      expect(createBaseComponents(null as any)).toEqual(expected);
      expect(createBaseComponents(false as any)).toEqual(expected);
      expect(createBaseComponents(0 as any)).toEqual(expected);
      expect(createBaseComponents(void 0 as any)).toEqual(expected);
    });

    it('should create React components', () => {
      expect(createBaseComponents(mockBlockStyles)).toBeDefined();
    });
  });
});
