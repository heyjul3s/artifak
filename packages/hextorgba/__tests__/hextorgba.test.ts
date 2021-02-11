import { hexToRGBA } from '../src/hextorgba';

describe('@artifak/hextorgba', () => {
  it('returns a string RGBA value with valid hex and alpha values', () => {
    expect(hexToRGBA('#DF3EA1', 0.5)).toEqual('rgba(223, 62, 161, 0.5)');
    expect(hexToRGBA('#df3ea1', 0.5)).toEqual('rgba(223, 62, 161, 0.5)');
  });

  it('returns a string RGBA value with valid hex and default alpha values', () => {
    expect(hexToRGBA('#DF3EA1')).toEqual('rgba(223, 62, 161, 1)');
    expect(hexToRGBA('#df3ea1')).toEqual('rgba(223, 62, 161, 1)');
  });

  it('returns UNDEFINED with invalid non-hexadecimal color string value', () => {
    expect(hexToRGBA('Lorem Ipsum Dolor Sit Amet', 0.5)).toEqual(void 0);
  });
});
