import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { gameOverMessage, victoryMessage } from '../../data/messages';
import styles from './GameStatus.module.css';

export default function GameStatus({ onRestart, onExit }) {
  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);
  // State to store the modal title
  const [modalTitle, setModalTitle] = useState('');
  // State to store the modal message
  const [modalMessage, setModalMessage] = useState('');

  // Handle game over scenario
  const handleGameOver = () => {
    setModalTitle('Game Over');
    setModalMessage(gameOverMessage);
    setShowModal(true);
  };

  // Handle victory scenario
  const handleVictory = () => {
    setModalTitle('Victory');
    setModalMessage(victoryMessage);
    setShowModal(true);
  };

  // Close the modal
  const handleClose = () => setShowModal(false);

  // Restart the game and close the modal
  const handleRestart = () => {
    onRestart();
    setShowModal(false);
  };

  return (
    <div className={styles.gameStatus}>
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
