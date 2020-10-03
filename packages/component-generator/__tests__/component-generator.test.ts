import * as generator from '../';
import {
  mockComponentStyles,
  MockComponent,
} from '../__mocks__/componentGenerator.mock';

describe('@artifak/component-generator', () => {
  describe('createComponentsDictionary', () => {
    it('should return undefined when provided invalid arguments', () => {
      const expected = {};
      const SystemComponent = generator.createComponentsDictionary(
        void 0 as any,
        void 0
      );

      expect(SystemComponent).toEqual(expected);
    });

    it('should create React components', () => {
      const SystemComponent = generator.createComponentsDictionary(
        MockComponent,
        mockComponentStyles
      );
      expect(SystemComponent).toBeDefined();
    });
  });

  describe('createStyledFunctionComponent', () => {
    it('should return a component', () => {
      expect(
        generator.createStyledFunctionComponent(
          MockComponent,
          mockComponentStyles
        )
      ).toBeDefined();
    });
  });
});
