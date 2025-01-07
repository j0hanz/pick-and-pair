import { useState, useEffect } from 'react';

export function useCountdown(initialTime = 0, onTimeUp = () => {}) {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    // If time is up (or below zero), call onTimeUp and clamp to 0 (optional)
    if (remainingTime <= 0) {
      setRemainingTime(0);
      onTimeUp();
      return;
    }

    // Otherwise, keep counting down
    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup on unmount or when remainingTime changes
    return () => clearInterval(timerId);
  }, [remainingTime, onTimeUp]);

  return remainingTime;
}
