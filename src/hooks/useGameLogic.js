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
  setMoves,
}) {
  // Use 6 pairs for both difficulty levels
  const totalPairs = 6;

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
        () => setMoves((prev) => prev + 1)
      );
    },
    [
      cards,
      selectedCardIndex,
      setCards,
      setSelectedCardIndex,
      previousIndex,
      setMatchedPairs,
      setMoves,
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
