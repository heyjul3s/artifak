import { createComponents } from '../src';

describe('createComponents - creates styled components based on provided config', () => {
  it('should return undefined when provided invalid arguments', () => {
    const expected = {};
    const SystemComponent = createComponents(void 0 as any, void 0 as any);
    expect(SystemComponent).toEqual(expected);
  });

  it('should create React components', () => {
    const SystemComponent = createComponents(
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
