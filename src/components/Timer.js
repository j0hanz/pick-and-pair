import React, { useState, useEffect } from 'react';
import styles from './styles/Timer.module.css';

// Custom hook for countdown
function useCountdown(initialTime, onTimeUp) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [time, onTimeUp]);

  return time;
}

export default function Timer({ initialTime, onTimeUp }) {
  const time = useCountdown(initialTime, onTimeUp);

  return <div className={styles.timer}>Time Remaining: {time} seconds</div>;
}
