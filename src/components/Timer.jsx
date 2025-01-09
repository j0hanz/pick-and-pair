import React, { memo } from 'react';
import { HiOutlineClock } from 'react-icons/hi2';
import { useTimer } from '../hooks/useTimer';
import styles from './styles/Timer.module.css';

const Timer = memo(() => {
  const elapsedTime = useTimer();

  return (
    <div className={styles.timer}>
      <HiOutlineClock className={`${styles.clockIcon} me-2`} /> {elapsedTime}
    </div>
  );
});

Timer.displayName = 'Timer';
export default Timer;
