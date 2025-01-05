import { handleRightAnswer, handleWrongAnswer } from './feedbackHandler';
import { playSound } from './soundManager';

function updateCardStatus({
  cards,
  setCards,
  currentCardIndex,
  selectedCardIndex,
  isMatch,
  onMatch,
  onMismatch,
}) {
  // Function to apply status to specified cards
  function applyCardStatus(cards, indices, status) {
    indices.forEach((index) => {
      if (cards[index]) {
        cards[index].status = status;
      }
    });
  }

  setTimeout(() => {
    const currentCard = cards[currentCardIndex];
    const selectedCard = cards[selectedCardIndex];

    if (!currentCard || !selectedCard) {
      console.error('Card data missing after timeout');
      return;
    }

    if (isMatch) {
      handleRightAnswer(onMatch);
      playSound('correct');
    } else {
      applyCardStatus(cards, [currentCardIndex, selectedCardIndex], '');
      setCards([...cards]);
      handleWrongAnswer(onMismatch);
      playSound('wrong');
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
  // Function to apply status to specified cards
  function applyCardStatus(cards, indices, status) {
    indices.forEach((index) => {
      if (cards[index]) {
        cards[index].status = status;
      }
    });
  }

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
