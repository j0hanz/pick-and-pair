import React from 'react';
import { Modal, Button, ListGroup, Tab, Tabs, Figure } from 'react-bootstrap';
import {
  HiOutlineInformationCircle,
  HiOutlineClock,
  HiXMark,
  HiCheck,
  HiArrowPath,
  HiStar,
} from 'react-icons/hi2';
import styles from './styles/Modal.module.css';
import gameGif from '../assets/img/how-to-play.gif';

// Header with title and close button
function ModalHeader({ title = 'How to Play' }) {
  return (
    <Modal.Header className="border-0 d-flex flex-column align-items-center">
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
}

// Body with how-to-play content
function ModalBody() {
  return (
    <Modal.Body className="p-0">
      <Tabs defaultActiveKey="info" className="mb-3" justify>
        <Tab eventKey="info" title="Info">
          <ListGroup horizontal>
            <ListGroup.Item>
              <Figure>
                <Figure.Image
                  src={gameGif}
                  alt="How to play"
                  className="rounded"
                />
                <Figure.Caption>
                  Test your memory and concentration by pairing all matching
                  cards. Sharpen your mind, race against time, and aim for a
                  perfect score. Good luck and have fun!
                </Figure.Caption>
              </Figure>
            </ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="gameplay" title="Gameplay">
          <ListGroup as="ol">
            <ListGroup.Item>
              Cards briefly reveal themselves at the start for easier
              memorization. Each game has 6 matching pairs (12 cards total).
            </ListGroup.Item>
            <hr />
            <ListGroup variant="flush">
              <ListGroup.Item>
                <HiArrowPath className={`${styles.listIcon} me-1`} />
                Restart the game.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiOutlineClock
                  className={`${styles.listIcon} me-1 ${styles.clockIcon}`}
                />
                Shows game time. Fewer moves and faster completion lead to
                better ratings.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiXMark
                  className={`${styles.listIcon} me-1 ${styles.statsIcon}`}
                />
                Displays failed attempts.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiCheck
                  className={`${styles.listIcon} me-1 ${styles.success}`}
                />
                Match all pairs to win. Matched pairs stay revealed; mismatched
                cards flip back.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon}`}
                />
                Shows the number of stars earned.
              </ListGroup.Item>
            </ListGroup>
          </ListGroup>
        </Tab>
        <Tab eventKey="scoring" title="Scoring">
          <ListGroup.Item>
            <ListGroup variant="flush" className="mb-0 mt-1">
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                5 stars: Complete within 60 seconds with 0 moves.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                4 stars: Complete within 60 seconds with 1 move.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                3 stars: Complete within 60 seconds with 2 moves.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                2 stars: Complete within 60 seconds with 3 moves.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                1 star: Complete within 60 seconds with 4 or more moves.
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </Tab>
      </Tabs>
    </Modal.Body>
  );
}

// Footer with close button
function ModalFooter({ onClose }) {
  return (
    <Modal.Footer className="border-0">
      <Button className={styles.btnClose} onClick={onClose}>
        <HiOutlineInformationCircle className={`${styles.btnIcon} me-1`} />
        Close
      </Button>
    </Modal.Footer>
  );
}

// Main modal component
export default function HowtoPlay({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered className={styles.modal}>
      <ModalHeader />
      <ModalBody />
      <ModalFooter onClose={onClose} />
    </Modal>
  );
}
