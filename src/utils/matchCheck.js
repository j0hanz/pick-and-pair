import handleRightAnswer from './handleRightAnswer';
import handleWrongAnswer from './handleWrongAnswer';

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
    if (!cards[currentCardIndex] || !cards[selectedCardIndex]) {
      console.error('Card data missing after timeout');
      return;
    }

    if (!isMatch) {
      cards[currentCardIndex].status = cards[selectedCardIndex].status = '';
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

  console.log('Current Card:', currentCard);
  console.log('Selected Card:', selectedCard);

  const isMatch = currentCard.pairId === selectedCard.pairId;

  if (isMatch) {
    currentCard.status = selectedCard.status = 'active matched';
  } else {
    currentCard.status = selectedCard.status = 'active';
  }

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

  console.log('Match Status:', isMatch ? 'Matched' : 'Not Matched');

  return isMatch;
};
