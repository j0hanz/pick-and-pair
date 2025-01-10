import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { HiOutlineXMark, HiOutlineClock } from 'react-icons/hi2';
import styles from './styles/Modal.module.css';

// Header with title and close button
function ModalHeader({ title }) {
  return (
    <Modal.Header closeVariant="white" className="border-0 p-0">
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
}

// Footer with close and restart buttons
function ModalFooter({ onReset, onExit }) {
  return (
    <Modal.Footer className="border-0 justify-content-between p-0">
      <Button className={styles.resetButton} onClick={onReset}>
        Restart
      </Button>
      <Button variant="secondary w-25" onClick={onExit}>
        Exit
      </Button>
    </Modal.Footer>
  );
}

// Scoreboard component displays the game statistics
function Scoreboard({ score, moves, completedTime }) {
  return (
    <div className={`${styles.scoreboard} py-4`}>
      <div className={styles.scoreItem}>
        <HiOutlineXMark className={`me-1 ${styles.scoreIcon}`} />
        {moves}
      </div>
      <div className={styles.scoreItem}>{score}</div>
      <div className={styles.scoreItem}>
        <HiOutlineClock className={`me-1 ${styles.scoreIcon}`} />
        {completedTime}
      </div>
    </div>
  );
}

// Main modal component
export default function CustomModal({
  show,
  onClose,
  onReset,
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
      <ModalFooter onReset={onReset} onExit={onExit} />
    </Modal>
  );
}
