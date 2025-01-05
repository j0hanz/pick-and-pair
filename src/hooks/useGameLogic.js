import { useCallback, useEffect } from 'react';
import { clickHandler } from '../utils/clickHandler';
import { getTotalPairs } from '../game/difficultyLogic';

export function useGameLogic({
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  matchedPairs,
  setMatchedPairs,
  previousIndex,
  setIsGameOver,
  difficulty,
  setAttempts,
}) {
  const totalPairs = getTotalPairs(difficulty);

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
        () => setMatchedPairs((prev) => prev + 1),
        () => setAttempts((prev) => prev + 1)
      );
    },
    [
      cards,
      selectedCardIndex,
      setCards,
      setSelectedCardIndex,
      previousIndex,
      setMatchedPairs,
      setAttempts,
    ]
  );

  // Checks if the game is won
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      console.log('Game won');
      setIsGameOver(true);
    }
  }, [matchedPairs, totalPairs, setIsGameOver]);

  return {
    handleCardSelection,
  };
}
