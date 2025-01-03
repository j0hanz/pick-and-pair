import React, { useState, useRef, useCallback, useTransition } from 'react';
import Card from './Card';
import { initialCards } from '../utils/cardData'; // Import initialCards from cardData.js
import { clickHandler } from '../utils/clickHandler';
import styles from '../App.module.css';
import Timer from './Timer';
import Score from './Score';
import { shuffleCards } from '../utils/shuffleCards';
import { useSound } from '../hooks/useSound';

export default function Cards() {
  const [cards, setCards] = useState(() => shuffleCards(initialCards));
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const previousIndex = useRef(null);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [, startTransition] = useTransition();

  const playCorrectSound = useSound();
  const playWrongSound = useSound();

  const resetGame = useCallback(() => {
    startTransition(() => {
      setCards(
        shuffleCards(initialCards.map((card) => ({ ...card, status: '' })))
      );
      setSelectedCardIndex(null);
      setMatchedPairs(0);
      previousIndex.current = null;
      setResetTrigger((prev) => !prev);
    });
  }, []);

  const handleCardSelection = useCallback(
    (index) => {
      clickHandler(
        index,
        cards,
        setCards,
        selectedCardIndex,
        setSelectedCardIndex,
        previousIndex,
        () => {
          setMatchedPairs((prev) => prev + 1);
          playCorrectSound();
        },
        playWrongSound
      );
    },
    [cards, selectedCardIndex, playCorrectSound, playWrongSound]
  );

  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <Timer
          resetTrigger={resetTrigger}
          isGameComplete={matchedPairs === initialCards.length / 2}
        />
        <Score matchedPairs={matchedPairs} />
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={resetGame} className={styles.btnPrimary}>
          Reset Game
        </button>
      </div>
      <div className={styles.row}>
        {cards.map((card, index) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
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
