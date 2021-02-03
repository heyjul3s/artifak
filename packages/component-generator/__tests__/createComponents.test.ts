import styled from 'styled-components';
import { createComponents } from '../src';

describe('createComponents - creates styled components based on provided config', () => {
  it('should return an empty object when provided invalid arguments', () => {
    const expected = {};
    const SystemComponent = createComponents(void 0 as any, void 0 as any);
    expect(SystemComponent).toEqual(expected);
  });

  it('should create React components when passed a configuration object as base', () => {
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

  it('should create React components when passed a Styled Component as base', () => {
    const TestComponent = styled.div`
      display: block;
      width: 100%;
      margin: auto;
    `;

    const SystemComponent = createComponents(TestComponent, {
      Container: {
        padding: ['0 15px'],
        as: 'h1'
      }
    });

    expect(SystemComponent).toBeDefined();
  });
});
