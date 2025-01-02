export const matchCheck = (
  currentCardIndex,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  handleMatchUpdate
) => {
  const updatedCards = [...cards];
  const [currentCard, selectedCard] = [
    updatedCards[currentCardIndex],
    updatedCards[selectedCardIndex],
  ];

  const isMatch = currentCard.id === selectedCard.id;
  const status = isMatch ? 'active matched' : 'active';

  currentCard.status = selectedCard.status = status;
  setCards(updatedCards);

  setTimeout(() => {
    if (!isMatch) {
      currentCard.status = selectedCard.status = '';
      setCards(updatedCards);
    }
    handleMatchUpdate(null); // Reset feedback
  }, 1000);

  handleMatchUpdate(isMatch ? 'right' : 'wrong');
  setSelectedCardIndex(null);
  return isMatch;
};
