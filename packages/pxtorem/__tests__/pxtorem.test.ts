import { pxToRem } from '../src/pxtorem';

describe('@artifak/pxToRem', () => {
  it('returns value of "0rem" when provided with false-like args', () => {
    expect(pxToRem(void 0 as any)).toEqual('0rem');
    expect(pxToRem(null as any)).toEqual('0rem');
    expect(pxToRem(false as any)).toEqual('0rem');
    expect(pxToRem(NaN as any)).toEqual('0rem');
  });

  it('returns a string REM value of 3 when provided a numeric value of "48"', () => {
    expect(pxToRem(48)).toEqual('3rem');
  });

  it('returns a string REM value of 3 when provided with a string value of "48PX"', () => {
    expect(pxToRem('48px')).toEqual('3rem');
  });
});
