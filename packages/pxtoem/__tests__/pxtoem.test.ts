import {
  pxToEm,
  getPxNumericValue,
  extractPxNumericValue
} from '../src/pxtoem';

describe('@artifak/pxtoem', () => {
  it('returns value of "0em" when provided with false-like args', () => {
    expect(pxToEm(void 0 as any)).toEqual('0em');
    expect(pxToEm(null as any)).toEqual('0em');
    expect(pxToEm(false as any)).toEqual('0em');
    expect(pxToEm(NaN as any)).toEqual('0em');
  });

  it('returns a string of "0em" when provided with Infinity as value', () => {
    expect(pxToEm(Infinity)).toEqual('0em');
  });

  it('returns a string EM value of 3 when provided a numeric value of "48"', () => {
    expect(pxToEm(48)).toEqual('3em');
  });

  it('returns a string EM value of 3 when provided with a string value of "48PX"', () => {
    expect(pxToEm('48px')).toEqual('3em');
  });
});

describe('getPxNumericValue', () => {
  it('should return only the numeric type value when given a "PX" numeric value', () => {
    expect(getPxNumericValue('1px')).toEqual(1);
  });

  it('should return only the numeric type value when given a "EM" numeric value', () => {
    expect(getPxNumericValue('2em')).toEqual(2);
  });

  it('should return only the numeric type value when given a "REM" numeric value', () => {
    expect(getPxNumericValue('3rem')).toEqual(3);
  });

  it('should return only the numeric type value when given a "DPI" numeric value', () => {
    expect(getPxNumericValue('4dpi')).toEqual(4);
  });

  it('should return only the numeric type value when given a "PT" numeric value', () => {
    expect(getPxNumericValue('5pt')).toEqual(5);
  });
});

describe('extractPxNumericValue', () => {
  it('should return only the numeric type value when given a float string value', () => {
    expect(extractPxNumericValue('0.123px')).toEqual(0.123);
  });

  it('should return only the numeric type value when given an integer string value', () => {
    expect(extractPxNumericValue('1px')).toEqual(1);
  });
});
