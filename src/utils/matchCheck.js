import { handleRightAnswer, handleWrongAnswer } from './feedbackHandler';

/* Helper function to apply a given status to all specified card indices.*/
function applyCardStatus(cards, indices, status) {
  indices.forEach((index) => {
    if (cards[index]) {
      cards[index].status = status;
    }
  });
}

/* Updates the cards after a match or mismatch (with a brief delay).*/
function updateCardStatus({
  cards,
  setCards,
  currentCardIndex,
  selectedCardIndex,
  isMatch,
  onMatch,
  onMismatch,
}) {
  setTimeout(() => {
    const currentCard = cards[currentCardIndex];
    const selectedCard = cards[selectedCardIndex];

    if (!currentCard || !selectedCard) {
      console.error('Card data missing after timeout');
      return;
    }

    if (isMatch) {
      handleRightAnswer(onMatch);
    } else {
      applyCardStatus(cards, [currentCardIndex, selectedCardIndex], '');
      setCards([...cards]);
      handleWrongAnswer(onMismatch);
    }
  }, 500);
}

/* Checks if two cards match, updates their status,and triggers feedback via updateCardStatus. */
export function matchCheck(
  currentCardIndex,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  onMatch,
  onMismatch
) {
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
  applyCardStatus(
    updatedCards,
    [currentCardIndex, selectedCardIndex],
    isMatch ? 'active matched' : 'active'
  );
  setCards(updatedCards);
  updateCardStatus({
    cards: updatedCards,
    setCards,
    currentCardIndex,
    selectedCardIndex,
    isMatch,
    onMatch,
    onMismatch,
  });
  setSelectedCardIndex(null);

  return isMatch;
}
