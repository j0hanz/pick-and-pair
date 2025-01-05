import React, { useState, useRef, useEffect } from 'react';
import { generateCards } from '../data/cardData';
import { shuffleCards } from '../utils/shuffleCards';
import { useGameLogic } from '../hooks/useGameLogic';
import Cards from '../components/Cards';
import Modal from '../components/Modal';
import { getTotalPairs } from './difficultyLogic';
import { gameOverMessage, victoryMessage } from '../data/messages';

export default function GameLogic({ onRestart, onExit, difficulty }) {
  // Initialize state variables
  const [cards, setCards] = useState(() =>
    shuffleCards(generateCards(difficulty))
  );
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [completedTime, setCompletedTime] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  const previousIndex = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const totalPairs = getTotalPairs(difficulty);

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
    difficulty,
    setAttempts,
  });

  // Initial card flip effect
  useEffect(() => {
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, status: 'active' }))
    );
    const initialFlipTimer = setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, status: '' }))
      );
    }, 2000);
    return () => clearTimeout(initialFlipTimer);
  }, [setCards]);

  // Check for victory condition
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setCompletedTime(Math.floor((Date.now() - startTime) / 1000));
      setModalMessage(victoryMessage);
      setShowModal(true);
      setIsGameOver(true);
    }
  }, [
    matchedPairs,
    totalPairs,
    setModalMessage,
    setShowModal,
    setIsGameOver,
    startTime,
  ]);

  // Check for game over condition
  useEffect(() => {
    if (isGameOver && matchedPairs !== totalPairs) {
      setCompletedTime(Math.floor((Date.now() - startTime) / 1000));
      setModalMessage(gameOverMessage);
      setShowModal(true);
    }
  }, [
    isGameOver,
    matchedPairs,
    totalPairs,
    setModalMessage,
    setShowModal,
    startTime,
  ]);

  // Check for maximum attempts
  useEffect(() => {
    if (attempts >= 5) {
      setIsGameOver(true);
      setCompletedTime(Math.floor((Date.now() - startTime) / 1000));
      setModalMessage(gameOverMessage);
      setShowModal(true);
    }
  }, [attempts, startTime]);

  // Handle game restart
  const handleRestart = () => {
    setIsGameOver(false);
    setShowModal(false);
    setModalMessage('');
    setStartTime(Date.now());
    onRestart();
  };

  // Handle time up condition
  const handleTimeUp = () => {
    setIsGameOver(true);
    setCompletedTime(Math.floor((Date.now() - startTime) / 1000));
    setModalMessage(gameOverMessage);
    setShowModal(true);
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
          attemptsLeft={5 - attempts}
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
            attempts={attempts}
          />
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            onRestart={handleRestart}
            onExit={onExit}
            backdrop="static"
            completedTime={completedTime}
            score={matchedPairs}
            attemptsLeft={5 - attempts}
          >
            {modalMessage}
          </Modal>
        </>
      )}
    </>
  );
}
