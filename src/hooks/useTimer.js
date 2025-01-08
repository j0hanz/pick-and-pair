import { useState, useEffect } from 'react';

export function useTimer(onTimeUpdate = () => {}) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setElapsedTime((prevTime) => {
        const newTime = prevTime + 1;
        onTimeUpdate(newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [onTimeUpdate]);

  return elapsedTime;
}
