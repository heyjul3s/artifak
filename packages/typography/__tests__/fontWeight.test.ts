import { fontWeight } from '../src';

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
