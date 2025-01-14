import { matchCheck } from './matchCheck';
import { playSound } from './soundManager';

// Check if a card can be clicked
export function canClickCard(index, cards, selectedCardIndex, previousIndex) {
  return (
    index !== previousIndex.current &&
    index !== selectedCardIndex &&
    cards[index] &&
    cards[index].status !== 'active matched'
  );
}

// Handle the logic when a card is clicked
export function handleCardClick(
  index,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  previousIndex,
  handleMatchUpdate,
  handleMismatchUpdate,
  setFeedback,
  setMoves
) {
  if (!canClickCard(index, cards, selectedCardIndex, previousIndex)) {
    return;
  }

  const newCards = [...cards];

  if (selectedCardIndex === null) {
    // First card selected
    previousIndex.current = index;
    newCards[index].status = 'active';
    setCards(newCards);
    setSelectedCardIndex(index);
    playSound('click');
    return;
  }

  // Check match
  const isMatch = matchCheck(
    index,
    newCards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex,
    handleMatchUpdate,
    handleMismatchUpdate
  );

  playSound(isMatch ? 'correct' : 'wrong');
  setFeedback(isMatch ? 'success' : 'error');
  previousIndex.current = null;
  setMoves((prev) => prev + 1);
}
