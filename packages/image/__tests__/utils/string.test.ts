import * as utils from '../../utils/string';

describe('string', () => {
  describe('isString', () => {
    it('should return FALSE when provided with a non-string type value', () => {
      expect(utils.isString({} as any)).toBe(false);
      expect(utils.isString(void 0 as any)).toBe(false);
      expect(utils.isString(null as any)).toBe(false);
      expect(utils.isString(false as any)).toBe(false);
      expect(utils.isString(NaN as any)).toBe(false);
    });

    it('isString', () => {
      expect(utils.isString('1')).toBe(true);
    });
  });

  describe('isNonEmptyString', () => {
    it('should return FALSE when provided with a non-string argument', () => {
      expect(utils.isNonEmptyString({} as any)).toBe(false);
      expect(utils.isNonEmptyString(void 0 as any)).toBe(false);
      expect(utils.isNonEmptyString(null as any)).toBe(false);
      expect(utils.isNonEmptyString(false as any)).toBe(false);
      expect(utils.isNonEmptyString(NaN as any)).toBe(false);
    });

    it('should return FALSE when provided with an empty string argument', () => {
      expect(utils.isNonEmptyString('')).toBe(false);
    });

    it('should return TRUE when provided with a string argument', () => {
      expect(utils.isNonEmptyString('This is not an empty string')).toBe(true);
    });
  });
});
