import React, { memo } from 'react';
import { HiXMark } from 'react-icons/hi2';
import styles from './styles/WrongMoves.module.css';

const Moves = memo(({ moves }) => {
  return (
    <div className={styles.moves}>
      <HiXMark className={`${styles.statsIcon} me-1`} /> {moves}
    </div>
  );
});

Moves.displayName = 'Moves';
export default Moves;
