import { useState, useEffect } from 'react';

export function useTimer(timerActive) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (!timerActive) return;
    const timerId = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timerActive]);

  return elapsedTime;
}
