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
function Scoreboard({ score, moves, completedTime }) {
  return (
    <div className={styles.scoreboard}>
      <p>Moves: {moves}</p>
      <p>Score: {score}</p>
      <p>Time: {completedTime} seconds</p>
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
  score,
  moves,
  completedTime,
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
        <Scoreboard score={score} moves={moves} completedTime={completedTime} />
      </Modal.Body>
      <ModalFooter onRestart={onRestart} onExit={onExit} />
    </Modal>
  );
}
