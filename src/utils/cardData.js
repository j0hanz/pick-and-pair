import img01 from '../assets/images/01.jpg';
import img02 from '../assets/images/02.jpg';
import img03 from '../assets/images/03.png';
import img04 from '../assets/images/04.jpg';
import img05 from '../assets/images/05.jpg';
import img06 from '../assets/images/06.jpg';
import img07 from '../assets/images/07.jpg';
import img08 from '../assets/images/08.jpg';

export const initialCards = [
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

export const generateCards = (difficulty = 'medium') => {
  const difficulties = {
    easy: 6,
    medium: 8,
    hard: 12,
  };

  const totalPairs = difficulties[difficulty];
  if (!totalPairs) return [];

  const cards = [];

  for (let i = 1; i <= totalPairs; i++) {
    cards.push(
      {
        id: i,
        img: `/images/card${i}.jpg`,
        name: `Card ${i}`,
        status: '',
      },
      {
        id: i,
        img: `/images/card${i}.jpg`,
        name: `Card ${i}`,
        status: '',
      }
    );
  }

  return cards;
};
