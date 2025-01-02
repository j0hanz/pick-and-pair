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
  const newStatus = isMatch ? 'active matched' : 'active';

  currentCard.status = selectedCard.status = newStatus;
  setCards([...updatedCards]);

  if (!isMatch) {
    handleMatchUpdate('wrong');
    setTimeout(() => {
      currentCard.status = selectedCard.status = '';
      setCards([...updatedCards]);
      handleMatchUpdate(null); // Reset feedback after cards flip back
    }, 1000);
  } else {
    handleMatchUpdate('right');
    setTimeout(() => {
      handleMatchUpdate(null); // Reset feedback after match
    }, 1000);
  }

  setSelectedCardIndex(null);
  return isMatch;
};
