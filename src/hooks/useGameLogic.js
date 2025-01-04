import { useCallback, useEffect } from 'react';
import { clickHandler } from '../utils/clickHandler';

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
}) {
  const totalPairs = difficulty === 'hard' ? 10 : 6;

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

  return {
    handleCardSelection,
  };
}
