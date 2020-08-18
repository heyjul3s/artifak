import * as generator from '../';
import {
  mockComponentStyles,
  MockComponent,
} from '../__mocks__/componentGenerator.mock';

describe('@artifak/component-generator', () => {
  describe('createComponents', () => {
    it('should return undefined when provided invalid arguments', () => {
      const expected = void 0;
      const SystemComponent = generator.createComponents(void 0, void 0);

      expect(SystemComponent).toEqual(expected);
    });

    it('should create React components', () => {
      const SystemComponent = generator.createComponents(
        MockComponent,
        mockComponentStyles
      );
      expect(SystemComponent).toBeDefined();
    });
  });

  describe('createComponent', () => {
    it('should return a component', () => {
      expect(
        generator.createComponent(MockComponent, mockComponentStyles)
      ).toBeDefined();
    });
  });
});
