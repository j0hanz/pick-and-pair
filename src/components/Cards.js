import React, { useState, useRef, useTransition, useEffect } from 'react';
import Card from './Card';
import { initialCards } from '../data/cardData';
import styles from '../App.module.css';
import Timer from './Timer';
import Score from './Score';
import { shuffleCards } from '../utils/shuffleCards';
import { useGameLogic } from '../hooks/useGameLogic';
import { Row, Col, Button } from 'react-bootstrap';

export default function Cards() {
  const [cards, setCards] = useState(() => shuffleCards(initialCards));
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const previousIndex = useRef(null);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [, startTransition] = useTransition();
  const [timeLeft, setTimeLeft] = useState(120);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isInitialFlip, setIsInitialFlip] = useState(true);

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
    setIsGameOver,
    setTimeLeft,
  });

  useEffect(() => {
    if (matchedPairs === initialCards.length / 2) {
      setIsGameOver(true);
    }
  }, [matchedPairs]);

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
      <div className={`${styles.stats} my-3`}>
        <Timer
          resetTrigger={resetTrigger}
          isGameComplete={isGameOver}
          timeLimit={timeLeft}
          setIsGameOver={setIsGameOver}
          setTimeLeft={setTimeLeft}
        />
        <Button onClick={resetGameWithTimer} className={styles.button}>
          Reset Game
        </Button>
        <Score matchedPairs={matchedPairs} />
      </div>
      <Row className={styles.row}>
        {cards.map((card, index) => (
          <Col xs={6} md={4} lg={3} key={index}>
            <Card
              card={card}
              index={index}
              clickHandler={isInitialFlip ? null : handleCardSelection}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
