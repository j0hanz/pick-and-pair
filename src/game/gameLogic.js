import React, { useState, useRef, useEffect } from 'react';
import { generateCards } from '../data/cardData';
import { shuffleCards } from '../utils/shuffleCards';
import { useGameLogic } from '../hooks/useGameLogic';
import Cards from '../components/Cards';
import Score from '../components/Score';
import Modal from '../components/Modal';
import Timer from '../components/Timer';
import styles from '../App.module.css';
import { Row } from 'react-bootstrap';
import { getTotalPairs } from './difficultyLogic';
import { gameOverMessage, victoryMessage } from '../data/messages';

export default function GameLogic({ onRestart, onExit, difficulty }) {
  // Initialize state variables
  const [cards, setCards] = useState(() =>
    shuffleCards(generateCards(difficulty))
  );
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const previousIndex = useRef(null);
  const [isInitialFlip, setIsInitialFlip] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const totalPairs = getTotalPairs(difficulty);

  // Custom hook for game logic
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

  // Initial card flip effect
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

  // Check for victory condition
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setModalMessage(victoryMessage);
      setShowModal(true);
      setIsGameOver(true);
    }
  }, [matchedPairs, totalPairs, setModalMessage, setShowModal, setIsGameOver]);

  // Check for game over condition
  useEffect(() => {
    if (isGameOver && matchedPairs !== totalPairs) {
      setModalMessage(gameOverMessage);
      setShowModal(true);
    }
  }, [isGameOver, matchedPairs, totalPairs, setModalMessage, setShowModal]);

  // Handle game restart
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
          onExit={onExit}
          backdrop="static"
        >
          {modalMessage}
        </Modal>
      ) : (
        <>
          <div className={`${styles.stats} mb-3`}>
            <Score matchedPairs={matchedPairs} />
            <Timer initialTime={60} onTimeUp={() => setIsGameOver(true)} />
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
            onExit={onExit}
            backdrop="static"
          >
            {modalMessage}
          </Modal>
        </>
      )}
    </div>
  );
}
