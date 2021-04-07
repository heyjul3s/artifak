import { useEffect, RefObject } from 'react';

export function useClickAway(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (e: Event) => void
) {
  const handleClick = (e: Event) => {
    ref.current && !ref.current.contains(e.target as Node) && onClickAway(e);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return function unmountUseClickAway() {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);
}
