import React, { useState, useRef, useEffect } from 'react';
import { generateCards } from '../data/cardData';
import { shuffleCards } from '../utils/shuffleCards';
import { useGameLogic } from '../hooks/useGameLogic';
import Cards from '../components/Cards';
import Score from '../components/Score';
import Modal from '../components/Modal';
import Timer from '../components/Timer';
import { handleTimeUp } from './timerLogic';
import styles from '../App.module.css';
import { Row } from 'react-bootstrap';
import { getTotalPairs } from './difficultyLogic';
import victoryMessage from '../data/Victory';
import gameOverMessage from '../data/GameOver';

// Flip all cards face-up initially, then face-down after 2 seconds
function useInitialFlip(setCards, setIsInitialFlip) {
  useEffect(() => {
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, status: 'active' }))
    );
    const initialFlipTimer = setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, status: '' }))
      );
      setIsInitialFlip(false);
    }, 2000);
    return () => clearTimeout(initialFlipTimer);
  }, [setCards, setIsInitialFlip]);
}

// Check if all pairs are matched, show victory modal if true
function useCheckAllMatched(
  matchedPairs,
  totalPairs,
  setModalMessage,
  setShowModal,
  setIsGameOver
) {
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setModalMessage(victoryMessage);
      setShowModal(true);
      setIsGameOver(true);
    }
  }, [matchedPairs, totalPairs, setModalMessage, setShowModal, setIsGameOver]);
}

// Show "game over" modal if time runs out before all pairs are matched
function useHandleGameOver(
  isGameOver,
  matchedPairs,
  totalPairs,
  setModalMessage,
  setShowModal
) {
  useEffect(() => {
    if (isGameOver && matchedPairs !== totalPairs) {
      setModalMessage(gameOverMessage);
      setShowModal(true);
    }
  }, [isGameOver, matchedPairs, totalPairs, setModalMessage, setShowModal]);
}

export default function GameLogic({ onRestart, difficulty }) {
  const [cards, setCards] = useState(() =>
    shuffleCards(generateCards(difficulty))
  );
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Keep track of the previously clicked card’s index
  const previousIndex = useRef(null);
  const [isInitialFlip, setIsInitialFlip] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Calculate how many pairs the current difficulty setting should have
  const totalPairs = getTotalPairs(difficulty);

  // Use custom hook for card selection logic
  const { handleCardSelection } = useGameLogic({
    cards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex,
    matchedPairs,
    setMatchedPairs,
    previousIndex,
    setIsGameOver,
    difficulty,
  });

  // Custom hooks for side effects
  useInitialFlip(setCards, setIsInitialFlip);
  useCheckAllMatched(
    matchedPairs,
    totalPairs,
    setModalMessage,
    setShowModal,
    setIsGameOver
  );
  useHandleGameOver(
    isGameOver,
    matchedPairs,
    totalPairs,
    setModalMessage,
    setShowModal
  );

  const handleRestart = () => {
    setIsGameOver(false);
    setShowModal(false);
    setModalMessage('');
    onRestart();
  };

  return (
    <div className={styles.container}>
      {isGameOver ? (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          onRestart={handleRestart}
        >
          {modalMessage}
        </Modal>
      ) : (
        <>
          <div className={`${styles.stats} mb-3`}>
            <Score matchedPairs={matchedPairs} />
            <Timer
              initialTime={60}
              onTimeUp={() => handleTimeUp(setIsGameOver)}
            />
          </div>
          <Row className={styles.row}>
            <Cards
              cards={cards}
              isInitialFlip={isInitialFlip}
              handleCardSelection={handleCardSelection}
            />
          </Row>
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            onRestart={handleRestart}
          >
            {modalMessage}
          </Modal>
        </>
      )}
    </div>
  );
}
