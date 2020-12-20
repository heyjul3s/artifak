import { useRef, useState, useCallback, useEffect } from 'react';

export function useMatchMedia(query: string) {
  const matchListRef = useRef<MediaQueryList | null>(null);
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const onMediaQueryListEvent = useCallback((e: MediaQueryListEvent) => {
    setIsMatch(e.matches);
  }, []);

  useEffect(() => {
    matchListRef.current = window.matchMedia(query);
    matchListRef.current.addEventListener('change', onMediaQueryListEvent);
    setIsMatch(matchListRef.current.matches);

    return () => {
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
