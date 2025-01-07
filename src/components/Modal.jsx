import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './styles/Modal.module.css';

// Header with title and close button
function ModalHeader({ title }) {
  return (
    <Modal.Header closeVariant="white" className="border-0">
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
}

// Footer with close and restart buttons
function ModalFooter({ onRestart, onExit }) {
  return (
    <Modal.Footer className="border-0">
      <Button variant="primary" onClick={onRestart}>
        Restart
      </Button>
      <Button variant="secondary" onClick={onExit}>
        Exit
      </Button>
    </Modal.Footer>
  );
}

// Scoreboard component displays the game statistics
function Scoreboard({ completedTime, score, moves }) {
  return (
    <div className={styles.scoreboard}>
      <p>Completed Time: {completedTime} seconds</p>
      <p>Score: {score}</p>
      <p>Moves: {moves}</p>
    </div>
  );
}

// Main modal component
export default function CustomModal({
  show,
  onClose,
  onRestart,
  onExit,
  title,
  children,
  completedTime,
  score,
  moves,
}) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      className={styles.modal}
      backdrop="static"
    >
      <ModalHeader title={title} onClose={onClose} />
      <Modal.Body>
        {children}
        <Scoreboard completedTime={completedTime} score={score} moves={moves} />
      </Modal.Body>
      <ModalFooter onRestart={onRestart} onExit={onExit} />
    </Modal>
  );
}
