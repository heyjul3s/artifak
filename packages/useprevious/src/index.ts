import { useRef, useEffect } from 'react';

export function usePrevious<Value extends unknown>(value: Value) {
  const ref = useRef<Value>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
