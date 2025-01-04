import { useCallback, useEffect } from 'react';
import { clickHandler } from '../utils/clickHandler';
import { shuffleCards } from '../utils/shuffleCards';
import { initialCards } from '../data/cardData';

// Returns shuffled cards with a status
function getShuffledCardsWithStatus(status) {
  return shuffleCards(initialCards.map((card) => ({ ...card, status })));
}

// Updates card status
function flipCardsStatus(cards, status) {
  return cards.map((card) => ({ ...card, status }));
}

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
  const totalPairs = initialCards.length / 2;

  // Resets the game
  const resetGame = useCallback(() => {
    console.log('Resetting game');
    startTransition(() => {
      setCards(getShuffledCardsWithStatus(''));
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

  // Resets the game with a timer
  const resetGameWithTimer = useCallback(() => {
    console.log('Resetting game with timer');
    setIsGameOver(false);
    setTimeLeft(60);
    setCards(getShuffledCardsWithStatus('active'));
    const timer = setTimeout(() => {
      console.log('Flipping cards status after timer');
      setCards((prevCards) => flipCardsStatus(prevCards, ''));
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsGameOver, setTimeLeft, setCards]);

  // Handles card selection
  const handleCardSelection = useCallback(
    (index) => {
      console.log('Handling card selection at index:', index);
      clickHandler(
        index,
        cards,
        setCards,
        selectedCardIndex,
        setSelectedCardIndex,
        previousIndex,
        () => setMatchedPairs((prev) => prev + 1)
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

  // Checks if the game is won
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      console.log('Game won');
      setIsGameOver(true);
    }
  }, [matchedPairs, totalPairs, setIsGameOver]);

  // Resets the game on trigger
  useEffect(() => {
    if (resetTrigger) {
      console.log('Reset trigger activated');
      resetGame();
    }
  }, [resetTrigger, resetGame]);

  return {
    resetGame,
    resetGameWithTimer,
    handleCardSelection,
  };
}
