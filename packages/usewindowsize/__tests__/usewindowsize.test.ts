import { fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
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

    act(() => {
      window.innerWidth = 500;
      window.innerHeight = 500;
      window.outerWidth = 500;
      window.outerHeight = 500;

      fireEvent(window, new Event('resize'));
    });

    expect(result.current).toStrictEqual({
      innerHeight: 500,
      innerWidth: 500,
      outerHeight: 500,
      outerWidth: 500
    });
  });
});
