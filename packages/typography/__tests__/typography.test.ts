import { position } from 'styled-system';

import {
  createTypographyComponents,
  getStyleProps,
  fluidSizing,
  fontWeight
} from '../src';

describe('@artifak/typography', () => {
  describe('createTypographyComponents - generates typography React components based on styles object argument provided', () => {
    it('should return the base Typography system component when provided with an invalid argument', () => {
      const expected = {};
      expect(createTypographyComponents({} as any, {} as any)).toStrictEqual(
        expected
      );
      expect(
        createTypographyComponents(null as any, null as any)
      ).toStrictEqual(expected);
      expect(
        createTypographyComponents(false as any, false as any)
      ).toStrictEqual(expected);
      expect(createTypographyComponents(0 as any, 0 as any)).toStrictEqual(
        expected
      );
      expect(
        createTypographyComponents(void 0 as any, void 0 as any)
      ).toStrictEqual(expected);
    });

    it('should create React components', () => {
      expect(
        createTypographyComponents(
          {},
          {
            H1: {
              marginBottom: [15],
              as: 'h1'
            }
          }
        )
      ).toBeDefined();
    });
  });

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

  describe('fluidSizing - writes sizing CSS rule that dynamically adapts to screen width based on provided min/max constraits', () => {
    it('should return FALSE by default', () => {
      const expected = '';
      expect(
        fluidSizing(void 0 as any, void 0 as any, void 0 as any, void 0 as any)
      ).toEqual(expected);
    });

    it('should return FALSE by when provided falsy arguments', () => {
      const expected = '';
      expect(fluidSizing(void 0 as any, 96, 300, 1200)).toEqual(expected);
    });

    it('should return a CSS string rule', () => {
      const expected = `calc(48px + (96 - 48) * ((100vw - 300px) / (1200 - 300)))`;
      expect(fluidSizing(48, 96, 300, 1200)).toEqual(expected);
    });
  });

  describe('fontWeight', () => {
    it('should return font weights with the correct values', () => {
      const expected = {
        BLACK: 900,
        BOLD: 700,
        EXTRA_BOLD: 800,
        EXTRA_LIGHT: 200,
        LIGHT: 300,
        MEDIUM: 500,
        REGULAR: 400,
        SEMI_BOLD: 600,
        THIN: 100
      };

      expect(fontWeight).toEqual(expected);
    });
  });
});
