import { useState, useEffect } from 'react';

export function useTimer(timerActive, onTimeUpdate = () => {}) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (!timerActive) return;
    const timerId = setInterval(() => {
      setElapsedTime((prevTime) => {
        const newTime = prevTime + 1;
        onTimeUpdate(newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timerActive, onTimeUpdate]);

  return elapsedTime;
}
