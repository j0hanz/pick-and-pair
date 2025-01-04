import React, { useState, useRef, useTransition, useEffect } from 'react';
import { initialCards } from '../data/cardData';
import { shuffleCards } from '../utils/shuffleCards';
import { useGameLogic } from '../hooks/useGameLogic';
import Cards from '../components/Cards';
import Score from '../components/Score';
import Modal from '../components/Modal';
import styles from '../App.module.css';
import { Row } from 'react-bootstrap';

export default function GameLogic({ onRestart }) {
  const [cards, setCards] = useState(() => shuffleCards(initialCards));
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const previousIndex = useRef(null);
  const [, startTransition] = useTransition();
  const [isInitialFlip, setIsInitialFlip] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const { handleCardSelection } = useGameLogic({
    cards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex,
    matchedPairs,
    setMatchedPairs,
    previousIndex,
    startTransition,
  });

  useEffect(() => {
    if (matchedPairs === initialCards.length / 2) {
      setModalMessage('Congratulations! You matched all cards!');
      setShowModal(true);
    }
  }, [matchedPairs]);

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
