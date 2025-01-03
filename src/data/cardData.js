import img01 from '../assets/images/01.jpg';
import img02 from '../assets/images/02.jpg';
import img03 from '../assets/images/03.png';
import img04 from '../assets/images/04.jpg';
import img05 from '../assets/images/05.jpg';
import img06 from '../assets/images/06.jpg';
import img07 from '../assets/images/07.jpg';
import img08 from '../assets/images/08.jpg';

export const initialCards = [
  { id: 0, pairId: 0, name: 'Bryan Cranston', img: img01 },
  { id: 1, pairId: 0, name: 'Bryan Cranston', img: img01 },
  { id: 2, pairId: 1, name: 'Aaron Paul', img: img02 },
  { id: 3, pairId: 1, name: 'Aaron Paul', img: img02 },
  { id: 4, pairId: 2, name: 'Anna Gunn', img: img03 },
  { id: 5, pairId: 2, name: 'Anna Gunn', img: img03 },
  { id: 6, pairId: 3, name: 'Dean Norris', img: img04 },
  { id: 7, pairId: 3, name: 'Dean Norris', img: img04 },
  { id: 8, pairId: 4, name: 'Betsy Brandt', img: img05 },
  { id: 9, pairId: 4, name: 'Betsy Brandt', img: img05 },
  { id: 10, pairId: 5, name: 'RJ Mitte', img: img06 },
  { id: 11, pairId: 5, name: 'RJ Mitte', img: img06 },
  { id: 12, pairId: 6, name: 'Bob Odenkirk', img: img07 },
  { id: 13, pairId: 6, name: 'Bob Odenkirk', img: img07 },
  { id: 14, pairId: 7, name: 'Jonathan Banks', img: img08 },
  { id: 15, pairId: 7, name: 'Jonathan Banks', img: img08 },
].map((card) => ({ ...card, status: '' }));

export const generateCards = (difficulty = 'medium') => {
  const difficulties = {
    easy: 6,
    medium: 8,
    hard: 12,
  };

  const totalPairs = difficulties[difficulty];
  if (!totalPairs) return [];

  const cards = Array.from({ length: totalPairs }, (_, i) => ({
    id: i * 2,
    pairId: i,
    img: `/images/card${i + 1}.jpg`,
    name: `Card ${i + 1}`,
    status: '',
  }));

  return [...cards, ...cards.map((card) => ({ ...card, id: card.id + 1 }))];
};
