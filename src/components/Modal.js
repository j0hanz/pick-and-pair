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
    <Modal show={show} onHide={onClose} centered className={styles.modal}>
      <Modal.Header closeButton closeVariant="white" className="border-0">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onRestart}>
          Restart
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
