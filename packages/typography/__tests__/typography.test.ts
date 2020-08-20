import { createTypographyComponents, fluidSizing, TypographyBase } from '../';

import { mockTypographyStyles } from '../__mocks__/typography.mock';

describe('@artifak/typography', () => {
  describe('createTypographyComponents - generates typography React components based on styles object argument provided', () => {
    it('should return the base Typography system component when provided with an invalid argument', () => {
      const expected = TypographyBase;
      expect(createTypographyComponents({} as any)).toEqual(expected);
      expect(createTypographyComponents(null as any)).toEqual(expected);
      expect(createTypographyComponents(false as any)).toEqual(expected);
      expect(createTypographyComponents(0 as any)).toEqual(expected);
      expect(createTypographyComponents(void 0 as any)).toEqual(expected);
    });

    it('should create React components', () => {
      expect(createTypographyComponents(mockTypographyStyles)).toBeDefined();
    });
  });

  describe('fluidSizing - writes sizing CSS rule that dynamically adapts to screen width based on provided min/max constraits', () => {
    it('should return FALSE by default', () => {
      const expected = false;
      expect(
        fluidSizing(void 0 as any, void 0 as any, void 0 as any, void 0 as any)
      ).toEqual(expected);
    });

    it('should return FALSE by when provided falsy arguments', () => {
      const expected = false;
      expect(fluidSizing(void 0 as any, 96, 300, 1200)).toEqual(expected);
    });

    it('should return a CSS string rule', () => {
      const expected = `calc(48px + (96 - 48) * ((100vw - 300px) / (1200 - 300)))`;
      expect(fluidSizing(48, 96, 300, 1200)).toEqual(expected);
    });
  });
});
