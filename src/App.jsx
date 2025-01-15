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
import { motion } from 'framer-motion';

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

  // Page transition animations
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.7,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 0.7,
    },
  };

  // Page transition settings
  const pageTransition = {
    type: 'spring',
    stiffness: 50,
    damping: 25,
  };

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      {!isLoading && !isGameActive && (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="d-flex flex-column align-items-center"
        >
          <div className={styles.gameTitle}>
            Pick <span className={styles.symbol}>&</span> Pair
          </div>
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
        </motion.div>
      )}
      {isGameActive && (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Game
            onRestart={handleRestart}
            onExit={handleExit}
            startGame={startGame}
          />
        </motion.div>
      )}
      <GameInstructions show={showInstructions} onClose={closeInstructions} />
      <LatestUpdates show={showLatestUpdates} onClose={closeLatestUpdates} />
    </>
  );
}
