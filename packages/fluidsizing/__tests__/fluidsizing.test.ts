import { fluidSizing } from '../src';

describe('fluidSizing - writes sizing CSS rule that dynamically adapts to screen width based on provided min/max constraits', () => {
  it('should return FALSE by default', () => {
    const expected = '';
    expect(
      fluidSizing(
        void 0 as any,
        void 0 as any,
        void 0 as any,
        void 0 as any,
        void 0 as any
      )
    ).toEqual(expected);
  });

  it('should return FALSE by when provided falsy arguments', () => {
    const expected = '';
    expect(fluidSizing(void 0 as any, 96, 300, 1200, 'px')).toEqual(expected);
  });

  it('should return a CSS string rule', () => {
    const expected = `calc(48px + (96 - 48) * ((100vw - 300px) / (1200 - 300)))`;
    expect(fluidSizing(48, 96, 300, 1200, 'px')).toEqual(expected);
  });
});
