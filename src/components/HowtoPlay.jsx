import React from 'react';
import { Modal, Button, ListGroup, Tab, Tabs } from 'react-bootstrap';
import {
  HiOutlineInformationCircle,
  HiOutlineClock,
  HiXMark,
  HiCheck,
  HiArrowPath,
  HiStar,
  HiOutlineArrowRightOnRectangle,
} from 'react-icons/hi2';
import styles from './styles/Modal.module.css';

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
      <Tabs defaultActiveKey="gameplay" className="mb-3" justify>
        <Tab eventKey="info" title="Info">
          <ListGroup variant="flush">
            <ListGroup.Item>
              Welcome to the memory game! Match all pairs of cards. At the
              start, cards briefly reveal themselves. Memorize their positions.
              The game has 6 pairs (12 cards).
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Test your memory and concentration. Pair all matching cards and
              aim for a perfect score.
            </ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="gameplay" title="Gameplay">
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiArrowPath className={styles.listIcon} />
            </ListGroup.Item>
            <ListGroup.Item>Restart game</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiOutlineArrowRightOnRectangle className={styles.listIcon} />
            </ListGroup.Item>
            <ListGroup.Item>Exit game</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiOutlineClock
                className={`${styles.listIcon} ${styles.clockIcon}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Game time</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiXMark className={`${styles.listIcon} ${styles.statsIcon}`} />
            </ListGroup.Item>
            <ListGroup.Item>Wrong moves</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiCheck className={`${styles.listIcon} ${styles.success}`} />
            </ListGroup.Item>
            <ListGroup.Item>Correct moves</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>Stars earned</ListGroup.Item>
          </ListGroup>
          <hr />
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiOutlineInformationCircle className={styles.listIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Your performance is rated based on time and number of moves made.
            </ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="scoring" title="Scoring">
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 4 or more moves.
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 3 moves.
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 2 moves.
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 1 move.
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 0 moves.
            </ListGroup.Item>
          </ListGroup>
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
