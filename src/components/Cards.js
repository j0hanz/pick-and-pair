import React, { useState, useRef, useTransition, useEffect } from 'react';
import Card from './Card';
import { initialCards } from '../data/cardData';
import styles from '../App.module.css';
// import Timer from './Timer'; // Removed Timer import
import Score from './Score';
import { shuffleCards } from '../utils/shuffleCards';
import { useGameLogic } from '../hooks/useGameLogic';
import { Row, Col, Button } from 'react-bootstrap';
import Modal from './Modal';

export default function Cards({ onRestart }) {
  const [cards, setCards] = useState(() => shuffleCards(initialCards));
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const previousIndex = useRef(null);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [, startTransition] = useTransition();
  // const [timeLeft, setTimeLeft] = useState(60); // Removed timeLeft state
  const [isInitialFlip, setIsInitialFlip] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const { resetGameWithTimer, handleCardSelection } = useGameLogic({
    cards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex,
    matchedPairs,
    setMatchedPairs,
    previousIndex,
    resetTrigger,
    setResetTrigger,
    startTransition,
  });

  useEffect(() => {
    if (matchedPairs === initialCards.length / 2) {
      setModalMessage('Congratulations! You matched all cards!');
      setShowModal(true);
    }
  }, [matchedPairs]);

  // Removed useEffect for timeLeft and isGameOver

  useEffect(() => {
    // Flip all cards initially
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, status: 'active' }))
    );

    // Flip back after 2 seconds
    const timer = setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, status: '' }))
      );
      setIsInitialFlip(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.stats} mb-3`}>
        {/* Removed Timer component */}
        <Button onClick={resetGameWithTimer} className={styles.button}>
          Reset Game
        </Button>
        <Score matchedPairs={matchedPairs} />
      </div>
      <Row className={styles.row}>
        {cards.map((card, index) => (
          <Col xs={2} key={index}>
            <Card
              card={card}
              index={index}
              clickHandler={isInitialFlip ? undefined : handleCardSelection}
            />
          </Col>
        ))}
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
