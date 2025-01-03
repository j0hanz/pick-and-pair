import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

export default function Modal({ show, onClose, onRestart, title, children }) {
  return (
    <BootstrapModal show={show} onHide={onClose} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onRestart}>
          Restart
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}
