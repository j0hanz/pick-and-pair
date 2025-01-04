import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../App.module.css';

export const getTotalPairs = (difficulty) => {
  return difficulty === 'hard' ? 10 : 6;
};

// Renders difficulty buttons
export function DifficultyButtons({ onSelectDifficulty }) {
  return (
    <div>
      <Button
        onClick={() => onSelectDifficulty('easy')}
        className={styles.button}
      >
        Easy
      </Button>
      <Button
        onClick={() => onSelectDifficulty('hard')}
        className={styles.button}
      >
        Hard
      </Button>
    </div>
  );
}
