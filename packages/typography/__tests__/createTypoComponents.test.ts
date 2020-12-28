import { position } from 'styled-system';
import { createTypoComponents, getStyleProps, fontWeight } from '../src';

describe('createTypoComponents - generates typography React components based on styles object argument provided', () => {
  it('should return the base Typography system component when provided with an invalid argument', () => {
    expect(createTypoComponents({} as any, {} as any)).toHaveProperty('Base');

    expect(createTypoComponents(null as any, null as any)).toHaveProperty(
      'Base'
    );

    expect(createTypoComponents(false as any, false as any)).toHaveProperty(
      'Base'
    );

    expect(createTypoComponents(0 as any, 0 as any)).toHaveProperty('Base');

    expect(createTypoComponents(void 0 as any, void 0 as any)).toHaveProperty(
      'Base'
    );
  });

  it('should create React components', () => {
    expect(
      createTypoComponents(
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
