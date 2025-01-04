import React, { useState } from 'react';
import Modal from './Modal';
import { gameOverMessage, victoryMessage } from '../data/messages';

export default function GameStatus({ onRestart, onExit }) {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const handleGameOver = () => {
    setModalTitle('Game Over');
    setModalMessage(gameOverMessage);
    setShowModal(true);
  };

  const handleVictory = () => {
    setModalTitle('Victory');
    setModalMessage(victoryMessage);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleRestart = () => {
    onRestart();
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleGameOver}>Game Over</button>
      <button onClick={handleVictory}>Victory</button>
      <Modal
        show={showModal}
        onClose={handleClose}
        onRestart={handleRestart}
        onExit={onExit}
        title={modalTitle}
        backdrop="static"
      >
        {modalMessage}
      </Modal>
    </div>
  );
}
