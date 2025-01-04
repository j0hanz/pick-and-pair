import React, { useState, useRef, useTransition, useEffect } from 'react';
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

// Flip all cards face up initially, then face down after a delay
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

// Show modal if all pairs are matched
function useCheckAllMatched(
  matchedPairs,
  totalPairs,
  setModalMessage,
  setShowModal
) {
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setModalMessage('Congratulations! You matched all cards!');
      setShowModal(true);
    }
  }, [matchedPairs, totalPairs, setModalMessage, setShowModal]);
}

export default function GameLogic({ onRestart, difficulty }) {
  const [cards, setCards] = useState(() =>
    shuffleCards(generateCards(difficulty))
  );
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Reference to keep track of the previously clicked card’s index
  const previousIndex = useRef(null);

  // useTransition returns a state setter we can use for transitions
  const [, startTransition] = useTransition();

  const [isInitialFlip, setIsInitialFlip] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Determine total pairs based on the current difficulty
  const totalPairs = getTotalPairs(difficulty);

  // Use our custom game logic hook for card selection handling
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

  // Flip all cards face up briefly, then face down
  useInitialFlip(setCards, setIsInitialFlip);

  // Show modal once all pairs are matched
  useCheckAllMatched(matchedPairs, totalPairs, setModalMessage, setShowModal);

  // Handle game over when time runs out
  useEffect(() => {
    if (isGameOver) {
      setModalMessage('Game Over! Better luck next time.');
      setShowModal(true);
    }
  }, [isGameOver]);

  return (
    <div className={styles.container}>
      <div className={`${styles.stats} mb-3`}>
        <Score matchedPairs={matchedPairs} />
        <Timer initialTime={60} onTimeUp={() => handleTimeUp(setIsGameOver)} />
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
        onRestart={onRestart}
      >
        {modalMessage}
      </Modal>
    </div>
  );
}
