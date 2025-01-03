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
  setIsGameOver,
  setTimeLeft,
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

  const resetGameWithTimer = useCallback(() => {
    setIsGameOver(false);
    setTimeLeft(120);

    // Shuffle cards before flipping
    setCards(
      shuffleCards(initialCards.map((card) => ({ ...card, status: 'active' })))
    );

    // Flip back after 2 seconds without reshuffling
    const timer = setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, status: '' }))
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsGameOver, setTimeLeft, setCards]);

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
      setIsGameOver(true);
    }
  }, [matchedPairs, setIsGameOver]);

  useEffect(() => {
    if (resetTrigger) {
      resetGame();
    }
  }, [resetTrigger, resetGame]);

  return { resetGame, resetGameWithTimer, handleCardSelection };
}
