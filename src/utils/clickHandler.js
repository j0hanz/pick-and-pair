import { matchCheck } from './matchCheck';

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
    previousIndex.current = index;
    newCards[index].status = 'active';
    setCards(newCards);
    setSelectedCardIndex(index);
    return;
  }
  matchCheck(
    index,
    newCards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex,
    handleMatchUpdate,
    handleMismatchUpdate
  );
  previousIndex.current = null;
}
