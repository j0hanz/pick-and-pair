import handleRightAnswer from './handleRightAnswer';
import handleWrongAnswer from './handleWrongAnswer';

export const matchCheck = (
  currentCardIndex,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  onMatch,
  onMismatch
) => {
  // Ensure valid indices
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

  // Debug logs for card data
  console.log('Current Card:', currentCard);
  console.log('Selected Card:', selectedCard);

  // Check for a match
  const isMatch = currentCard.pairId === selectedCard.pairId;

  if (isMatch) {
    // Update the card status to matched
    currentCard.status = selectedCard.status = 'active matched';
  } else {
    // Temporarily mark the cards as active
    currentCard.status = selectedCard.status = 'active';
  }

  // Update cards in state
  setCards(updatedCards);

  setTimeout(() => {
    if (!updatedCards[currentCardIndex] || !updatedCards[selectedCardIndex]) {
      console.error('Card data missing after timeout');
      return;
    }

    if (!isMatch) {
      // Reset the card status for mismatches
      currentCard.status = selectedCard.status = '';
      setCards([...updatedCards]);
      handleWrongAnswer(onMismatch);
    } else {
      handleRightAnswer(onMatch);
    }
  }, 500);

  // Reset the selected card index
  setSelectedCardIndex(null);

  // Debug log for match status
  console.log('Match Status:', isMatch ? 'Matched' : 'Not Matched');

  return isMatch;
};
