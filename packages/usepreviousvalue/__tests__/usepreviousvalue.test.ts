import { renderHook } from '@testing-library/react-hooks';
import { usePreviousValue } from '../src';

const usePreviousValueHook = () =>
  renderHook(({ state }) => usePreviousValue(state), {
    initialProps: { state: 0 }
  });

describe('@artifak/usepreviousvalue', () => {
  it('should be undefined initially', () => {
    const { result } = usePreviousValueHook();
    expect(result.current).toBeUndefined();
  });

  it('should return previous state value on rerender', async () => {
    const { result, rerender } = usePreviousValueHook();
    rerender({ state: 1 });
    expect(result.current).toBe(0);

    rerender({ state: 2 });
    expect(result.current).toBe(1);
  });
});
