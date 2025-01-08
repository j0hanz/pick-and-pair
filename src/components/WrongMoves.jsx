import React, { memo } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import styles from './styles/WrongMoves.module.css';

const Moves = memo(({ moves }) => {
  return (
    <div className={styles.moves}>
      <HiOutlineXMark className="me-1" /> {moves}
    </div>
  );
});

Moves.displayName = 'Moves';
export default Moves;
