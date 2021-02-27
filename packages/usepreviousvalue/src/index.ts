import { useRef, useEffect } from 'react';

export function usePreviousValue<Value extends unknown>(value: Value) {
  const ref = useRef<Value>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
