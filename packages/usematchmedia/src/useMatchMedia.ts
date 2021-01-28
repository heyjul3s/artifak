import { useRef, useState, useCallback, useEffect } from 'react';

export function useMatchMedia(query: string): boolean {
  const matchListRef = useRef<MediaQueryList | null>(null);
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const onMediaQueryListEvent = useCallback((e: MediaQueryListEvent) => {
    setIsMatch(e.matches);
  }, []);

  useEffect(() => {
    if (!!window?.matchMedia) {
      matchListRef.current = window.matchMedia(query);
      matchListRef.current.addEventListener('change', onMediaQueryListEvent);
      setIsMatch(matchListRef.current.matches);
    } else {
      console.error('Error: typeof "window" is undefined.');
      setIsMatch(false);
    }

    return function unmountUseMatchMedia() {
      if (matchListRef.current) {
        matchListRef.current.removeEventListener(
          'change',
          onMediaQueryListEvent
        );
      }
    };
  }, [query]);

  return isMatch;
}
