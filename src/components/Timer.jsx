import React, { memo } from 'react';
import { HiOutlineClock } from 'react-icons/hi2';
import { useCountdown } from '../hooks/useCountdown';
import styles from './styles/Timer.module.css';

const Timer = memo(({ initialTime, onTimeUp }) => {
  const remainingTime = useCountdown(initialTime, onTimeUp);

  return (
    <div className={styles.timer}>
      <HiOutlineClock className={`${styles.statsIcon} me-2`} /> {remainingTime}
    </div>
  );
});

Timer.displayName = 'Timer';
export default Timer;
