// useSessionTimeout.js
import { useEffect, useRef } from 'react';

const useSessionTimeout = (timeoutDuration, onTimeout) => {
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(onTimeout, timeoutDuration);
  };

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'click', 'scroll'];

    const resetAndStartTimer = () => resetTimer();

    events.forEach(event => window.addEventListener(event, resetAndStartTimer));

    resetTimer();

    return () => {
      events.forEach(event => window.removeEventListener(event, resetAndStartTimer));
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timeoutDuration, onTimeout]);

  return resetTimer;
};

export default useSessionTimeout;
