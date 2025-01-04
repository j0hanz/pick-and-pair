import img01 from '../assets/img/01.webp';
import img02 from '../assets/img/02.webp';
import img03 from '../assets/img/03.webp';
import img04 from '../assets/img/04.webp';
import img05 from '../assets/img/05.webp';
import img06 from '../assets/img/06.webp';
import img07 from '../assets/img/07.webp';
import img08 from '../assets/img/08.webp';
import img09 from '../assets/img/09.webp';
import img10 from '../assets/img/10.webp';

export const initialCards = [
  { id: 0, pairId: 0, name: 'Bacon', img: img01 },
  { id: 1, pairId: 0, name: 'Bacon', img: img01 },
  { id: 2, pairId: 1, name: 'Popcorn', img: img02 },
  { id: 3, pairId: 1, name: 'Popcorn', img: img02 },
  { id: 4, pairId: 2, name: 'Dragon', img: img03 },
  { id: 5, pairId: 2, name: 'Dragon', img: img03 },
  { id: 6, pairId: 3, name: 'Toy', img: img04 },
  { id: 7, pairId: 3, name: 'Toy', img: img04 },
  { id: 8, pairId: 4, name: 'Tea', img: img05 },
  { id: 9, pairId: 4, name: 'Tea', img: img05 },
  { id: 10, pairId: 5, name: 'Monkey', img: img06 },
  { id: 11, pairId: 5, name: 'Monkey', img: img06 },
  { id: 12, pairId: 6, name: 'Coffee', img: img07 },
  { id: 13, pairId: 6, name: 'Coffee', img: img07 },
  { id: 14, pairId: 7, name: 'Cake', img: img08 },
  { id: 15, pairId: 7, name: 'Cake', img: img08 },
  { id: 16, pairId: 8, name: 'Candy', img: img09 },
  { id: 17, pairId: 8, name: 'Candy', img: img09 },
  { id: 18, pairId: 9, name: 'Cookie', img: img10 },
  { id: 19, pairId: 9, name: 'Cookie', img: img10 },
].map((card) => ({ ...card, status: '' }));

export const generateCards = (difficulty) => {
  const totalPairs = difficulty === 'hard' ? 10 : 6;
  const images = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
  ];

  const cards = Array.from({ length: totalPairs }, (_, i) => ({
    id: i * 2,
    pairId: i,
    img: images[i],
    name: `Card ${i + 1}`,
    status: '',
  }));

  return [...cards, ...cards.map((card) => ({ ...card, id: card.id + 1 }))];
};
