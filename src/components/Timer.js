import React, { useState, useEffect, useCallback, useRef } from 'react';
import { formatTime } from '../utils/formatTime';

export default function Timer({
  resetTrigger,
  isGameComplete,
  timeLimit = 120,
  setIsGameOver,
  setTimeLeft,
}) {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime >= timeLimit || isGameComplete) {
          clearInterval(timerRef.current);
          setIsGameOver(true);
          return prevTime;
        }
        return prevTime + 1;
      });
    }, 1000);
  }, [timeLimit, isGameComplete, setIsGameOver]);

  useEffect(() => {
    if (isGameComplete || time >= timeLimit) return;
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [isGameComplete, time, timeLimit, startTimer]);

  useEffect(() => {
    if (resetTrigger) {
      setTime(0);
      setTimeLeft(timeLimit);
      startTimer();
    }
  }, [resetTrigger, timeLimit, startTimer, setTimeLeft]);

  return <div>Time: {formatTime(time)}</div>;
}
