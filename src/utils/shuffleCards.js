export const shuffleCards = (cards) => {
  return cards.sort(() => Math.random() - 0.5);
};
