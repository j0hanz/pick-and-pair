import { handleRightAnswer, handleWrongAnswer } from './feedbackHandler';

const updateCardStatus = (
  cards,
  setCards,
  currentCardIndex,
  selectedCardIndex,
  isMatch,
  onMatch,
  onMismatch
) => {
  setTimeout(() => {
    const currentCard = cards[currentCardIndex];
    const selectedCard = cards[selectedCardIndex];

    if (!currentCard || !selectedCard) {
      console.error('Card data missing after timeout');
      return;
    }

    if (!isMatch) {
      currentCard.status = selectedCard.status = '';
      setCards([...cards]);
      handleWrongAnswer(onMismatch);
    } else {
      handleRightAnswer(onMatch);
    }
  }, 500);
};

export const matchCheck = (
  currentCardIndex,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  onMatch,
  onMismatch
) => {
  if (
    currentCardIndex === selectedCardIndex ||
    !cards[currentCardIndex] ||
    !cards[selectedCardIndex]
  ) {
    console.error('Invalid card indices or card data');
    return false;
  }

  const updatedCards = [...cards];
  const currentCard = updatedCards[currentCardIndex];
  const selectedCard = updatedCards[selectedCardIndex];

  const isMatch = currentCard.pairId === selectedCard.pairId;

  currentCard.status = selectedCard.status = isMatch
    ? 'active matched'
    : 'active';

  setCards(updatedCards);
  updateCardStatus(
    updatedCards,
    setCards,
    currentCardIndex,
    selectedCardIndex,
    isMatch,
    onMatch,
    onMismatch
  );
  setSelectedCardIndex(null);

  return isMatch;
};
