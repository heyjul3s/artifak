import {
  createTypographyComponents,
  fluidSizing,
  lineHeightByPercentage,
  TypographySystemComponent,
} from '../';

import { H1, H2, mockTypographyStyles } from '../__mocks__/Typography';

describe('@react-artifact/typography', () => {
  describe('createTypographyComponents - generates typography React components based on styles object argument provided', () => {
    it('should return an empty object when provided with an empty styles object as argument', () => {
      const expected = {};
      expect(createTypographyComponents({} as any)).toEqual(expected);
    });

    it('should return the base Typography system component when provided with an invalid argument', () => {
      const expected = TypographySystemComponent;
      expect(createTypographyComponents(null as any)).toEqual(expected);
      expect(createTypographyComponents(false as any)).toEqual(expected);
      expect(createTypographyComponents(0 as any)).toEqual(expected);
      expect(createTypographyComponents(void 0 as any)).toEqual(expected);
    });

    it('should create React components', () => {
      const expected = { H1, H2 };
      expect(createTypographyComponents(mockTypographyStyles)).toEqual(
        expected
      );
    });
  });

  describe('lineHeightByPercentage - provides a decimate value with a default of 1.45', () => {
    it('should EQUAL 1.45 by default', () => {
      expect(lineHeightByPercentage()).toEqual(1.45);
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
