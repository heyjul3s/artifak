import { system } from 'styled-system';

import {
  createBaseComponents,
  createStyledFunctionComponent,
  createStyledComponent
} from '../src';

import {
  mockComponentStyles,
  MockComponent
} from '../__mocks__/componentGenerator.mock';

describe('@artifak/component-generator', () => {
  describe('createComponentsDictionary', () => {
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
        MockComponent,
        mockComponentStyles
      );
      expect(SystemComponent).toBeDefined();
    });
  });

  describe('createStyledFunctionComponent', () => {
    it('should return a component', () => {
      expect(
        createStyledFunctionComponent(
          MockComponent,
          mockComponentStyles.H1.styles
        )
      ).toBeDefined();
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
