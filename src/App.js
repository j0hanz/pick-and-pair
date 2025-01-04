import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import styles from './App.module.css';
import GameLogic from './game/gameLogic';

function App() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [showDifficultyButtons, setShowDifficultyButtons] = useState(false);

  const startGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setIsGameActive(true);
  };

  const showDifficultySelection = () => {
    setShowDifficultyButtons(true);
  };

  const toggleGame = useCallback(() => {
    setIsGameActive(false);
    setDifficulty(null);
    setShowDifficultyButtons(false);
  }, []);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Container className={styles.container}>
          {isGameActive ? (
            <GameLogic onRestart={toggleGame} difficulty={difficulty} />
          ) : showDifficultyButtons ? (
            <div>
              <Button
                onClick={() => startGame('easy')}
                className={styles.button}
              >
                Easy
              </Button>
              <Button
                onClick={() => startGame('hard')}
                className={styles.button}
              >
                Hard
              </Button>
            </div>
          ) : (
            <Button onClick={showDifficultySelection} className={styles.button}>
              Start Game
            </Button>
          )}
        </Container>
      </header>
    </div>
  );
}

export default App;
