import { renderHook } from '@testing-library/react-hooks';
import { useDebouncedFn } from '../src';

describe('@artifak/usedebouncefn', () => {
  test('should match media query', () => {
    const testFn = () => console.log('Hello World');
    const { result } = renderHook(() => useDebouncedFn(testFn, 300));
    expect(result.current).toBeDefined();
  });
});
