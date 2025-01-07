import React from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import styles from './styles/Moves.module.css';

export default function Moves({ moves }) {
  return (
    <div className={styles.moves}>
      <HiOutlineXMark className={`${styles.statsIcon} me-1`} /> {moves}
    </div>
  );
}
