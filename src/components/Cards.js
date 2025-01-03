import React, { useState, useRef, useTransition, useEffect } from 'react';
import Card from './Card';
import { initialCards } from '../data/cardData';
import styles from '../App.module.css';
import Timer from './Timer';
import Score from './Score';
import { shuffleCards } from '../utils/shuffleCards';
import { useGameLogic } from '../hooks/useGameLogic';

export default function Cards() {
  const [cards, setCards] = useState(() => shuffleCards(initialCards));
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const previousIndex = useRef(null);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [, startTransition] = useTransition();
  const [timeLeft, setTimeLeft] = useState(120);
  const [isGameOver, setIsGameOver] = useState(false);

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
        <button onClick={resetGameWithTimer} className={styles.button}>
          Reset Game
        </button>
        <Score matchedPairs={matchedPairs} />
      </div>
      <div className={styles.row}>
        {cards.map((card, index) => (
          <div className="col-6 col-md-4 col-lg-3" key={index}>
            <Card
              card={card}
              index={index}
              clickHandler={handleCardSelection}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
