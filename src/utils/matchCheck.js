export const matchCheck = (
  currentCardIndex,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex
) => {
  const updatedCards = [...cards];
  const currentCard = updatedCards[currentCardIndex];
  const selectedCard = updatedCards[selectedCardIndex];

  if (currentCard.id === selectedCard.id) {
    currentCard.status = 'active matched';
    selectedCard.status = 'active matched';
  } else {
    currentCard.status = 'active';
    setCards(updatedCards);
    setTimeout(() => {
      currentCard.status = '';
      selectedCard.status = '';
      setCards([...updatedCards]);
    }, 1000);
  }
  setSelectedCardIndex(null);
  setCards(updatedCards);
};
