import { useRef, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';

export function useDebouncedFn<
  Fn extends (...args: any[]) => any,
  Delay extends number
>(callback: Fn, delay: Delay) {
  const memoizedCallback = useCallback<Fn>(callback, []);
  const debouncedFn = useRef(debounce(memoizedCallback, delay));

  useEffect(() => {
    debouncedFn.current = debounce(memoizedCallback, delay);

    return function unmountUseDebounce() {
      debouncedFn.current.cancel();
    };
  }, [debouncedFn, delay]);

  return debouncedFn.current;
}
