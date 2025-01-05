import React, { useState, useEffect } from 'react';
import { TbClock } from 'react-icons/tb';

// Custom hook for countdown
function useCountdown(initialTime, onTimeUp) {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    // If time is up, call the onTimeUp callback
    if (remainingTime <= 0) {
      onTimeUp();
      return;
    }

    // Decrement the remaining time every second
    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup interval on component unmount or when remainingTime changes
    return () => clearInterval(timerId);
  }, [remainingTime, onTimeUp]);

  return remainingTime;
}

export default function Timer({ initialTime, onTimeUp }) {
  // Use the custom countdown hook
  const remainingTime = useCountdown(initialTime, onTimeUp);

  return (
    <div>
      <TbClock /> {remainingTime}
    </div>
  );
}
