import { matchCheck } from './matchCheck';
import { playSound } from './soundManager';

// Function to check if a card can be clicked
export function canClickCard(index, cards, selectedCardIndex, previousIndex) {
  return (
    index !== previousIndex.current &&
    index !== selectedCardIndex &&
    cards[index] &&
    cards[index].status !== 'active matched'
  );
}

// Function to handle the logic when a card is clicked
export function handleCardClick(
  index,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  previousIndex,
  handleMatchUpdate,
  handleMismatchUpdate
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
  previousIndex.current = null;
}
