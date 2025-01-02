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
