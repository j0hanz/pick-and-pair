import React, { useState, useEffect } from 'react';
import { formatTime } from '../utils/formatTime';

export default function Timer({ resetTrigger, isGameComplete }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isGameComplete) return;
    let interval = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    return () => clearInterval(interval);
  }, [isGameComplete]);

  useEffect(() => {
    if (resetTrigger) {
      setTime(0);
    }
  }, [resetTrigger]);

  return <div>Time: {formatTime(time)}</div>;
}
