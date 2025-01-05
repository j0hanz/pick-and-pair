import React from 'react';
import { TbHeart } from 'react-icons/tb';
import styles from '../App.module.css';

export default function Attempts({ attempts }) {
  const attemptsLeft = Math.max(0, 5 - attempts);
  return (
    <div>
      <TbHeart className={styles.statsIcon} /> {attemptsLeft}
    </div>
  );
}
