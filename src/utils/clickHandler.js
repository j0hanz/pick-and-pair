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
  if (index === previousIndex.current || index === selectedCardIndex) return;

  const card = cards[index];
  if (!card || card.status === 'active matched') return;

  const updatedCards = [...cards];

  if (selectedCardIndex === null) {
    previousIndex.current = index;
    updatedCards[index] = { ...card, status: 'active' };
    setCards(updatedCards);
    setSelectedCardIndex(index);
    return;
  }

  matchCheck(
    index,
    updatedCards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex
  );

  const isMatch = updatedCards[index].id === updatedCards[selectedCardIndex].id;
  updatedCards[index].status = 'active';

  if (isMatch) {
    updatedCards[index].status = updatedCards[selectedCardIndex].status =
      'active matched';
    handleMatchUpdate('right');
  } else {
    handleMatchUpdate('wrong');
    setTimeout(() => {
      setCards(
        updatedCards.map((c, i) =>
          i === index || i === selectedCardIndex ? { ...c, status: '' } : c
        )
      );
      handleMatchUpdate(null);
    }, 1000);
  }

  setCards(updatedCards);
  setSelectedCardIndex(null);
  previousIndex.current = null;
};
