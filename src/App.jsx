import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global/variables.css';
import { Button } from 'react-bootstrap';
import styles from './styles/global/App.module.css';
import Game from './components/Game';
import LoadingSpinner from './components/Spinner';
import { GameInstructions, LatestUpdates } from './components/Modal';
import StartButton from './components/StartButton';
import InstructionsButton from './components/InstructionsButton';
import { handleButtonClick } from './utils/soundManager';
import { HiOutlineNewspaper } from 'react-icons/hi2';
import { LiaGithub } from 'react-icons/lia';
import { useGameHandlers } from './utils/gameHandlers';

// Main app component
export default function App() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showLatestUpdates, setShowLatestUpdates] = useState(false);

  const {
    startGame,
    handleRestart,
    handleExit,
    openInstructions,
    closeInstructions,
    openLatestUpdates,
    closeLatestUpdates,
  } = useGameHandlers({
    setIsLoading,
    setIsGameActive,
    setShowInstructions,
    setShowLatestUpdates,
  });

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      {!isLoading && !isGameActive && (
        <div className="d-flex flex-column align-items-center">
          <StartButton onClick={startGame} />
          <InstructionsButton onClick={openInstructions} />
          <div className={styles.smallButtonsDiv}>
            <Button
              onClick={handleButtonClick(openLatestUpdates)}
              className={`${styles.btnUpdates} me-4`}
            >
              <HiOutlineNewspaper className={styles.btnUpdatesIcon} />
            </Button>
            <Button
              onClick={() =>
                window.open('https://github.com/j0hanz/pick-and-pair', '_blank')
              }
              className={`${styles.btnUpdates}`}
            >
              <LiaGithub className={styles.btnUpdatesIcon} />
            </Button>
          </div>
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
      <LatestUpdates show={showLatestUpdates} onClose={closeLatestUpdates} />
    </>
  );
}
