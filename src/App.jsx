import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from './styles/global/App.module.css';
import Game from './components/Game';
import { handleButtonClick } from './utils/soundManager';

// Main app component
export default function App() {
  const [isGameActive, setIsGameActive] = useState(false);

  // Start game
  const startGame = useCallback(() => {
    setIsGameActive(true);
  }, []);

  // Restart game
  const handleRestart = useCallback(() => {
    setIsGameActive(false);
  }, []);

  // Exit game
  const handleExit = useCallback(() => {
    setIsGameActive(false);
  }, []);

  return (
    <>
      {isGameActive ? (
        <Game onRestart={handleRestart} onExit={handleExit} />
      ) : (
        <div className="d-flex justify-content-center">
          <Button
            onClick={handleButtonClick(startGame)}
            className={styles.button}
          >
            Start Game
          </Button>
        </div>
      )}
    </>
  );
}
