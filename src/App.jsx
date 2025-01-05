import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from './styles/global/App.module.css';
import GameLogic from './game/GameLogic';
import { DifficultyButtons } from './game/DifficultyLogic';

// Main app component
export default function App() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [showDifficultyButtons, setShowDifficultyButtons] = useState(false);

  // Start game with selected difficulty
  const startGame = useCallback((selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setIsGameActive(true);
  }, []);

  // Show difficulty options
  const showDifficultySelection = useCallback(() => {
    setShowDifficultyButtons(true);
  }, []);

  // Restart game
  const handleRestart = useCallback(() => {
    setIsGameActive(false);
    setShowDifficultyButtons(true);
  }, []);

  // Exit game
  const handleExit = useCallback(() => {
    setIsGameActive(false);
    setShowDifficultyButtons(false);
  }, []);

  return (
    <>
      {isGameActive ? (
        <GameLogic
          onRestart={handleRestart}
          onExit={handleExit}
          difficulty={difficulty}
        />
      ) : showDifficultyButtons ? (
        <DifficultyButtons onSelectDifficulty={startGame} />
      ) : (
        <Button onClick={showDifficultySelection} className={styles.button}>
          Start Game
        </Button>
      )}
    </>
  );
}
