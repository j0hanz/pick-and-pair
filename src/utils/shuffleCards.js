export const shuffleCards = (cards, seed = null) => {
  if (!Array.isArray(cards)) {
    throw new TypeError('Input must be an array');
  }
  if (cards.length === 0) return [];

  const shuffled = [...cards];
  const random = seed
    ? () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
      }
    : Math.random;

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};
