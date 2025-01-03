import { useCallback, useEffect } from 'react';
import { clickHandler } from '../utils/clickHandler';
import { shuffleCards } from '../utils/shuffleCards';
import { initialCards } from '../data/cardData';

export function useGameLogic({
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  matchedPairs,
  setMatchedPairs,
  previousIndex,
  resetTrigger,
  setResetTrigger,
  startTransition,
}) {
  const resetGame = useCallback(() => {
    startTransition(() => {
      setCards(
        shuffleCards(initialCards.map((card) => ({ ...card, status: '' })))
      );
      setSelectedCardIndex(null);
      setMatchedPairs(0);
      previousIndex.current = null;
      setResetTrigger((prev) => !prev);
    });
  }, [
    setCards,
    setSelectedCardIndex,
    setMatchedPairs,
    previousIndex,
    setResetTrigger,
    startTransition,
  ]);

  const handleCardSelection = useCallback(
    (index) => {
      clickHandler(
        index,
        cards,
        setCards,
        selectedCardIndex,
        setSelectedCardIndex,
        previousIndex,
        () => {
          setMatchedPairs((prev) => prev + 1);
        }
      );
    },
    [
      cards,
      selectedCardIndex,
      setCards,
      setSelectedCardIndex,
      previousIndex,
      setMatchedPairs,
    ]
  );

  useEffect(() => {
    if (matchedPairs === initialCards.length / 2) {
      alert('You have matched all pairs!');
    }
  }, [matchedPairs]);

  useEffect(() => {
    if (resetTrigger) {
      resetGame();
    }
  }, [resetTrigger, resetGame]);

  return { resetGame, handleCardSelection };
}
