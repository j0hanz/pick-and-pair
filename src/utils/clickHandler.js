import { matchCheck } from './matchCheck';

// Checks if a card can be clicked
function canClickCard(index, cards, selectedCardIndex, previousIndex) {
  const canClick =
    index !== previousIndex.current &&
    index !== selectedCardIndex &&
    cards[index] &&
    cards[index].status !== 'active matched';
  console.log(`Can click card at index ${index}:`, canClick);
  return canClick;
}

// Handles card click
export function clickHandler(
  index,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  previousIndex,
  handleMatchUpdate
) {
  console.log('Handling click for card at index:', index);
  if (!canClickCard(index, cards, selectedCardIndex, previousIndex)) {
    console.log('Cannot click card at index:', index);
    return;
  }

  const newCards = [...cards];
  if (selectedCardIndex === null) {
    console.log('First card selected at index:', index);
    previousIndex.current = index;
    newCards[index].status = 'active';
    setCards(newCards);
    setSelectedCardIndex(index);
    return;
  }
  console.log('Second card selected at index:', index);
  matchCheck(
    index,
    newCards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex,
    handleMatchUpdate
  );
  previousIndex.current = null;
}
