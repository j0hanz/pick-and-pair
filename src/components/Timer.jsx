import React from 'react';
import { HiOutlineClock } from 'react-icons/hi2';
import { useCountdown } from '../hooks/useCountdown';
import styles from './styles/Timer.module.css';

export default function Timer({ initialTime, onTimeUp }) {
  // Use the useCountdown hook to get the remaining time
  const remainingTime = useCountdown(initialTime, onTimeUp);

  return (
    <div className={styles.timer}>
      <HiOutlineClock className={`${styles.statsIcon} me-2`} /> {remainingTime}
    </div>
  );
}
