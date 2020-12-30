import { createTextInputs } from '../src';

describe('createTypography - generates typography React components based on styles object argument provided', () => {
  it('should return the base Typography system component when provided with an invalid argument', () => {
    expect(createTextInputs({} as any, {} as any)).toHaveProperty('Base');
    expect(createTextInputs(null as any, null as any)).toHaveProperty('Base');
    expect(createTextInputs(false as any, false as any)).toHaveProperty('Base');
    expect(createTextInputs(0 as any, 0 as any)).toHaveProperty('Base');
    expect(createTextInputs(void 0 as any, void 0 as any)).toHaveProperty(
      'Base'
    );
  });

  it('should create React components', () => {
    const inputs = {
      base: {
        styles: {
          width: '100%',
          border: '1px solid black',
          padding: ['1em']
        }
      },

      components: {
        InputSearch: {
          maxWidth: '300px',
          attrs: { type: 'search' }
        },

        InputUrl: {
          display: 'block',
          attrs: { type: 'url' }
        }
      }
    };

    expect(createTextInputs(inputs.base, inputs.components)).toBeDefined();
  });
});
