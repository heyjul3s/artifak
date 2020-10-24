import { createBaseComponents, createStyledFunctionComponent } from '../src';
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
        createStyledFunctionComponent(MockComponent, mockComponentStyles)
      ).toBeDefined();
    });
  });
});
