import { createBlocks } from '../src';

describe('@artifak/block', () => {
  describe('createBlocks - generates Block React components based on styles object argument provided', () => {
    it('should return the base Typography system component when provided with an invalid argument', () => {
      const expected = {};
      expect(createBlocks({} as any, {} as any)).toHaveProperty('Base');
      expect(createBlocks(null as any, null as any)).toEqual(expected);
      expect(createBlocks(false as any, false as any)).toEqual(expected);
      expect(createBlocks(0 as any, 0 as any)).toEqual(expected);
      expect(createBlocks(void 0 as any, void 0 as any)).toEqual(expected);
    });

    it('should create React components', () => {
      expect(
        createBlocks(
          {
            styles: {
              display: 'block'
            }
          },
          {
            BlockPadSM: {
              padding: [15]
            },

            BlockPadMD: {
              padding: [15, 30]
            }
          }
        )
      ).toBeDefined();
    });
  });
});
