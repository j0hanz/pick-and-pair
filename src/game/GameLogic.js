import React from 'react';
import { useGameState } from '../hooks/useGameState';
import { useGameLogic } from '../hooks/useGameLogic';
import Cards from '../components/Cards';
import Modal from '../components/Modal';

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
    handleRestart,
    handleTimeUp,
  } = useGameState(onRestart);

  // Custom hook for game logic
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
  });

  // Handle game reset
  const handleReset = () => {
    handleRestart();
  };

  return (
    <>
      {isGameOver ? (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          onRestart={handleRestart}
          onExit={onExit}
          backdrop="static"
          completedTime={completedTime}
          score={matchedPairs}
          moves={moves}
        >
          {modalMessage}
        </Modal>
      ) : (
        <>
          <Cards
            cards={cards}
            handleCardSelection={handleCardSelection}
            matchedPairs={matchedPairs}
            initialTime={60}
            onTimeUp={handleTimeUp}
            moves={moves}
            onReset={handleReset}
          />
        </>
      )}
    </>
  );
}
