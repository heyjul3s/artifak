import { renderHook } from '@testing-library/react-hooks';
import { useMatchMedia } from '../src/useMatchMedia';
import '../__mocks__/useMatchMedia.mock';

describe('useMatchMedia - checks for media queries via window.matchMedia', () => {
  test('should match media query', () => {
    const { result } = renderHook(() => useMatchMedia('(min-width: 600px)'));
    expect(result.current).toBe(true);
  });
});
