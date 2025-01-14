import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { HiArrowPath, HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import styles from './styles/Modal.module.css';
import Scoreboard from '../data/scoreData';
import InstructionsData from '../data/instructionsData';
import { handleButtonClick } from '../utils/soundManager';
import { fetchLatestCommit } from '../api/github';

// Main modal component
export default function ScoreboardModal({
  show,
  onClose,
  onReset,
  onExit,
  title = 'Game completed!',
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
      <Modal.Header className="border-0 d-flex justify-content-center">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
        <Scoreboard score={score} moves={moves} completedTime={completedTime} />
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button
          className={`${styles.btnRestart} ${styles.modalButton}`}
          onClick={handleButtonClick(onReset)}
        >
          <HiArrowPath className={`${styles.btnIcon} me-1`} />
          Restart
        </Button>
        <Button
          className={`${styles.btnExit} ${styles.modalButton}`}
          onClick={handleButtonClick(onExit)}
        >
          <HiOutlineArrowRightOnRectangle
            className={`${styles.btnIcon} me-1`}
          />
          Exit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function GameInstructions({ show, onClose }) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      className={`${styles.modal} ${styles.instructionsModal}`}
    >
      <InstructionsData />
      <Modal.Footer className="border-0">
        <Button
          className={styles.btnClose}
          onClick={handleButtonClick(onClose)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function LatestUpdates({ show, onClose }) {
  const [commit, setCommit] = useState(null);

  useEffect(() => {
    const getCommitData = async () => {
      const data = await fetchLatestCommit();
      setCommit(data);
    };
    getCommitData();
  }, []);

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      className={`${styles.modal} ${styles.instructionsModal}`}
    >
      <Modal.Body>
        {!commit ? (
          <div>Loading...</div>
        ) : (
          <div>
            <p>
              Latest Commit: <a href={commit.url}>{commit.message}</a>
            </p>
            <p>Date: {new Date(commit.date).toLocaleString()}</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button
          className={styles.btnClose}
          onClick={handleButtonClick(onClose)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
