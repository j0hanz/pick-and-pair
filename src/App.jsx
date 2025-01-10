import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from './styles/global/App.module.css';
import Game from './components/Game';
import LoadingSpinner from './components/Spinner';
import { handleButtonClick } from './utils/soundManager';

// Main app component
export default function App() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Start game
  const startGame = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsGameActive(true);
    }, 3000);
  }, []);

  // Restart game
  const handleRestart = useCallback(() => {
    setIsGameActive(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsGameActive(true);
    }, 3000);
  }, []);

  // Exit game
  const handleExit = useCallback(() => {
    setIsGameActive(false);
  }, []);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      {!isLoading && !isGameActive && (
        <div className="d-flex justify-content-center">
          <Button
            onClick={handleButtonClick(startGame)}
            className={styles.btnStart}
          >
            <span>Start Game</span>
          </Button>
        </div>
      )}
      {isGameActive && (
        <Game
          onRestart={handleRestart}
          onExit={handleExit}
          startGame={startGame}
        />
      )}
    </>
  );
}
