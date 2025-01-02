import React, { useState, useEffect } from 'react';
import { formatTime } from '../utils/formatTime';

export default function Timer({ resetTrigger, isGameComplete }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    setIsRunning(!isGameComplete);
  }, [isGameComplete]);

  useEffect(() => {
    if (isGameComplete) return;

    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isGameComplete]);

  useEffect(() => {
    if (resetTrigger) {
      setTime(0);
      setIsRunning(true);
    }
  }, [resetTrigger]);

  return <div>Time: {formatTime(time)}</div>;
}
