import { renderHook } from '@testing-library/react-hooks';
import { useMatchMedia } from '../src/useMatchMedia';
import '../__mocks__/matchMedia.mock';

describe('useMatchMedia - checks for media queries via window.matchMedia', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('should match media query', () => {
    const { result } = renderHook(() => useMatchMedia('(min-width: 600px)'));
    expect(result.current).toBe(true);
  });

  test('should return false if "window.matchMedia" is undefined', () => {
    window.matchMedia = void 0;
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const { result } = renderHook(() => useMatchMedia('(min-width: 600px)'));

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error: typeof "window" is undefined.'
    );
    expect(result.current).toBe(false);
  });
});
