import { useEffect, RefObject } from 'react';

export function useOnClickOutOfBounds(
  ref: RefObject<HTMLElement>,
  callback: () => void
) {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}
