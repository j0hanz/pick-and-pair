import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from './styles/global/App.module.css';
import Game from './components/Game';
import LoadingSpinner from './components/Spinner';
import { GameInstructions } from './components/Modal';
import { handleButtonClick } from './utils/soundManager';

// Main app component
export default function App() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

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

  // Open Instructions modal
  const openInstructions = useCallback(() => {
    setShowInstructions(true);
  }, []);

  // Close Instructions modal
  const closeInstructions = useCallback(() => {
    setShowInstructions(false);
  }, []);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      {!isLoading && !isGameActive && (
        <div className="d-flex flex-column align-items-center">
          <Button
            onClick={handleButtonClick(startGame)}
            className={styles.btnStart}
          >
            Start Game
          </Button>
          <Button
            onClick={handleButtonClick(openInstructions)}
            className={`${styles.btnGuide} mt-3`}
          >
            Instructions
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
      <GameInstructions show={showInstructions} onClose={closeInstructions} />
    </>
  );
}
