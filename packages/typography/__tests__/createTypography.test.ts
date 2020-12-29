import { position } from 'styled-system';
import { createTypography, getStyleProps, fontWeight } from '../src';

describe('createTypography - generates typography React components based on styles object argument provided', () => {
  it('should return the base Typography system component when provided with an invalid argument', () => {
    expect(createTypography({} as any, {} as any)).toHaveProperty('Base');
    expect(createTypography(null as any, null as any)).toHaveProperty('Base');
    expect(createTypography(false as any, false as any)).toHaveProperty('Base');
    expect(createTypography(0 as any, 0 as any)).toHaveProperty('Base');
    expect(createTypography(void 0 as any, void 0 as any)).toHaveProperty(
      'Base'
    );
  });

  it('should create React components', () => {
    expect(
      createTypography(
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
