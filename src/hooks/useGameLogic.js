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
  // Get the total number of pairs based on difficulty
  const totalPairs = getTotalPairs(difficulty);

  // Handle card selection logic
  const handleCardSelection = useCallback(
    (index) => {
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

  // Check if the game is over
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setIsGameOver(true);
    }
  }, [matchedPairs, totalPairs, setIsGameOver]);

  return {
    handleCardSelection,
  };
}
