import { useState, useEffect } from 'react';
import { WindowSize } from './typings';

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(getSize());

  function getSize() {
    if (!!window) {
      return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
      };
    } else {
      console.error('ReferenceError: typeof "window" is undefined');

      return {
        innerHeight: 0,
        innerWidth: 0,
        outerHeight: 0,
        outerWidth: 0
      };
    }
  }

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return function unmountUseWindowSize() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
