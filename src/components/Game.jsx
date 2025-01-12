import React, { useCallback } from 'react';
import { useGameState } from '../hooks/useGameState';
import { useGameLogic } from '../hooks/useGameLogic';
import Cards from './Cards';
import Scoreboard from './Scoreboard';
import Score from './Score';

export default function GameLogic({ onRestart, onExit }) {
  const {
    cards,
    setCards,
    selectedCardIndex,
    setSelectedCardIndex,
    matchedPairs,
    setMatchedPairs,
    isGameOver,
    setIsGameOver,
    moves,
    setMoves,
    completedTime,
    previousIndex,
    showModal,
    setShowModal,
    modalMessage,
    timerActive,
    feedback,
    setFeedback,
  } = useGameState(onRestart);

  const { handleCardSelection } = useGameLogic({
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
  });

  const handleReset = useCallback(() => {
    onRestart();
  }, [onRestart]);

  return (
    <>
      <Cards
        cards={cards}
        handleCardSelection={handleCardSelection}
        matchedPairs={matchedPairs}
        moves={moves}
        onReset={handleReset}
        timerActive={timerActive}
        feedback={feedback}
      />
      {isGameOver && (
        <Scoreboard
          show={showModal}
          onClose={() => setShowModal(false)}
          onReset={handleReset}
          onExit={onExit}
          backdrop="static"
          completedTime={completedTime}
          score={<Score moves={moves} completedTime={completedTime} />}
          moves={moves}
        >
          {modalMessage}
        </Scoreboard>
      )}
    </>
  );
}
