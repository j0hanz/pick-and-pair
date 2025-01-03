import handleRightAnswer from './handleRightAnswer';
import handleWrongAnswer from './handleWrongAnswer';

export const matchCheck = (
  currentCardIndex,
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  onMatch,
  onMismatch
) => {
  if (
    currentCardIndex === selectedCardIndex ||
    !cards[currentCardIndex] ||
    !cards[selectedCardIndex]
  )
    return false;

  const updatedCards = [...cards];
  const [currentCard, selectedCard] = [
    updatedCards[currentCardIndex],
    updatedCards[selectedCardIndex],
  ];

  const isMatch =
    currentCard.id === selectedCard.id &&
    currentCard.name === selectedCard.name;
  const status = isMatch ? 'active matched' : 'active';

  currentCard.status = selectedCard.status = status;
  setCards(updatedCards);

  setTimeout(() => {
    if (!updatedCards[currentCardIndex] || !updatedCards[selectedCardIndex])
      return;

    if (!isMatch) {
      currentCard.status = selectedCard.status = '';
      setCards([...updatedCards]);
      handleWrongAnswer(onMismatch);
    } else {
      handleRightAnswer(onMatch);
    }
  }, 500);

  setSelectedCardIndex(null);
  return isMatch;
};
