import { matchCheck } from './matchCheck';

export const clickHandler = (
  index,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  previousIndex
) => {
  if (index === previousIndex.current) {
    alert('card currently selected');
    return;
  }

  const card = cards[index];
  if (card.status === 'active matched') {
    alert('already matched');
    return;
  }

  if (selectedCardIndex === null) {
    previousIndex.current = index;
    const updatedCards = [...cards];
    updatedCards[index].status = 'active';
    setCards(updatedCards);
    setSelectedCardIndex(index);
  } else {
    matchCheck(index, cards, setCards, selectedCardIndex, setSelectedCardIndex);
    previousIndex.current = null;
  }
};
