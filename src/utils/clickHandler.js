import { matchCheck } from './matchCheck';

export const clickHandler = (
  index,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  previousIndex,
  handleMatchUpdate
) => {
  if (
    index === previousIndex.current ||
    index === selectedCardIndex ||
    !cards[index] ||
    cards[index].status === 'active matched'
  )
    return;

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
    handleMatchUpdate
  );

  previousIndex.current = null;
};
