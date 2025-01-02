import React, { useState, useRef, useCallback, useTransition } from 'react';
import Card from './Card';
import img01 from '../assets/images/01.jpg';
import img02 from '../assets/images/02.jpg';
import img03 from '../assets/images/03.png';
import img04 from '../assets/images/04.jpg';
import img05 from '../assets/images/05.jpg';
import img06 from '../assets/images/06.jpg';
import img07 from '../assets/images/07.jpg';
import img08 from '../assets/images/08.jpg';
import { clickHandler } from '../utils/clickHandler';
import styles from '../App.module.css';
import Timer from './Timer';
import Score from './Score';
import { shuffleCards } from '../utils/shuffleCards';
import { useSound } from '../hooks/useSound';

const initialCards = [
  { id: 0, name: 'Bryan Cranston', img: img01 },
  { id: 1, name: 'Bryan Cranston', img: img01 },
  { id: 2, name: 'Aaron Paul', img: img02 },
  { id: 3, name: 'Aaron Paul', img: img02 },
  { id: 4, name: 'Anna Gunn', img: img03 },
  { id: 5, name: 'Anna Gunn', img: img03 },
  { id: 6, name: 'Dean Norris', img: img04 },
  { id: 7, name: 'Dean Norris', img: img04 },
  { id: 8, name: 'Betsy Brandt', img: img05 },
  { id: 9, name: 'Betsy Brandt', img: img05 },
  { id: 10, name: 'RJ Mitte', img: img06 },
  { id: 11, name: 'RJ Mitte', img: img06 },
  { id: 12, name: 'Bob Odenkirk', img: img07 },
  { id: 13, name: 'Bob Odenkirk', img: img07 },
  { id: 14, name: 'Jonathan Banks', img: img08 },
  { id: 15, name: 'Jonathan Banks', img: img08 },
].map((card) => ({ ...card, status: '' }));

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
