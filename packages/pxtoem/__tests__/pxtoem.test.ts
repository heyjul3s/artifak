import {
  pxToEm
  //  extractPxNumericValue
} from '../src/pxtoem';

describe('@artifak/pxtoem', () => {
  it('returns a string EM value', () => {
    expect(pxToEm(48)).toEqual('3em');
  });

  // describe('extractPxNumericValue', () => {
  //   it('should return numeric value as string type from an argument of alphanumeric value', () => {
  //     expect(extractPxNumericValue('1200px')).toEqual('1200');
  //   });
  // });
});
