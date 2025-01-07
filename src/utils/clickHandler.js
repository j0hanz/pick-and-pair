import { matchCheck } from './matchCheck';
import { playSound } from './soundManager';

// Handles card click
export function clickHandler(
  index,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  previousIndex,
  handleMatchUpdate,
  handleMismatchUpdate
) {
  // Checks if a card can be clicked
  function canClickCard(index, cards, selectedCardIndex, previousIndex) {
    return (
      index !== previousIndex.current &&
      index !== selectedCardIndex &&
      cards[index] &&
      cards[index].status !== 'active matched'
    );
  }

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

  if (!isMatch) {
    handleMismatchUpdate();
  }

  playSound(isMatch ? 'correct' : 'wrong');
  previousIndex.current = null;
}
