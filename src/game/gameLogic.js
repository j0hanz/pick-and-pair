import React, { useState, useRef, useTransition, useEffect } from 'react';
import { generateCards } from '../data/cardData';
import { shuffleCards } from '../utils/shuffleCards';
import { useGameLogic } from '../hooks/useGameLogic';
import Cards from '../components/Cards';
import Score from '../components/Score';
import Modal from '../components/Modal';
import styles from '../App.module.css';
import { Row } from 'react-bootstrap';
import { getTotalPairs } from './difficultyLogic';

export default function GameLogic({ onRestart, difficulty }) {
  const [cards, setCards] = useState(() =>
    shuffleCards(generateCards(difficulty))
  );
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const previousIndex = useRef(null);
  const [, startTransition] = useTransition();
  const [isInitialFlip, setIsInitialFlip] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const totalPairs = getTotalPairs(difficulty);

  const { handleCardSelection } = useGameLogic({
    cards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex,
    matchedPairs,
    setMatchedPairs,
    previousIndex,
    startTransition,
    difficulty,
  });

  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setModalMessage('Congratulations! You matched all cards!');
      setShowModal(true);
    }
  }, [matchedPairs, totalPairs]);

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
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.stats} mb-3`}>
        <Score matchedPairs={matchedPairs} />
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
