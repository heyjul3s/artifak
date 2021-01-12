import { renderHook } from '@testing-library/react-hooks';
import { useWindowSize } from '../src/useWindowSize';

describe('useWindowSize - gets window dimensions', () => {
  test('should return window dimensions', () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current).toStrictEqual({
      innerHeight: 768,
      innerWidth: 1024,
      outerHeight: 768,
      outerWidth: 1024
    });
  });
});
