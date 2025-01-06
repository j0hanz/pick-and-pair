import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../styles/global/App.module.css';
import { handleButtonClick } from '../utils/soundManager';

// Renders difficulty buttons
export function DifficultyButtons({ onSelectDifficulty }) {
  return (
    <div className="d-flex justify-content-center gap-3">
      <Button
        onClick={handleButtonClick(() => onSelectDifficulty('easy'))}
        className={styles.difficultyButton}
      >
        Easy
      </Button>
      <Button
        onClick={handleButtonClick(() => onSelectDifficulty('hard'))}
        className={styles.difficultyButton}
      >
        Hard
      </Button>
    </div>
  );
}
