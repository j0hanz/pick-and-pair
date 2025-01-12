import React from 'react';
import { HiXMark, HiOutlineClock } from 'react-icons/hi2';
import styles from '../components/styles/Modal.module.css';

// Displays the game statistics
export default function Scoreboard({ score, moves, completedTime }) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.scoreItem}>
        <HiXMark className={`me-1 ${styles.statsIcon}`} />
        {moves}
      </div>
      <div className={styles.scoreItem}>{score}</div>
      <div className={styles.scoreItem}>
        <HiOutlineClock className={`me-2 ${styles.scoreIcon}`} />
        {completedTime}
      </div>
    </div>
  );
}
