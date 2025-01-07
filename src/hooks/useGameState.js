import { useState, useRef, useEffect } from 'react';
import { shuffleCards } from '../utils/shuffleCards';
import { generateCards } from '../data/cardData';
import { gameOverMessage, victoryMessage } from '../data/messages';

export function useGameState(onRestart) {
  const [cards, setCards] = useState(() => shuffleCards(generateCards()));
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [moves, setMoves] = useState(0);
  const [completedTime, setCompletedTime] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const previousIndex = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const totalPairs = 6;

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

  // Handle game restart
  const handleRestart = () => {
    setIsGameOver(false);
    setShowModal(false);
    setModalMessage('');
    setStartTime(Date.now());
    setMoves(0);
    onRestart();
  };

  // Handle time up condition
  const handleTimeUp = () => {
    setIsGameOver(true);
    setCompletedTime(Math.floor((Date.now() - startTime) / 1000));
    setModalMessage(gameOverMessage);
    setShowModal(true);
  };

  return {
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
    startTime,
    previousIndex,
    showModal,
    setShowModal,
    modalMessage,
    handleRestart,
    handleTimeUp,
  };
}
