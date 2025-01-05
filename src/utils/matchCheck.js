import { handleRightAnswer, handleWrongAnswer } from './feedbackHandler';

// Function to apply status to specified cards
function applyCardStatus(cards, indices, status) {
  indices.forEach((index) => {
    if (cards[index]) {
      cards[index].status = status;
    }
  });
}

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
    if (isMatch) {
      handleRightAnswer(onMatch);
    } else {
      applyCardStatus(cards, [currentCardIndex, selectedCardIndex], '');
      setCards([...cards]);
      handleWrongAnswer(onMismatch);
    }
  }, 500);
}

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
