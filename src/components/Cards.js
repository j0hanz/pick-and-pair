import { useState, useRef } from 'react';
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
  const [cards, setCards] = useState(shuffleCards(initialCards));
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const previousIndex = useRef(null);

  const resetGame = () => {
    setCards(
      shuffleCards(initialCards.map((card) => ({ ...card, status: '' })))
    );
    setSelectedCardIndex(null);
    setMatchedPairs(0);
    previousIndex.current = null;
  };

  const handleMatchUpdate = () => {
    setMatchedPairs((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <Timer resetTrigger={resetGame} />
        <Score matchedPairs={matchedPairs} />
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={resetGame} className="btn btn-primary mb-4">
          Reset Game
        </button>
      </div>
      <div className={styles.row}>
        {cards.map((card, index) => (
          <div className="col-8 col-md-4 col-lg-6 mb-4" key={index}>
            <Card
              card={card}
              index={index}
              clickHandler={(index) =>
                clickHandler(
                  index,
                  cards,
                  setCards,
                  selectedCardIndex,
                  setSelectedCardIndex,
                  previousIndex,
                  handleMatchUpdate
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
