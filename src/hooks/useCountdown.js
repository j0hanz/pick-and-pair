import { useState, useEffect } from 'react';

export function useCountdown(initialTime, onTimeUp) {
  // State to keep track of remaining time
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    // If time is up, call the onTimeUp callback
    if (remainingTime <= 0) {
      onTimeUp();
      return;
    }

    // Set up a timer to decrease the remaining time every second
    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the timer when the component unmounts or remainingTime changes
    return () => clearInterval(timerId);
  }, [remainingTime, onTimeUp]);

  return remainingTime;
}
