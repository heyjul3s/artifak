import { isNonEmptyPlainObject, getTargetObjectProps } from '../utils/object';

describe('object', () => {
  describe('isNonEmptyPlainObject - asserts if a value is a non-empty POJO', () => {
    it('should return FALSE when provided with a non-object type value', () => {
      expect(isNonEmptyPlainObject(void 0 as any)).toBe(false);
      expect(isNonEmptyPlainObject(null as any)).toBe(false);
      expect(isNonEmptyPlainObject(false as any)).toBe(false);
      expect(isNonEmptyPlainObject(NaN as any)).toBe(false);
    });

    it('should return FALSE when provided with an empty POJO', () => {
      expect(isNonEmptyPlainObject({} as any)).toBe(false);
    });

    it('should return TRUE when provided with a non-empty POJO', () => {
      expect(
        isNonEmptyPlainObject({
          key: 'hello world',
        })
      ).toBe(true);
    });
  });

  describe('getTargetObjectProps', () => {
    it('should return an empty object when provided with invalid arguments', () => {
      expect(getTargetObjectProps(void 0 as any, void 0 as any)).toEqual({});
      expect(getTargetObjectProps(null as any, null as any)).toEqual({});
    });

    it('should only get the selected keys', () => {
      expect(
        getTargetObjectProps(['key'], {
          key: 'hello world',
          notASelectedKey: 'Goodbye World',
        })
      ).toEqual({
        key: 'hello world',
      });
    });
  });
});
