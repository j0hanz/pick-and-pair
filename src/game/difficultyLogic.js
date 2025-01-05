import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../App.module.css';

export const getTotalPairs = (difficulty) => {
  return difficulty === 'hard' ? 9 : 6;
};

// Renders difficulty buttons
export function DifficultyButtons({ onSelectDifficulty }) {
  return (
    <div className="d-flex justify-content-center gap-3">
      <Button
        onClick={() => onSelectDifficulty('easy')}
        className={styles.difficultyButton}
      >
        Easy
      </Button>
      <Button
        onClick={() => onSelectDifficulty('hard')}
        className={styles.difficultyButton}
      >
        Hard
      </Button>
    </div>
  );
}
