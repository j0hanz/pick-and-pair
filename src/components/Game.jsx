import React, { useCallback, useEffect } from 'react';
import { useGameState } from '../hooks/useGameState';
import { useGameLogic } from '../hooks/useGameLogic';
import Cards from './Cards';
import Scoreboard from './Modal';
import { playSound } from '../utils/soundManager';

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

  useEffect(() => {
    if (isGameOver) {
      playSound('complete');
    }
  }, [isGameOver]);

  return (
    <>
      <Cards
        cards={cards}
        handleCardSelection={handleCardSelection}
        matchedPairs={matchedPairs}
        moves={moves}
        onReset={handleReset}
        onExit={onExit}
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
          moves={moves}
        >
          {modalMessage}
        </Scoreboard>
      )}
    </>
  );
}
