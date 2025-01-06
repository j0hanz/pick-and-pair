import img01 from '../assets/img/01.gif';
import img02 from '../assets/img/02.gif';
import img03 from '../assets/img/03.gif';
import img04 from '../assets/img/04.gif';
import img05 from '../assets/img/05.gif';
import img06 from '../assets/img/06.gif';
import img07 from '../assets/img/07.gif';
import img08 from '../assets/img/08.gif';
import img09 from '../assets/img/09.gif';
import { getTotalPairs } from '../game/DifficultyLogic';

// List of all images
const imageAssets = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
];

// Create pairs of cards
function createPairedCards(defs) {
  return defs.flatMap((def, index) => [
    { ...def, id: index * 2 },
    { ...def, id: index * 2 + 1 },
  ]);
}

// Default set of 18 cards (9 pairs)
export const initialCards = createPairedCards([
  { pairId: 0, name: 'Bacon', img: img01, status: '' },
  { pairId: 1, name: 'Popcorn', img: img02, status: '' },
  { pairId: 2, name: 'Dragon', img: img03, status: '' },
  { pairId: 3, name: 'Toy', img: img04, status: '' },
  { pairId: 4, name: 'Tea', img: img05, status: '' },
  { pairId: 5, name: 'Monkey', img: img06, status: '' },
  { pairId: 6, name: 'Coffee', img: img07, status: '' },
  { pairId: 7, name: 'Cake', img: img08, status: '' },
  { pairId: 8, name: 'Candy', img: img09, status: '' },
]);

// Generate cards based on difficulty
export function generateCards(difficulty) {
  const totalPairs = getTotalPairs(difficulty);
  if (!totalPairs) return [];

  // Create base cards
  const baseCards = Array.from({ length: totalPairs }, (_, i) => ({
    pairId: i,
    name: `Card ${i + 1}`,
    img: imageAssets[i],
    status: '',
  }));

  // Duplicate cards to form pairs
  const pairedCards = baseCards.flatMap((card, idx) => [
    { ...card, id: idx * 2 },
    { ...card, id: idx * 2 + 1 },
  ]);

  return pairedCards;
}
