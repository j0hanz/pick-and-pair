import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './styles/Modal.module.css';

export default function CustomModal({
  show,
  onClose,
  onRestart,
  title,
  children,
}) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.modalContent}>{children}</div>
        <div
          className={`${styles.modalButtons} d-flex justify-content-between`}
        >
          <Button
            variant="secondary"
            onClick={onClose}
            className={styles.modalButton}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={onRestart}
            className={styles.modalButton}
          >
            Restart
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
