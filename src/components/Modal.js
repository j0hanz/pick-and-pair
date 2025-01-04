import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './styles/Modal.module.css';

// Header with title and close button
function CustomModalHeader({ title }) {
  return (
    <Modal.Header closeVariant="white" className="border-0">
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
}

// Footer with close and restart buttons
function CustomModalFooter({ onRestart }) {
  return (
    <Modal.Footer className="border-0">
      <Button variant="primary" onClick={onRestart}>
        Restart
      </Button>
    </Modal.Footer>
  );
}

// Main modal component
export default function CustomModal({
  show,
  onClose,
  onRestart,
  title,
  children,
}) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      className={styles.modal}
      backdrop="static"
    >
      <CustomModalHeader title={title} onClose={onClose} />
      <Modal.Body>{children}</Modal.Body>
      <CustomModalFooter onClose={onClose} onRestart={onRestart} />
    </Modal>
  );
}
