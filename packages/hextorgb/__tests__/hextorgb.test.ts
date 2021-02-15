import {
  hexToRGB,
  getHexToRGBvalues,
  splitHexToRGB,
  formatHexValue,
  expandShorthandHex,
  isValidHex
} from '../src/hextorgb';

describe('@artifak/hextorgb', () => {
  describe('isValidHex', () => {
    it('returns TRUE with full length hexadecimal color string value', () => {
      expect(isValidHex('#FAFDFC')).toEqual(true);
      expect(isValidHex('#fdfdfd')).toEqual(true);
    });

    it('returns TRUE with shorthand hexadecimal color string value', () => {
      expect(isValidHex('#FAF')).toEqual(true);
      expect(isValidHex('#ddd')).toEqual(true);
    });

    it('returns FALSE with false-like values', () => {
      expect(isValidHex(void 0 as any)).toEqual(false);
      expect(isValidHex(false as any)).toEqual(false);
      expect(isValidHex(null as any)).toEqual(false);
    });

    it('returns FALSE with non-hexadecimal string value', () => {
      expect(isValidHex('#ff#fff')).toEqual(false);
      expect(isValidHex('#ff')).toEqual(false);
      expect(isValidHex('#Hello World')).toEqual(false);
      expect(isValidHex('Hello World')).toEqual(false);
    });
  });

  describe('expandShorthandHex', () => {
    it('expands shorthand hexadecimal colour value to full', () => {
      expect(expandShorthandHex('#FFF')).toBe('FFFFFF');
      expect(expandShorthandHex('#fff')).toBe('ffffff');
    });

    it('returns the same string non-hexadecimal value', () => {
      expect(expandShorthandHex('Hello World')).toBe('Hello World');
    });
  });

  describe('splitHexToRGB', () => {
    it('returns split hex values', () => {
      expect(splitHexToRGB('DF3EA1')!.toString()).toEqual(
        ['DF3EA1', 'DF', '3E', 'A1'].toString()
      );
    });

    it('returns NULL when provided non-hexadecimal colour value string', () => {
      expect(splitHexToRGB('Lorem Ipsum Dolor Sit Amet')).toEqual(null);
    });
  });

  describe('formatHexValue', () => {
    it('returns UNDEFINED when provided non-hexadecimal colour value string', () => {
      expect(formatHexValue('Lorem Ipsum Dolor Sit Amet')).toEqual(void 0);
    });

    it('returns an array of split hexadecimal color values when provided a hexadecimal colour value string', () => {
      expect(formatHexValue('#DF3EA1')?.toString()).toEqual(
        ['#DF3EA1', 'DF', '3E', 'A1'].toString()
      );
    });
  });

  describe('getRGBvalues', () => {
    it('returns an object with RGB values', () => {
      expect(getHexToRGBvalues('#DF3EA1')).toMatchObject({
        r: 223,
        g: 62,
        b: 161
      });
    });

    it('returns UNDEFINED with invalid hex string values', () => {
      expect(getHexToRGBvalues('Hello World')).toEqual(void 0);
    });
  });

  describe('hexToRGB', () => {
    it('returns a string RGB value with valid hex and alpha values', () => {
      expect(hexToRGB('#DF3EA1')).toEqual('rgb(223, 62, 161)');
      expect(hexToRGB('#df3ea1')).toEqual('rgb(223, 62, 161)');
    });

    it('returns a string RGBA value with valid hex and default alpha values', () => {
      expect(hexToRGB('#DF3EA1')).toEqual('rgb(223, 62, 161)');
      expect(hexToRGB('#df3ea1')).toEqual('rgb(223, 62, 161)');
    });

    it('returns UNDEFINED with invalid non-hexadecimal color string value', () => {
      expect(hexToRGB('Lorem Ipsum Dolor Sit Amet')).toEqual(void 0);
    });
  });
});
