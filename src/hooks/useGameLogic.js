import { useCallback, useEffect } from 'react';
import { handleCardClick } from '../utils/cardUtils';

// Custom hook to manage game logic
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
  setFeedback,
}) {
  const totalPairs = 6;

  // Function to handle card selection
  const handleCardSelection = useCallback(
    (index) => {
      handleCardClick(
        index,
        cards,
        setCards,
        selectedCardIndex,
        setSelectedCardIndex,
        previousIndex,
        () => setMatchedPairs((prev) => prev + 1),
        () => setMoves((prev) => prev + 1),
        setFeedback
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
      setFeedback,
    ]
  );

  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setIsGameOver(true);
    }
  }, [matchedPairs, totalPairs, setIsGameOver]);

  return {
    handleCardSelection,
  };
}
