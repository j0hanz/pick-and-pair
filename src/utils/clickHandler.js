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

  const updatedCards = [...cards];

  if (selectedCardIndex === null) {
    previousIndex.current = index;
    updatedCards[index] = { ...cards[index], status: 'active' };
    setCards(updatedCards);
    setSelectedCardIndex(index);
    return;
  }

  matchCheck(
    index,
    updatedCards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex,
    handleMatchUpdate
  );

  previousIndex.current = null;
};
