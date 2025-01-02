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
  if (index === previousIndex.current || index === selectedCardIndex) {
    return;
  }

  const card = cards[index];
  if (!card || card.status === 'active matched') {
    return;
  }

  const updatedCards = [...cards];

  if (selectedCardIndex === null) {
    previousIndex.current = index;
    updatedCards[index] = { ...card, status: 'active' };
    setCards(updatedCards);
    setSelectedCardIndex(index);
    return;
  }

  matchCheck(index, cards, setCards, selectedCardIndex, setSelectedCardIndex);

  const currentCard = updatedCards[index];
  const previousCard = updatedCards[selectedCardIndex];
  const isMatch = currentCard.id === previousCard.id;

  updatedCards[index] = { ...currentCard, status: 'active' };

  if (isMatch) {
    updatedCards[index].status = 'active matched';
    updatedCards[selectedCardIndex].status = 'active matched';
    handleMatchUpdate('right');
    setTimeout(() => handleMatchUpdate(null), 1500);
  } else {
    handleMatchUpdate('wrong');
    setTimeout(() => {
      setCards(
        cards.map((c, i) =>
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
