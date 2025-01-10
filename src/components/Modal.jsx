import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
  HiXMark,
  HiOutlineClock,
  HiArrowPath,
  HiOutlineArrowRightOnRectangle,
} from 'react-icons/hi2';
import styles from './styles/Modal.module.css';

// Header with title and close button
function ModalHeader({ title = 'Game completed!' }) {
  return (
    <Modal.Header className="border-0 d-flex justify-content-center">
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
}

// Footer with close and restart buttons
function ModalFooter({ onReset, onExit }) {
  return (
    <Modal.Footer className="border-0">
      <Button
        className={`${styles.btnRestart} ${styles.modalButton}`}
        onClick={onReset}
      >
        <HiArrowPath className={`${styles.btnIcon} me-1`} />
        Restart
      </Button>
      <Button
        className={`${styles.btnExit} ${styles.modalButton}`}
        onClick={onExit}
      >
        <HiOutlineArrowRightOnRectangle className={`${styles.btnIcon} me-1`} />
        Exit
      </Button>
    </Modal.Footer>
  );
}

// Scoreboard component displays the game statistics
function Scoreboard({ score, moves, completedTime }) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.scoreItem}>
        <HiXMark className={`me-1 ${styles.scoreIcon}`} />
        {moves}
      </div>
      <div className={styles.scoreItem}>{score}</div>
      <div className={styles.scoreItem}>
        <HiOutlineClock className={`me-2 ${styles.scoreIcon}`} />
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
