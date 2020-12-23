import { system } from 'styled-system';
import { createBaseComponents, createStyledComponent } from '../src';

describe('@artifak/component-generator', () => {
  describe('createBaseComponents', () => {
    it('should return undefined when provided invalid arguments', () => {
      const expected = {};
      const SystemComponent = createBaseComponents(
        void 0 as any,
        void 0 as any
      );
      expect(SystemComponent).toEqual(expected);
    });

    it('should create React components', () => {
      const SystemComponent = createBaseComponents(
        { element: 'div' },
        {
          H1: {
            marginBottom: ['15px'],
            as: 'h1'
          }
        }
      );
      expect(SystemComponent).toBeDefined();
    });
  });

  describe('createStyledComponent', () => {
    it('should return a styled component with default config when no arguments are provided', () => {
      const resultingStyledComponent = createStyledComponent({});
      expect(resultingStyledComponent).toBeDefined();
    });

    it('should return a styled component', () => {
      const mockConfig = system({
        textDecoration: true,
        textIndent: true,
        textTransform: true,
        textOverflow: true,
        whiteSpace: true,
        wordBreak: true,
        wordSpacing: true
      });

      const resultingStyledComponent = createStyledComponent({
        styles: { fontSize: '1em' },
        styleProps: [mockConfig]
      });

      expect(resultingStyledComponent).toBeDefined();
    });
  });
});
