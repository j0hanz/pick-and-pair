// Helper to create a seeded random generator
function createSeededRandom(seed) {
  return () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
}

export const shuffleCards = (cards, seed = null) => {
  console.log('Shuffling cards with seed:', seed);
  if (!Array.isArray(cards)) {
    throw new TypeError('Input must be an array');
  }
  if (cards.length === 0) return [];
  const random =
    typeof seed === 'number' ? createSeededRandom(seed) : Math.random;

  const shuffled = [...cards];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    console.log(`Swapping indices ${i} and ${j}`);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  console.log('Shuffled cards:', shuffled);
  return shuffled;
};
