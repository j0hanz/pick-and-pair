import React, { useState, useEffect, useRef } from 'react';
import { formatTime } from '../utils/formatTime';

export default function Timer({ resetTrigger, isGameOver, setTimeLeft }) {
  const [time, setTime] = useState(60);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isGameOver) return clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isGameOver]);

  useEffect(() => {
    if (resetTrigger) {
      setTime(60);
      setTimeLeft(60);
    }
  }, [resetTrigger, setTimeLeft]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return <div>Time: {formatTime(time)}</div>;
}
