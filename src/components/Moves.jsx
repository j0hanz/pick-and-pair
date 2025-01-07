import React from 'react';
import { TbArrowRight } from 'react-icons/tb';
import styles from './styles/Moves.module.css';

export default function Moves({ moves }) {
  return (
    <div>
      <TbArrowRight className={styles.statsIcon} /> {moves}
    </div>
  );
}
