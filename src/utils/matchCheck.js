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

  const handleMatch = () => {
    currentCard.status = 'active matched';
    selectedCard.status = 'active matched';
  };

  const handleNoMatch = () => {
    currentCard.status = 'active';
    selectedCard.status = 'active';
    setCards(updatedCards);
    setTimeout(() => {
      currentCard.status = '';
      selectedCard.status = '';
      setCards([...updatedCards]);
    }, 1000);
  };

  currentCard.id === selectedCard.id ? handleMatch() : handleNoMatch();
  setSelectedCardIndex(null);
  setCards(updatedCards);
};
